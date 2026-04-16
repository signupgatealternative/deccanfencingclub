export default function Footer() {
  return (
    <footer
    className="footer-container"
      style={{
        background: '#0C0E12',
        borderTop: '1px solid rgba(201,168,76,.12)',
        padding: '5rem 4rem 2.5rem',
      }}
    >
      <div
       className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}
      >
        <div>
          <span
            className="ft-logo"
            style={{
              fontFamily: "'Cinzel Decorative',serif",
              fontSize: '1.05rem',
              color: '#C9A84C',
              marginBottom: '1rem',
              display: 'block',
            }}
          >
            ⚔ Deccan Fencing Club
          </span>
          <p
            className="ft-tag"
            style={{
              fontSize: '0.9rem',
              fontWeight: 300,
              color: '#6A6560',
              lineHeight: 1.7,
            }}
          >
            Hyderabad&apos;s premier fencing academy — where the warrior spirit of the Deccan meets Olympic-standard sport.
          </p>
        </div>

        <div>
          <div
            className="ft-ct"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.54rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1.2rem',
            }}
          >
            Navigation
          </div>
          <ul
            className="ft-links"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            {['About', 'Events', 'Training', 'Schedule', 'Register'].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item === 'Events' ? 'tournament' : item === 'Training' ? 'training-outer' : item.toLowerCase()}`}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: '#6A6560',
                    textDecoration: 'none',
                    transition: 'color 0.2s, padding-left 0.2s',
                  }}
                >
                  {item === 'Events' ? 'Tournament' : item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="ft-ct"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.54rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1.2rem',
            }}
          >
            Contact
          </div>
          <ul
            className="ft-links"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <li>
              <a
                href="mailto:info@deccanfencing.in"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                info@deccanfencing.in
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                +91 40 1234 5678
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                Gachibowli Indoor Stadium
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                Hyderabad 500032
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div
            className="ft-ct"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.54rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1.2rem',
            }}
          >
            Affiliations
          </div>
          <ul
            className="ft-links"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                Fencing Association of India
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                Telangana Fencing Assoc.
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                FIE — Int. Fencing Federation
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                Sports Auth. of Telangana
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
         className="ft-bot footer-bottom"
        style={{
          borderTop: '1px solid rgba(201,168,76,.08)',
          paddingTop: '1.8rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="ft-copy"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.54rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#6A6560',
          }}
        >
          © 2025 Deccan Fencing Club · All Rights Reserved
        </span>
        <span style={{ fontSize: '1.3rem' }}>🇮🇳</span>
      </div>
    </footer>
  );
}
