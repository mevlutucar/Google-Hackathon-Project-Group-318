import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

export default function Contact() {
  const { theme } = useOutletContext();
  return (
    <div style={{ padding: '40px', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>İletişim</h2>
        <span style={{ fontSize: '1rem', opacity: 0.8 }}>
          <Link to="/" style={{ color: theme.primary, textDecoration: 'none' }}>Ana Sayfa</Link> &gt; İletişim
        </span>
      </div>
      <hr style={{ borderColor: theme.primary, marginTop: '10px', marginBottom: '60px', opacity: 0.5, width: '100%' }} />

      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: theme.primary, marginBottom: '50px', fontWeight: 'bold' }}>Bizimle İletişime Geçin</h2>

      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '2.5' }}>
        <div style={{ flex: 1, textAlign:'center' }}>
          <p>📍 Türkiye</p>
          <p>🗓️ Pazartesi – Cumartesi | 9:00 – 17:00</p>
        </div>
        <div style={{ flex: 1, textAlign:'center'}}>
          <p>✉️ info@ornekmail.com</p>
          <p>📞 +90 5XX XXX XX XX</p>
        </div>
      </div>
    </div>
  );
}