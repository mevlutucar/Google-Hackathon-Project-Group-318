import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

export default function Principles() {
  const { theme } = useOutletContext();
  return (
    <div style={{ padding: '40px', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Amaç ve İlkeler</h2>
        <span style={{ fontSize: '1rem', opacity: 0.8 }}>
          <Link to="/" style={{ color: theme.primary, textDecoration: 'none' }}>Ana Sayfa</Link> &gt; Amaç ve İlkeler
        </span>
      </div>
      <hr style={{ borderColor: theme.primary, marginTop: '10px', marginBottom: '40px', opacity: 0.5, width: '100%' }} />

      <div style={{ display: 'flex', gap: '50px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.8rem', color: theme.primary, marginBottom: '10px' }}>Amaçlarımız</h3>
          <hr style={{ borderColor: theme.primary, marginBottom: '25px', opacity: 0.3 }} />
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>1. Üreticiyi Desteklemek</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Aracıları kaldırarak üreticinin gelirini artırmak.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>2. Dijital Dönüşüm</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Geleneksel tarımı teknoloji ve AI ile buluşturmak.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>3. Güvenilir Gıda</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Tüketiciye kaynağı belli, organik ve sağlıklı ürünler sunmak.</p>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.8rem', color: theme.primary, marginBottom: '10px' }}>İlkelerimiz</h3>
          <hr style={{ borderColor: theme.primary, marginBottom: '25px', opacity: 0.3 }} />
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>1. Eşitlik ve Adalet</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Ağımızdaki her üreticiye eşit fırsatlar tanımak.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>2. Çevreye Duyarlılık</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Karbon ayak izini düşüren taşıma ve paketleme yöntemleri kullanmak.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>3. Sürekli Gelişim</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.5' }}>Sistemlerimizi (n8n, yapay zeka vb.) sürekli güncel tutmak.</p>
          </div>
        </div>
      </div>
    </div>
  );
}