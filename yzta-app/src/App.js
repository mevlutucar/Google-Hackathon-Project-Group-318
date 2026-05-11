import React, { useState } from 'react';

export default function CooperativePortal() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Kooperatif Portalımıza hoş geldiniz. Sağlamış olduğumuz hizmetlerimiz ve/veya satışta olan ürünlerimiz ile ilgili her türlü sorunuzu cevaplamaya hazırım.' }
  ]);
  const [inputText, setInputText] = useState('');

  // Tema Renkleri
  const theme = darkMode ? {
    bg: '#121f13', text: '#e0e0e0', cardBg: '#3a4f3c', primary: '#879c88', footer: '#1a2b1c'
  } : {
    bg: '#f9faf8', text: '#2d3748', cardBg: '#ffffff', primary: '#a1bd8b', footer: '#879c88'
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    setChatMessages([...chatMessages, { sender: 'user', text: inputText }]);
    setInputText('');
    // Burada FastAPI RAG endpoint'ine istek atılacak
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'ai', text: 'RAG sisteminden gelen AI yanıtı burada görünecek...' }]);
    }, 1000);
  };

  const triggerN8N = () => {
    alert("n8n Tetiklendi: Stok azaldığında otomatik tedarikçiye mail taslağı oluşturuldu!");
    // FastAPI /trigger-n8n endpoint'ine POST atılacak
  };

  // Temsili Ürünler
  const products = [
    { id: 1, name: 'Organik Çiçek Balı', price: '250 TL', img: 'https://via.placeholder.com/200', tag: 'tükendi' },
    { id: 2, name: 'El Yapımı Tarhana', price: '120 TL', img: 'https://via.placeholder.com/200', tag: 'son 5 ürün' },
    { id: 3, name: 'Soğuk Sıkım Zeytinyağı', price: '450 TL', img: 'https://via.placeholder.com/200', tag: '' },
    { id: 4, name: 'Ev Yapımı Salça', price: '180 TL', img: 'https://via.placeholder.com/200', tag: '' },
    { id: 5, name: 'Kuru İncir', price: '200 TL', img: 'https://via.placeholder.com/200', tag: '' },
    { id: 6, name: 'Cevizli Sucuk', price: '150 TL', img: 'https://via.placeholder.com/200', tag: '' },
  ];

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', display: 'flex', transition: 'all 0.3s ease' }}>
      
      {/* SOL: ADMİN PANELİ (Açılır/Kapanır) */}
      <div style={{ width: sidebarOpen ? '250px' : '0px', overflow: 'hidden', backgroundColor: theme.cardBg, transition: 'width 0.3s ease', borderRight: `1px solid ${theme.primary}` }}>
        <div style={{ padding: '20px', width: '250px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', color: theme.primary }}>Yönetici Paneli</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            <li style={{ cursor: 'pointer' }}>📦 Ürün ve Stok Düzenleme</li>
            <li style={{ cursor: 'pointer' }}>🚚 Kargo Takip (AI Destekli)</li>
            <li style={{ cursor: 'pointer' }}>📊 İçgörüler ve Analitik</li>
            <li style={{ cursor: 'pointer' }}>🎧 Müşteri Destek Geçmişi</li>
          </ul>
          <hr style={{ margin: '20px 0', borderColor: theme.primary }} />
          {/* HACKATHON JÜRİSİ İÇİN AKSİYON BUTONU */}
          <button onClick={triggerN8N} style={{ width: '100%', backgroundColor: '#d97706', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
            ⚡ Tedarikçiye Mail Taslağı (n8n)
          </button>
        </div>
      </div>

      {/* SAĞ: ANA İÇERİK (Web Sitesi / Dashboard) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: theme.cardBg, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: theme.text }}>☰</button>
            <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: theme.primary }}>KOOP-AI</h1>
          </div>
          
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ cursor: 'pointer' }}>Kurumsal ▾</span>
            <span style={{ cursor: 'pointer' }}>Üyeler</span>
            <span style={{ cursor: 'pointer' }}>Eğitimler</span>
            <span style={{ cursor: 'pointer' }}>İletişim</span>
            <span style={{ cursor: 'pointer' }}>🔍</span>
            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🇹🇷/🇬🇧</span>
          </nav>
        </header>

        {/* HERO (MOTTO) SECTION - TAM EKRAN GENİŞLİK */}
        <section style={{ position: 'relative', width: '100%', height: '400px', backgroundImage: 'url(https://via.placeholder.com/1920x400)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
          <h2 style={{ position: 'relative', fontSize: '3rem', fontWeight: 'bold', zIndex: 1, marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Doğadan Sofranıza, Güvenle.
          </h2>
          <button style={{ position: 'relative', zIndex: 1, backgroundColor: '#a1bd8b', color: 'white', border: 'none', padding: '15px 30px', fontSize: '1.1rem', borderRadius: '5px', cursor: 'pointer' }}>
            Bilgi Al
          </button>
        </section>

        {/* BİLGİ & DETAYLAR SECTION */}
        <section style={{ padding: '60px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🌱</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: theme.primary }}>Yerel Üretim, Global Kalite</h3>
          <p style={{ maxWidth: '600px', margin: '15px auto', color: theme.text, opacity: 0.8 }}>
            Kooperatifimiz, sürdürülebilir tarım ilkeleriyle üretilen ürünleri aracı olmadan doğrudan sizlere ulaştırır.
          </p>
          <button style={{ backgroundColor: theme.primary, color: 'white', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer' }}>Detaylar</button>
        </section>

        {/* ÜRÜNLERİMİZ SECTION */}
        <section style={{ padding: '40px', backgroundColor: darkMode ? '#1a2b1c' : '#f0f4ef' }}>
          <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: theme.primary }}>Ürünlerimiz</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
            {products.map(product => (
              <div key={product.id} style={{ backgroundColor: theme.cardBg, borderRadius: '8px', padding: '15px', position: 'relative', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                {product.tag === 'tükendi' && <span style={{ position: 'absolute', top: 10, right: 10, backgroundColor: '#ef4444', color: 'white', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '12px' }}>Tükendi</span>}
                {product.tag === 'son 5 ürün' && <span style={{ position: 'absolute', top: 10, right: 10, backgroundColor: '#f59e0b', color: 'white', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '12px' }}>Son 5 Ürün</span>}
                
                <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '5px', marginBottom: '15px', filter: product.tag === 'tükendi' ? 'grayscale(100%)' : 'none' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '5px' }}>{product.name}</h4>
                <p style={{ color: theme.primary, fontWeight: 'bold', marginBottom: '15px' }}>{product.price}</p>
                <button disabled={product.tag === 'tükendi'} style={{ width: '100%', padding: '8px', backgroundColor: product.tag === 'tükendi' ? 'gray' : theme.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: product.tag === 'tükendi' ? 'not-allowed' : 'pointer' }}>
                  {product.tag === 'tükendi' ? 'Stokta Yok' : 'Sepete Ekle'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: theme.footer, color: 'white', padding: '40px 40px 20px 40px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            {/* Sol */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>KOOP-AI</h2>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Kurumsal</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Üyeler</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Eğitimler</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>İletişim</a></li>
              </ul>
            </div>
            
            {/* Orta */}
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: '20px' }}>İletişim</h3>
              <p style={{ marginBottom: '10px' }}>📍 Türkiye</p>
              <p style={{ marginBottom: '10px' }}>🗓️ Pazartesi – Cumartesi 9:00 – 17:00</p>
              <p style={{ marginBottom: '10px' }}>✉️ info@ornekmail.com</p>
              <p style={{ marginBottom: '10px' }}>📱 +90 5XX XXX XX XX</p>
            </div>
            
            {/* Sağ - Harita */}
            <div style={{ flex: 1, backgroundColor: '#d1d5db', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', color: '#4b5563', minHeight: '150px' }}>
              [Google Maps - Türkiye Görünümü]
            </div>
          </div>
          
          <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '20px' }} />
          <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.8 }}>
             © Copyright 2026 – Google YZTA Hackathon Group 318 All Rights Reserved.
          </p>
        </footer>

        {/* CHATBOT (RAG SİSTEMİ) */}
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          {chatOpen ? (
            <div style={{ width: '350px', height: '450px', backgroundColor: theme.cardBg, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: `1px solid ${theme.primary}` }}>
              <div style={{ backgroundColor: theme.primary, color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>Koop-AI Asistan</span>
                <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
              </div>
              
              <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', backgroundColor: msg.sender === 'user' ? theme.primary : (darkMode ? '#2c3b2d' : '#f1f5f9'), color: msg.sender === 'user' ? 'white' : theme.text, padding: '10px 15px', borderRadius: '15px', maxWidth: '80%', fontSize: '0.9rem' }}>
                    {msg.text}
                  </div>
                ))}
              </div>
              
              <div style={{ padding: '10px', borderTop: `1px solid ${theme.primary}`, display: 'flex' }}>
                <input 
                  type="text" 
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Bir soru sorun..." 
                  style={{ flex: 1, padding: '10px', borderRadius: '5px', border: `1px solid ${theme.primary}`, backgroundColor: theme.bg, color: theme.text, outline: 'none' }}
                />
                <button onClick={handleSendMessage} style={{ marginLeft: '10px', backgroundColor: theme.primary, color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
                  Gönder
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setChatOpen(true)} style={{ backgroundColor: theme.primary, color: 'white', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              💬
            </button>
          )}
        </div>

      </div>
    </div>
  );
}