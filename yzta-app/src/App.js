import React, { useState } from 'react';

export default function CooperativePortal() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState(null); // Admin paneli dinamik sekme kontrolü
  
  // Header state'leri
  const [isKurumsalHovered, setIsKurumsalHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Chat state'leri
  const [chatOpen, setChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Kooperatif Portalımıza hoş geldiniz. Sağlamış olduğumuz hizmetlerimiz ve/veya satışta olan ürünlerimiz ile ilgili her türlü sorunuzu cevaplamaya hazırım.' }
  ]);

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
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'ai', text: 'RAG sisteminden gelen AI yanıtı burada görünecek...' }]);
    }, 1000);
  };

  const triggerN8N = () => {
    alert("n8n Tetiklendi: Stok azaldığında otomatik tedarikçiye mail taslağı oluşturuldu!");
  };

  // Temsili Ürünler
const products = [
  { id: 1, name: 'Organik Çiçek Balı', price: '250 TL', img: 'https://placehold.co/400', tag: 'tükendi' },
  { id: 2, name: 'El Yapımı Tarhana', price: '120 TL', img: 'https://placehold.co/400', tag: 'son 5 ürün' },
  { id: 3, name: 'Soğuk Sıkım Zeytinyağı', price: '450 TL', img: 'https://placehold.co/400', tag: '' },
  { id: 4, name: 'Ev Yapımı Salça', price: '180 TL', img: 'https://placehold.co/400', tag: '' },
  { id: 5, name: 'Kuru İncir', price: '200 TL', img: 'https://placehold.co/400', tag: '' },
  { id: 6, name: 'Cevizli Sucuk', price: '150 TL', img: 'https://placehold.co/400', tag: '' },
];

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', display: 'flex', transition: 'all 0.3s ease', fontFamily: 'sans-serif' }}>
      
      {/* SOL: ADMİN PANELİ */}
      <div style={{ width: sidebarOpen ? '320px' : '0px', overflow: 'hidden', backgroundColor: theme.cardBg, transition: 'width 0.3s ease', borderRight: `1px solid ${theme.primary}`, flexShrink: 0 }}>
        <div style={{ padding: '20px', width: '320px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '25px', color: theme.primary }}>Yönetici Paneli</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '3', fontSize: '1.05rem' }}>
            <li onClick={() => setActiveAdminTab('Ürün ve Stok Düzenleme')} style={{ cursor: 'pointer', padding: '0 10px', borderRadius: '5px', backgroundColor: activeAdminTab === 'Ürün ve Stok Düzenleme' ? theme.primary : 'transparent', color: activeAdminTab === 'Ürün ve Stok Düzenleme' ? 'white' : theme.text }}>📦 Ürün ve Stok Düzenleme</li>
            <li onClick={() => setActiveAdminTab('Kargo Takip (AI Destekli)')} style={{ cursor: 'pointer', padding: '0 10px', borderRadius: '5px', backgroundColor: activeAdminTab === 'Kargo Takip (AI Destekli)' ? theme.primary : 'transparent', color: activeAdminTab === 'Kargo Takip (AI Destekli)' ? 'white' : theme.text }}>🚚 Kargo Takip (AI Destekli)</li>
            <li onClick={() => setActiveAdminTab('İçgörüler ve Analitik')} style={{ cursor: 'pointer', padding: '0 10px', borderRadius: '5px', backgroundColor: activeAdminTab === 'İçgörüler ve Analitik' ? theme.primary : 'transparent', color: activeAdminTab === 'İçgörüler ve Analitik' ? 'white' : theme.text }}>📊 İçgörüler ve Analitik</li>
            <li onClick={() => setActiveAdminTab('Müşteri Destek Geçmişi')} style={{ cursor: 'pointer', padding: '0 10px', borderRadius: '5px', backgroundColor: activeAdminTab === 'Müşteri Destek Geçmişi' ? theme.primary : 'transparent', color: activeAdminTab === 'Müşteri Destek Geçmişi' ? 'white' : theme.text }}>🤝 Müşteri Destek Geçmişi</li>
          </ul>
          <hr style={{ margin: '30px 0', borderColor: theme.primary }} />
          <button onClick={triggerN8N} style={{ width: '75%', backgroundColor: '#d97706', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}>
            ⚡ Tedarikçiye Mail Taslağı (N8N)
          </button>
        </div>
      </div>

      {/* SAĞ: ANA İÇERİK (Web Sitesi / Dinamik Sekme) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', height: '100vh' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: theme.cardBg, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', color: theme.text }}>☰</button>
            <h1 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: theme.primary }}>COOPWISE</h1>
          </div>
          
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center', fontWeight: '500' }}>
            
            {/* Kurumsal Menü (Dropdown) */}
            <div 
              onMouseEnter={() => setIsKurumsalHovered(true)} 
              onMouseLeave={() => setIsKurumsalHovered(false)}
              style={{ position: 'relative', cursor: 'pointer', padding: '10px 0' }}
            >
              Kurumsal ▾
              {isKurumsalHovered && (
                <div style={{ position: 'absolute', top: '100%', left: '-20px', width: '180px', backgroundColor: theme.cardBg, boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', zIndex: 100 }}>
                  <div style={{ padding: '12px 20px', borderBottom: `1px solid ${theme.primary}33` }}>Hakkımızda</div>
                  <div style={{ padding: '12px 20px' }}>Amaç ve İlkeler</div>
                </div>
              )}
            </div>

            <span style={{ cursor: 'pointer' }}>Üyeler</span>
            <span style={{ cursor: 'pointer' }}>Eğitimler</span>
            <span style={{ cursor: 'pointer' }}>İletişim</span>
            
            {/* Arama Alanı */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {isSearchOpen ? (
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: theme.bg, borderRadius: '20px', padding: '5px 15px', border: `1px solid ${theme.primary}` }}>
                  <input type="text" placeholder="Sitede ara..." style={{ background: 'none', border: 'none', color: theme.text, outline: 'none', width: '120px' }} />
                  <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.text, marginLeft: '5px' }}>✖</button>
                </div>
              ) : (
                <span onClick={() => setIsSearchOpen(true)} style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🔍</span>
              )}
            </div>

            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div style={{ fontSize: '1.4rem', letterSpacing: '8px', cursor: 'pointer' }}>
              <span>🇹🇷</span><span style={{ opacity: 0.3, letterSpacing: '0' }}>|</span><span style={{ marginLeft: '8px' }}>🇬🇧</span>
            </div>
          </nav>
        </header>

        {/* EĞER ADMİN SEKME SEÇİLİYSE DİNAMİK ALANI GÖSTER, DEĞİLSE ANA SAYFAYI GÖSTER */}
        {activeAdminTab ? (
          <div style={{ padding: '40px', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${theme.primary}`, paddingBottom: '20px', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '2rem', color: theme.primary, fontWeight: 'bold' }}>{activeAdminTab}</h2>
              <button onClick={() => setActiveAdminTab(null)} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: theme.text }}>✖</button>
            </div>
            
            <div style={{ backgroundColor: theme.cardBg, padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px dashed ${theme.primary}` }}>
              <p style={{ fontSize: '1.2rem', color: theme.text, opacity: 0.7 }}>
                Bu alana <strong>{activeAdminTab}</strong> modülünün içerikleri, grafikleri veya tabloları gelecek...
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* HERO (MOTTO) SECTION */}
            <section style={{ position: 'relative', width: '100%', height: '300px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
              <h2 style={{ position: 'relative', fontSize: '3.5rem', fontWeight: 'bold', zIndex: 1, marginBottom: '80px', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                Doğadan Sofranıza, Güvenle.
              </h2>
              <button style={{ position: 'relative', zIndex: 1, marginBottom: '20px', backgroundColor: theme.primary, color: 'white', border: 'none', padding: '15px 35px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                Bilgi Al
              </button>
            </section>

            {/* BİLGİ & DETAYLAR SECTION */}
            <section style={{ padding: '70px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🌱</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Yerel Üretim, Global Kalite</h3>
              <p style={{ maxWidth: '650px', margin: '20px auto', color: theme.text, opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6' }}>
                Kooperatifimiz, sürdürülebilir tarım ilkeleriyle üretilen ürünleri aracı olmadan doğrudan sizlere ulaştırır.
              </p>
              <button style={{ backgroundColor: theme.primary, color: 'white', border: 'none', padding: '15px 35px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Detaylar</button>
            </section>

            {/* ÜRÜNLERİMİZ SECTION */}
            <section style={{ padding: '60px 40px', backgroundColor: darkMode ? '#1a2b1c' : '#f0f4ef' }}>
              <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', color: theme.primary, fontWeight: 'bold' }}>Ürünlerimiz</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '25px' }}>
                {products.map(product => (
                  <div key={product.id} style={{ backgroundColor: theme.cardBg, borderRadius: '12px', padding: '20px', position: 'relative', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', minHeight: '380px' }}>
                    {product.tag === 'tükendi' && <span style={{ position: 'absolute', top: 15, right: 15, backgroundColor: '#ef4444', color: 'white', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', zIndex: 10 }}>Tükendi</span>}
                    {product.tag === 'son 5 ürün' && <span style={{ position: 'absolute', top: 15, right: 15, backgroundColor: '#f59e0b', color: 'white', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', zIndex: 10 }}>Son 5 Ürün</span>}
                    
                    <div style={{ flex: 1, marginBottom: '15px', overflow: 'hidden', borderRadius: '8px' }}>
                       <img src={product.img} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover', filter: product.tag === 'tükendi' ? 'grayscale(100%)' : 'none', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '10px', color: theme.text }}>{product.name}</h4>
                    <p style={{ color: theme.primary, fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>{product.price}</p>
                    
                    <button disabled={product.tag === 'tükendi'} style={{ width: '100%', padding: '10px', backgroundColor: product.tag === 'tükendi' ? '#9ca3af' : theme.primary, color: 'white', border: 'none', borderRadius: '6px', cursor: product.tag === 'tükendi' ? 'not-allowed' : 'pointer', fontWeight: 'bold', marginTop: 'auto' }}>
                      {product.tag === 'tükendi' ? 'Stokta Yok' : 'Sepete Ekle'}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <footer style={{ backgroundColor: theme.footer, color: 'white', padding: '50px 40px 20px 40px', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '25px' }}>COOPWISE</h2>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '1.05rem' }}>
                    <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Kurumsal</a></li>
                    <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Üyeler</a></li>
                    <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Eğitimler</a></li>
                    <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>İletişim</a></li>
                  </ul>
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '25px', fontSize: '1.3rem' }}>İletişim</h3>
                  <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>📍 Türkiye</p>
                  <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>🗓️ Pazartesi – Cumartesi 9:00 – 17:00</p>
                  <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>✉️ info@ornekmail.com</p>
                  <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>📱 +90 5XX XXX XX XX</p>
                </div>
                
                <div style={{ flex: 1, backgroundColor: '#d1d5db', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', color: '#4b5563', minHeight: '200px', fontWeight: 'bold' }}>
                  [Google Maps - Türkiye Görünümü]
                </div>
              </div>
              
              <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '25px' }} />
              <p style={{ textAlign: 'center', fontSize: '0.9rem', opacity: 0.8 }}>
                 © Copyright 2026 – Google YZTA Hackathon Group 318 All Rights Reserved.
              </p>
            </footer>
          </>
        )}

        {/* CHATBOT (RAG SİSTEMİ) */}
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
          {chatOpen ? (
            <div style={{ width: '400px', height: '550px', backgroundColor: theme.cardBg, borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: `1px solid ${theme.primary}` }}>
              <div style={{ backgroundColor: theme.primary, color: 'white', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🤖</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Coopwise Asistan</span>
                </div>
                <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.4rem' }}>✖</button>
              </div>
              
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: '10px' }}>
                    
                    {/* İkonlar: AI için Robot, User için İnsan */}
                    <span style={{ fontSize: '1.8rem' }}>{msg.sender === 'user' ? '🧑🏻' : '🤖'}</span>
                    
                    <div style={{ backgroundColor: msg.sender === 'user' ? theme.primary : (darkMode ? '#2c3b2d' : '#f1f5f9'), color: msg.sender === 'user' ? 'white' : theme.text, padding: '12px 18px', borderRadius: '18px', borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px', borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '18px', maxWidth: '75%', fontSize: '0.95rem', lineHeight: '1.4', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ padding: '15px', borderTop: `1px solid ${theme.primary}33`, display: 'flex', backgroundColor: theme.cardBg }}>
                <input 
                  type="text" 
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Sorunuzu yazın..." 
                  style={{ flex: 1, padding: '12px 15px', borderRadius: '25px', border: `1px solid ${theme.primary}`, backgroundColor: theme.bg, color: theme.text, outline: 'none', fontSize: '0.95rem' }}
                />
                <button onClick={handleSendMessage} style={{ marginLeft: '10px', backgroundColor: theme.primary, color: 'white', border: 'none', padding: '0 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Gönder
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setChatOpen(true)} style={{ backgroundColor: theme.primary, color: 'white', border: 'none', borderRadius: '50%', width: '70px', height: '70px', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 6px 12px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              💬
            </button>
          )}
        </div>

      </div>
    </div>
  );
}