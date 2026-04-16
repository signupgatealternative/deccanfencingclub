export default function Marquee() {
  const items = ['Foil', 'Épée', 'Sabre', 'Deccan Open 2025', 'Hyderabad', 'Junior Champions', 'National Excellence'];

  return (
    <div
      className="mq-strip"
      style={{
        background: '#C9A84C',
        padding: '0.65rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        className="mq-inner"
        style={{
          display: 'inline-flex',
          animation: 'mq 22s linear infinite',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mq-item"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#07080A',
              padding: '0 3rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            {item}
            <span>⚔</span>
          </span>
        ))}
      </div>
    </div>
  );
}
