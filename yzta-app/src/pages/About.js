import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

export default function About() {
  const { theme } = useOutletContext();
  return (
    <div style={{ flex: 1 }}>
      <div style={{ padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Hakkımızda</h2>
          <span style={{ fontSize: '1rem', opacity: 0.8 }}>
            <Link to="/" style={{ color: theme.primary, textDecoration: 'none' }}>Ana Sayfa</Link> &gt; Hakkımızda
          </span>
        </div>
        <hr style={{ borderColor: theme.primary, marginTop: '10px', marginBottom: '40px', opacity: 0.5, width: '100%' }} />
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '50px' }}>
          Coopwise, üretici ile tüketiciyi doğrudan buluşturan yenilikçi bir kooperatif ağıdır.
        </p>

        <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
          <div style={{ flex: 1, backgroundColor: '#e5e7eb', borderRadius: '10px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#9ca3af' }}><strong>750x350</strong></span>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.8rem', color: theme.primary, marginBottom: '20px' }}>Başlıca İlkelerimiz</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
              <li>✅ <strong>Sürdürülebilirlik:</strong> Doğaya saygılı tarım uygulamaları.</li>
              <li>✅ <strong>Şeffaflık:</strong> Üretimden sofraya izlenebilir süreçler.</li>
              <li>✅ <strong>Adil Ticaret:</strong> Üreticinin emeğinin tam karşılığını alması.</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%', minHeight: '250px' }}>
        <div style={{ flex: 1, backgroundColor: theme.primary, color: 'white', padding: '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Misyonumuz</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Yerel üreticileri teknoloji ile güçlendirerek aracıları ortadan kaldırmak ve adil bir ticaret ekosistemi yaratmak.</p>
        </div>
        <div style={{ flex: 1, backgroundColor: theme.cardBg, color: theme.text, padding: '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: `1px solid ${theme.primary}`, borderBottom: `1px solid ${theme.primary}` }}>
          <h3 style={{ fontSize: '2rem', color: theme.primary, marginBottom: '15px' }}>Vizyonumuz</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Türkiye'nin en güvenilir ve en geniş üretici-tüketici kooperatif ağını kurarak global pazarda örnek bir model oluşturmak.</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px 40px', backgroundColor: theme.bg }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Bizimle iletişime geçin</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '1.2rem'}}>📞 +90 5XX XXX XX XX</span>
          <button style={{ backgroundColor: theme.primary, color: 'white', border: 'none', padding: '12px 25px', fontSize: '1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Daha Fazla Bilgi</button>
        </div>
      </div>
    </div>
  );
}