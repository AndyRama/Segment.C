import React from 'react';

type TableRow = {
  label: string
  values: string[]
}

type CompareTableProps = {
  headers: string[]
  rows: TableRow[]
  caption?: string
}

function getCellStyle(value: string): React.CSSProperties {
  if (value.startsWith('✅')) return { background: '#F1F8E9', color: '#1B5E20' };
  if (value.startsWith('❌')) return { background: '#FBE9E7', color: '#BF360C' };
  if (value.startsWith('🟡')) return { background: '#FFFDE7', color: '#5D4037' };
  return {};
}

export function CompareTable({ headers, rows, caption }: CompareTableProps) {
  const [firstCol, ...restCols] = headers;

  return (
    <div
      style={{
        margin: '28px 0',
        overflowX: 'auto',
        borderRadius: '10px',
        boxShadow: '0 2px 16px rgba(27,94,32,0.10)',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.88rem',
          minWidth: '500px',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                background: '#1B5E20',
                color: '#ffffff',
                padding: '13px 16px',
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRight: '1px solid #2E7D32',
              }}
            >
              {firstCol}
            </th>

            {restCols.map((h, i) => (
              <th
                key={i}
                style={{
                  background: '#2E7D32',
                  color: '#ffffff',
                  padding: '13px 16px',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  borderRight: i < restCols.length - 1 ? '1px solid #388E3C' : 'none',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, ri) => {
            const isEven = ri % 2 === 0;
            return (
              <tr key={ri} style={{ background: isEven ? '#ffffff' : '#F9FBE7' }}>
                <td
                  style={{
                    padding: '11px 16px',
                    fontWeight: 600,
                    color: '#1B5E20',
                    background: isEven ? '#F1F8E9' : '#E8F5E9',
                    borderRight: '2px solid #C8E6C9',
                    borderBottom: '1px solid #E0E0E0',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.label}
                </td>

                {row.values.map((val, vi) => (
                  <td
                    key={vi}
                    style={{
                      padding: '11px 16px',
                      textAlign: 'center',
                      borderRight: vi < row.values.length - 1 ? '1px solid #E0E0E0' : 'none',
                      borderBottom: '1px solid #E0E0E0',
                      fontWeight: 500,
                      ...getCellStyle(val),
                    }}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {caption && (
        <p
          style={{
            margin: 0,
            padding: '10px 16px',
            background: '#F5F5F5',
            fontSize: '0.78rem',
            color: '#757575',
            fontStyle: 'italic',
            borderTop: '1px solid #E0E0E0',
            borderRadius: '0 0 10px 10px',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}