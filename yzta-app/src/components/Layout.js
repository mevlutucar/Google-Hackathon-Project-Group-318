import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState(null);
  const [isKurumsalHovered, setIsKurumsalHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Kooperatif Portalımıza hoş geldiniz. Sağlamış olduğumuz hizmetlerimiz ve/veya satışta olan ürünlerimiz ile ilgili her türlü sorunuzu cevaplamaya hazırım.' }
  ]);

  const theme = darkMode ? {
    bg: '#121f13', text: '#e0e0e0', cardBg: '#3a4f3c', primary: '#879c88', hoverPrimary: '#99d09a', footer: '#1a2b1c'
  } : {
    bg: '#f9faf8', text: '#2d3748', cardBg: '#ffffff', primary: '#a1bd8b', hoverPrimary: '#5e724f', footer: '#879c88'
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    setChatMessages([...chatMessages, { sender: 'user', text: inputText }]);
    setInputText('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'ai', text: 'RAG sisteminden gelen AI yanıtı burada görünecek...' }]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', display: 'flex', transition: 'all 0.3s ease', fontFamily: 'sans-serif' }}>
      
      {/* ADMİN PANELİ */}
      <div style={{ width: sidebarOpen ? '320px' : '0px', overflow: 'hidden', backgroundColor: theme.cardBg, transition: 'width 0.3s ease', borderRight: `1px solid ${theme.primary}`, flexShrink: 0 }}>
        <div style={{ padding: '20px', width: '320px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '25px', color: theme.primary }}>Yönetici Paneli</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '3', fontSize: '1.05rem' }}>
            {['📦 Ürün ve Stok Düzenleme', '🚚 Kargo Takip (AI Destekli)', '📊 İçgörüler ve Analitik', '🤝 Müşteri Destek Geçmişi'].map((item) => (
               <li key={item} onClick={() => setActiveAdminTab(item)} style={{ cursor: 'pointer', padding: '0 10px', borderRadius: '5px', backgroundColor: activeAdminTab === item ? theme.primary : 'transparent', color: activeAdminTab === item ? 'white' : theme.text }}>{item}</li>
            ))}
          </ul>
          <hr style={{ margin: '30px 0', borderColor: theme.primary }} />
          
          {/* Hover Eklenmiş N8N Butonu */}
          <button 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b45309'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
            onClick={() => alert("n8n Tetiklendi!")} 
            style={{ width: '75%', backgroundColor: '#d97706', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}
          >
            ⚡ Tedarikçiye Mail Taslağı (N8N)
          </button>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', height: '100vh' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: theme.cardBg, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', color: theme.text }}>☰</button>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: theme.primary, margin: 0 }}>COOPWISE</h1>
            </Link>
          </div>
          
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center', fontWeight: '500' }}>
            <div onMouseEnter={() => setIsKurumsalHovered(true)} onMouseLeave={() => setIsKurumsalHovered(false)} style={{ position: 'relative', cursor: 'pointer', padding: '10px 0' }}>
              Kurumsal ▾
              {isKurumsalHovered && (
                <div style={{ position: 'absolute', top: '100%', left: '-20px', width: '180px', backgroundColor: theme.cardBg, boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', zIndex: 100 }}>
                  
                  {/* Hover Eklenmiş Açılır Menü Sekmeleri */}
                  <Link 
                    to="/hakkimizda" 
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.primary; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.text; }}
                    style={{ display: 'block', padding: '12px 20px', color: theme.text, textDecoration: 'none', borderBottom: `1px solid ${theme.primary}33`, transition: 'all 0.2s ease' }}
                  >
                    Hakkımızda
                  </Link>
                  <Link 
                    to="/amac-ve-ilkeler" 
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.primary; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.text; }}
                    style={{ display: 'block', padding: '12px 20px', color: theme.text, textDecoration: 'none', transition: 'all 0.2s ease' }}
                  >
                    Amaç ve İlkeler
                  </Link>

                </div>
              )}
            </div>
            <Link to="/uyeler" style={{ color: theme.text, textDecoration: 'none' }}>Üyeler</Link>
            <Link to="/egitimler" style={{ color: theme.text, textDecoration: 'none' }}>Eğitimler</Link>
            <Link to="/iletisim" style={{ color: theme.text, textDecoration: 'none' }}>İletişim</Link>
            
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

            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem' }}>{darkMode ? '☀️' : '🌙'}</button>
            <div style={{ fontSize: '1.4rem', letterSpacing: '8px', cursor: 'pointer' }}>
              <span>🇹🇷</span><span style={{ opacity: 0.3, letterSpacing: '0' }}>|</span><span style={{ marginLeft: '8px' }}>🇬🇧</span>
            </div>
          </nav>
        </header>

        {activeAdminTab ? (
           <div style={{ padding: '40px', flex: 1 }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${theme.primary}`, paddingBottom: '20px', marginBottom: '30px' }}>
               <h2 style={{ fontSize: '2rem', color: theme.primary, fontWeight: 'bold' }}>{activeAdminTab}</h2>
               <button onClick={() => setActiveAdminTab(null)} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: theme.text }}>✖</button>
             </div>
             <div style={{ backgroundColor: theme.cardBg, padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px dashed ${theme.primary}` }}>
               <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Bu alana <strong>{activeAdminTab}</strong> modülünün içerikleri gelecek...</p>
             </div>
           </div>
        ) : (
          <Outlet context={{ theme }} /> 
        )}

        {/* FOOTER */}
        <footer style={{ backgroundColor: theme.footer, color: 'white', padding: '50px 40px 20px 40px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '25px', margin: 0 }}>COOPWISE</h2>
              </Link>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '1.05rem', marginTop: '20px' }}>
                <li><Link to="/hakkimizda" style={{ color: 'white', textDecoration: 'none' }}>Hakkımızda</Link></li>
                <li><Link to="/amac-ve-ilkeler" style={{ color: 'white', textDecoration: 'none' }}>Amaç ve İlkeler</Link></li>
                <li><Link to="/uyeler" style={{ color: 'white', textDecoration: 'none' }}>Üyeler</Link></li>
                <li><Link to="/egitimler" style={{ color: 'white', textDecoration: 'none' }}>Eğitimler</Link></li>
                <li><Link to="/iletisim" style={{ color: 'white', textDecoration: 'none' }}>İletişim</Link></li>
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: '25px', fontSize: '1.3rem' }}>İletişim</h3>
              <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>📍 Türkiye</p>
              <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>🗓️ Pazartesi – Cumartesi | 9:00 – 17:00</p>
              <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>✉️ info@ornekmail.com</p>
              <p style={{ marginBottom: '15px', fontSize: '1.05rem' }}>📞 +90 5XX XXX XX XX</p>
            </div>
            <div style={{ flex: 1, backgroundColor: '#d1d5db', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', color: '#4b5563', minHeight: '200px', fontWeight: 'bold' }}>
              [Google Maps - Türkiye Görünümü]
            </div>
          </div>
          <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '25px' }} />
          <p style={{ textAlign: 'center', fontSize: '0.9rem', opacity: 0.8 }}>© Copyright 2026 – Google YZTA Hackathon Group 318 All Rights Reserved.</p>
        </footer>

        {/* CHATBOT */}
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
          {chatOpen ? (
            <div style={{ width: '400px', height: '550px', backgroundColor: theme.cardBg, borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: `1px solid ${theme.primary}` }}>
              <div style={{ backgroundColor: theme.primary, color: 'white', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '1.5rem' }}>🤖</span><span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Coopwise Asistan</span></div>
                <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.4rem' }}>✖</button>
              </div>
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{msg.sender === 'user' ? '🧑🏻' : '🤖'}</span>
                    <div style={{ backgroundColor: msg.sender === 'user' ? theme.primary : (darkMode ? '#2c3b2d' : '#f1f5f9'), color: msg.sender === 'user' ? 'white' : theme.text, padding: '12px 18px', borderRadius: '18px', borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px', borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '18px', maxWidth: '75%', fontSize: '0.95rem' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '15px', borderTop: `1px solid ${theme.primary}33`, display: 'flex', backgroundColor: theme.cardBg }}>
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Sorunuzu yazın..." style={{ flex: 1, padding: '12px 15px', borderRadius: '25px', border: `1px solid ${theme.primary}`, backgroundColor: theme.bg, color: theme.text, outline: 'none' }} />
                
                {/* Hover Eklenmiş Gönder Butonu */}
                <button 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.hoverPrimary}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.primary}
                  onClick={handleSendMessage} 
                  style={{ marginLeft: '10px', backgroundColor: theme.primary, color: 'white', border: 'none', padding: '0 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}
                >
                  Gönder
                </button>
              </div>
            </div>
          ) : (
            /* Hover Eklenmiş Chatbot Açma Butonu */
            <button 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.hoverPrimary}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.primary}
              onClick={() => setChatOpen(true)} 
              style={{ backgroundColor: theme.primary, color: 'white', border: 'none', borderRadius: '50%', width: '70px', height: '70px', fontSize: '2rem', cursor: 'pointer', boxShadow: '0 6px 12px rgba(0,0,0,0.2)', transition: 'background-color 0.3s ease' }}
            >
              💬
            </button>
          )}
        </div>

      </div>
    </div>
  );
}