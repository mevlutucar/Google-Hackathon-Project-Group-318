from kontrol import check_system_status

def simulate_system_check():
    print("--- CoopWise Sistem Kontrolü Başlatıldı ---")
    
    # Tüm sistemi (Stok ve Kargo) denetleyen ana fonksiyonu çağırıyoruz
    check_system_status()

if __name__ == "__main__":
    simulate_system_check()