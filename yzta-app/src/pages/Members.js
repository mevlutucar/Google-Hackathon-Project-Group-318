import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

export default function Members() {
  const { theme } = useOutletContext();
  
  const members = [
    { name: 'Örnek Koop. -1', type: 'Bal ve Arı Ürünleri', city: 'Muğla', link: 'www.example.com' },
    { name: 'Örnek Koop. -2', type: 'Organik Tarhana', city: 'Isparta', link: 'www.example.com' },
    { name: 'Örnek Koop. -3', type: 'Zeytin & Zeytinyağı', city: 'Bursa', link: 'www.example.com' },
    { name: 'Örnek Koop. -4', type: 'Domates ve Domates Ürünleri', city: 'Ankara', link: 'www.example.com' },
    { name: 'Örnek Koop. -5', type: 'İncir ve İncir Ürünleri', city: 'Aydın', link: 'www.example.com' },
    { name: 'Örnek Koop. -6', type: 'Üzüm ve Üzüm Ürünleri', city: 'İzmir', link: 'www.example.com' },
  ];

  return (
    <div style={{ padding: '40px', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Üyeler</h2>
        <span style={{ fontSize: '1rem', opacity: 0.8 }}>
          <Link to="/" style={{ color: theme.primary, textDecoration: 'none' }}>Ana Sayfa</Link> &gt; Üyeler
        </span>
      </div>
      <hr style={{ borderColor: theme.primary, marginTop: '10px', marginBottom: '40px', opacity: 0.5, width: '100%' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '20px', fontWeight: 'bold', paddingBottom: '15px', borderBottom: `2px solid ${theme.primary}` }}>
        <div>Kooperatif Adı</div>
        <div>Ürün Çeşidi</div>
        <div>Şehir</div>
        <div>Satış Kanalı / Web Sitesi</div>
      </div>

      {members.map((member, index) => (
        <div key={index} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '20px', padding: '20px 0', borderBottom: `1px solid ${theme.primary}33`, alignItems: 'center' }}>
          <div>{index + 1}. {member.name}</div>
          <div>{member.type}</div>
          <div>{member.city}</div>
          <div><a href={`http://${member.link}`} target="_blank" rel="noreferrer" style={{ color: theme.primary }}>{member.link}</a></div>
        </div>
      ))}
    </div>
  );
}