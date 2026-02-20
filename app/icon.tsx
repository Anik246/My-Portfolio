// app/icon.tsx
import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

const ACCENT = '#ff3b30';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <span
          style={{
            color: ACCENT,
            fontSize: 44, // ✅ bigger
            fontWeight: 900,
            letterSpacing: 0.5,
            fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
            lineHeight: 1,
          }}
        >
          SR
        </span>
      </div>
    ),
    { ...size }
  );
}
