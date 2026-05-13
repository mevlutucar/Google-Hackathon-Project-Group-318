import sqlite3
import requests

# n8n Webhook URL'nizi buraya yapıştırın
WEBHOOK_URL = "https://bee2.app.n8n.cloud/webhook-test/46343d99-2268-4b29-b8a8-e0a23cb906cd"

def send_n8n_signal(operation_type, data_list):
    """n8n sistemine yapılandırılmış veri paketi gönderir."""
    payload = {
        "islem_metadata": {
            "tip": operation_type,
            "oncelik": "YUKSEK",
            "kaynak": "CoopWise_Backend"
        },
        "veriler": data_list
    }
    
    try:
        # n8n'e veriyi JSON formatında gönderiyoruz
        response = requests.post(WEBHOOK_URL, json=payload)
        return response.status_code == 200
    except Exception as e:
        print(f"n8n baglanti hatasi: {e}")
        return False

def check_system_status():
    """Veritabanini denetler ve aksiyon gerektiren durumlari n8n'e iletir."""
    conn = sqlite3.connect('coopwise.db')
    cursor = conn.cursor()

    # --- 1. STOK KONTROLÜ ---
    # Stoğu 0 olan ve henüz bildirim gitmemiş (is_notified=0) ürünleri çekiyoruz
    cursor.execute("SELECT product_name, stock_count FROM inventory WHERE stock_count <= 0 AND is_notified = 0")
    out_of_stock_items = cursor.fetchall()

    if out_of_stock_items:
        stok_paketi = []
        for item in out_of_stock_items:
            stok_paketi.append({
                "urun": item[0],
                "stok": item[1],
                "kategori": "Yerel Uretim"
            })
            # Ayni ürün için defalarca sinyal gitmemesi için bildirim durumunu güncelliyoruz
            cursor.execute("UPDATE inventory SET is_notified = 1 WHERE product_name = ?", (item[0],))
        
        # n8n Switch düğümündeki 'STOK_ALARM' kolunu tetikler
        if send_n8n_signal("STOK_ALARM", stok_paketi):
            print(f"✅ Stok uyarisi n8n'e iletildi: {len(stok_paketi)} ürün.")

    # --- 2. KARGO KONTROLÜ (Simülasyon) ---
    # n8n Switch düğümündeki 'KARGO_GECIKME' kolunu test etmek için sabit bir veri gönderiyoruz
    kargo_paketi = [{
        "takip_no": "CPW-9982",
        "musteri": "Ayse Yilmaz",
        "durum": "Gecikme Tespit Edildi",
        "lokasyon": "Izmir Transfer Merkezi"
    }]
    
    if send_n8n_signal("KARGO_GECIKME", kargo_paketi):
        print("✅ Kargo gecikme analizi n8n'e iletildi.")

    conn.commit()
    conn.close()

if __name__ == "__main__":
    # Dosya dogrudan çalistirilirsa kontrolü baslat
    check_system_status()