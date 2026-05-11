import React from 'react';
import { useOutletContext } from 'react-router-dom';
import homeBg from '../assets/home-hero-bg.jpg';

export default function Home() {
  const { theme } = useOutletContext();
  const products = [
    { id: 1, name: 'Organik Çiçek Balı', price: '250 TL', img: 'https://placehold.co/400', tag: 'tükendi' },
    { id: 2, name: 'El Yapımı Tarhana', price: '120 TL', img: 'https://placehold.co/400', tag: 'son 5 ürün' },
    { id: 3, name: 'Soğuk Sıkım Zeytinyağı', price: '450 TL', img: 'https://placehold.co/400', tag: '' },
    { id: 4, name: 'Ev Yapımı Salça', price: '180 TL', img: 'https://placehold.co/400', tag: '' },
    { id: 5, name: 'Kuru İncir', price: '200 TL', img: 'https://placehold.co/400', tag: '' },
    { id: 6, name: 'Cevizli Sucuk', price: '150 TL', img: 'https://placehold.co/400', tag: '' },
  ];

  return (
    <>
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '575px',
        flexShrink: 0,
        backgroundImage: `url(${homeBg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)' }}></div>
        
        <h2 style={{ position: 'relative', fontSize: '3.5rem', fontWeight: 'bold', zIndex: 1, marginBottom: '50px', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
          Doğadan Sofranıza, Güvenle.
        </h2>
        {/* Hover Eklenmiş Bilgi Al Butonu */}
        <button 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.hoverPrimary}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.primary}
          style={{ position: 'relative', zIndex: 1, marginTop: '100px', backgroundColor: theme.primary, color: 'white', border: 'none', padding: '15px 35px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}
        >
          Bilgi Al
        </button>
      </section>

      <section style={{ padding: '70px 20px', textAlign: 'center', backgroundColor: theme.cardBg }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🌱</div>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Yerel Üretim, Global Kalite</h3>
        <p style={{ maxWidth: '650px', margin: '20px auto', opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6', color: theme.text }}>
          Kooperatifimiz, sürdürülebilir tarım ilkeleriyle üretilen ürünleri aracı olmadan doğrudan sizlere ulaştırır.
        </p>
        <button 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.hoverPrimary}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.primary}
          style={{ backgroundColor: theme.primary, color: 'white', border: 'none', padding: '15px 35px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}
        >
          Detaylar
        </button>
      </section>

      <section style={{ padding: '60px 40px', backgroundColor: theme.bg }}>
        <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', color: theme.primary, fontWeight: 'bold' }}>Ürünlerimiz</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '25px' }}>
          {products.map(product => (
            <div key={product.id} style={{ backgroundColor: theme.cardBg, borderRadius: '12px', padding: '20px', position: 'relative', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', minHeight: '380px', border: `1px solid ${theme.primary}33` }}>
              {product.tag && <span style={{ position: 'absolute', top: 15, right: 15, backgroundColor: product.tag === 'tükendi' ? '#ef4444' : '#f59e0b', color: 'white', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', zIndex: 10 }}>{product.tag === 'tükendi' ? 'Tükendi' : 'Son 5 Ürün'}</span>}
              <div style={{ flex: 1, marginBottom: '15px', overflow: 'hidden', borderRadius: '8px' }}>
                 <img src={product.img} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover', filter: product.tag === 'tükendi' ? 'grayscale(100%)' : 'none' }} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '10px', color: theme.text }}>{product.name}</h4>
              <p style={{ color: theme.primary, fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>{product.price}</p>
              
              {/* Hover Eklenmiş Sepete Ekle Butonu */}
              <button 
                disabled={product.tag === 'tükendi'} 
                onMouseEnter={(e) => { if(product.tag !== 'tükendi') e.currentTarget.style.backgroundColor = theme.hoverPrimary; }}
                onMouseLeave={(e) => { if(product.tag !== 'tükendi') e.currentTarget.style.backgroundColor = theme.primary; }}
                style={{ width: '100%', padding: '10px', backgroundColor: product.tag === 'tükendi' ? '#9ca3af' : theme.primary, color: 'white', border: 'none', borderRadius: '6px', cursor: product.tag === 'tükendi' ? 'not-allowed' : 'pointer', fontWeight: 'bold', marginTop: 'auto', transition: 'background-color 0.3s ease' }}
              >
                {product.tag === 'tükendi' ? 'Stokta Yok' : 'Sepete Ekle'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}