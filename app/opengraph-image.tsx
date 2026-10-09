import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site.config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 20 }}>🌿</div>
        <div style={{ fontSize: 64, fontWeight: 800, display: 'flex' }}>
          Get<span style={{ color: '#34d399' }}>Green</span>Routine
        </div>
        <div style={{ fontSize: 28, color: '#cbd5e1', marginTop: 16 }}>{siteConfig.description}</div>
      </div>
    ),
    { ...size }
  );
}
