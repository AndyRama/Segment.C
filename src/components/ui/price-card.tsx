import React from 'react';

type PriceCardLink = {
  label: string
  href: string
}

type PriceCardProps = {
  title: string
  price: string
  unit?: string
  features?: string[]
  highlight?: boolean
  badge?: string
  cta?: PriceCardLink
  note?: string
}

export function PriceCard({
  title,
  price,
  unit,
  features = [],
  highlight = false,
  badge,
  cta,
  note,
}: PriceCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        border: highlight ? '2px solid #2E7D32' : '1px solid #E0E0E0',
        boxShadow: highlight
          ? '0 8px 32px rgba(46,125,50,0.18)'
          : '0 2px 12px rgba(0,0,0,0.07)',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#43A047',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {badge}
        </div>
      )}

      {/* En-tête */}
      <div
        style={{
          padding: '22px 24px 16px',
          background: highlight ? '#1B5E20' : '#F1F8E9',
          borderBottom: `1px solid ${highlight ? '#2E7D32' : '#C8E6C9'}`,
        }}
      >
        <h3
          style={{
            margin: '0 0 12px',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: highlight ? '#ffffff' : '#1B5E20',
          }}
        >
          {title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: highlight ? '#A5D6A7' : '#2E7D32',
              lineHeight: 1,
            }}
          >
            {price}
          </span>
        </div>

        {unit && (
          <p
            style={{
              margin: '4px 0 0',
              fontSize: '0.78rem',
              color: highlight ? '#C8E6C9' : '#757575',
              fontStyle: 'italic',
            }}
          >
            {unit}
          </p>
        )}
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul
          style={{
            flex: 1,
            margin: 0,
            padding: '18px 24px',
            listStyle: 'none',
            background: '#ffffff',
          }}
        >
          {features.map((f, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '6px 0',
                fontSize: '0.88rem',
                color: '#424242',
                borderBottom: i < features.length - 1 ? '1px dashed #E8F5E9' : 'none',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  color: '#2E7D32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 700,
                  marginTop: '1px',
                }}
              >
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <div style={{ padding: '0 24px 20px', background: '#ffffff' }}>
          <a
            href={cta.href}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '11px 20px',
              borderRadius: '8px',
              background: highlight ? '#2E7D32' : '#F1F8E9',
              color: highlight ? '#ffffff' : '#1B5E20',
              fontWeight: 700,
              fontSize: '0.88rem',
              textDecoration: 'none',
              border: highlight ? 'none' : '1px solid #C8E6C9',
            }}
          >
            {cta.label} →
          </a>
        </div>
      )}

      {/* Note */}
      {note && (
        <p
          style={{
            margin: 0,
            padding: '10px 24px',
            background: '#FAFAFA',
            borderTop: '1px solid #E0E0E0',
            fontSize: '0.75rem',
            color: '#9E9E9E',
            fontStyle: 'italic',
          }}
        >
          * {note}
        </p>
      )}
    </div>
  );
}