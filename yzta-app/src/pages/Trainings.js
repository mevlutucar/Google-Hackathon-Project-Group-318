import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

export default function Trainings() {
  const { theme } = useOutletContext();
  return (
    <div style={{ padding: '40px', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>Eğitimler</h2>
        <span style={{ fontSize: '1rem', opacity: 0.8 }}>
          <Link to="/" style={{ color: theme.primary, textDecoration: 'none' }}>Ana Sayfa</Link> &gt; Eğitimler
        </span>
      </div>
      <hr style={{ borderColor: theme.primary, marginTop: '10px', marginBottom: '40px', opacity: 0.5, width: '100%' }} />

      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#000', borderRadius: '10px', overflow: 'hidden' }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1maUQurN0-E" title="Video 1" frameBorder="0" allowFullScreen></iframe>
          </div>
          <hr style={{ borderColor: theme.primary, margin: '20px 0', opacity: 0.3 }} />
          <h3 style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold' }}>Örnek Eğitim Videosu - 1</h3>
          <hr style={{ borderColor: theme.primary, margin: '20px 0', opacity: 0.3 }} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#000', borderRadius: '10px', overflow: 'hidden' }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YcqGaDVXwgM" title="Video 2" frameBorder="0" allowFullScreen></iframe>
          </div>
          <hr style={{ borderColor: theme.primary, margin: '20px 0', opacity: 0.3 }} />
          <h3 style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold' }}>Örnek Eğitim Videosu - 2</h3>
          <hr style={{ borderColor: theme.primary, margin: '20px 0', opacity: 0.3 }} />
        </div>
      </div>
    </div>
  );
}