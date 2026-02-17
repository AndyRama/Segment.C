import React from 'react';

type FormulaBlockProps = {
  formula: string
  description?: string
  source?: string
}

export function FormulaBlock({ formula, description, source }: FormulaBlockProps) {
  const parts = description?.split('|').map((p) => p.trim()) ?? [];

  return (
    <figure
      style={{
        margin: '28px 0',
        borderRadius: '10px',
        overflow: 'hidden',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        border: '1px solid #C8E6C9',
        boxShadow: '0 2px 12px rgba(27,94,32,0.08)',
      }}
    >
      {/* Label */}
      <div
        style={{
          background: '#1B5E20',
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '14px' }}>📐</span>
        <span
          style={{
            fontSize: '0.72rem',
            color: '#A5D6A7',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Formule technique
        </span>
        {source && (
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '0.72rem',
              color: '#4CAF50',
              fontStyle: 'italic',
            }}
          >
            {source}
          </span>
        )}
      </div>

      {/* Formule */}
      <div
        style={{
          padding: '22px 28px',
          background: '#F9FBE7',
          textAlign: 'center',
          borderBottom: description ? '1px dashed #C8E6C9' : 'none',
        }}
      >
        <code
          style={{
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: '1.05rem',
            fontWeight: 600,
            color: '#1B5E20',
            letterSpacing: '0.03em',
            background: 'none',
            border: 'none',
            padding: 0,
            display: 'block',
            lineHeight: 1.5,
            wordBreak: 'break-word',
          }}
        >
          {formula}
        </code>
      </div>

      {/* Légende */}
      {parts.length > 0 && (
        <figcaption
          style={{
            padding: '12px 20px',
            background: '#ffffff',
            fontSize: '0.8rem',
            color: '#616161',
            lineHeight: 1.6,
          }}
        >
          {parts.map((part, i) => {
            const [key, ...rest] = part.split('=');
            const hasEquals = rest.length > 0;
            return (
              <span key={i}>
                <span style={{ color: '#2E7D32', fontWeight: 600 }}>
                  {key.trim()}
                </span>
                {hasEquals && (
                  <span>{' = '}{rest.join('=').trim()}</span>
                )}
                {i < parts.length - 1 && (
                  <span style={{ color: '#BDBDBD', margin: '0 10px' }}>|</span>
                )}
              </span>
            );
          })}
        </figcaption>
      )}
    </figure>
  );
}