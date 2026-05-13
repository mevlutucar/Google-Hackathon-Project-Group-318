import sqlite3

def initialize_system():
    conn = sqlite3.connect('coopwise.db')
    cursor = conn.cursor()

    # Stok Tablosu Yapılandırması
    cursor.execute('''CREATE TABLE IF NOT EXISTS inventory 
                     (id INTEGER PRIMARY KEY, 
                      product_name TEXT, 
                      stock_count INTEGER, 
                      is_notified INTEGER DEFAULT 0)''')

    # Mevcut verileri temizle ve arayüzdeki 6 ürünü ekle
    cursor.execute("DELETE FROM inventory")
    
    products = [
        ('Organik Cicek Bali', 0), 
        ('El Yapimi Tarhana', 12),
        ('Soguk Sikim Zeytinyagi', 8),
        ('Karakovan Bali', 5),
        ('Dogal Dut Pekmezi', 10),
        ('Koy Tipi Eriste', 20)
    ]
    
    cursor.executemany("INSERT INTO inventory (product_name, stock_count) VALUES (?, ?)", products)

    conn.commit()
    conn.close()
    print("Sistem veritabanı başarıyla kuruldu ve ürünler tanımlandı.")

if __name__ == "__main__":
    initialize_system()