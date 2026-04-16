const linkStyle = {
  fontSize: '0.9rem',
  fontWeight: 300,
  color: '#6A6560',
  textDecoration: 'none',
  transition: 'color 0.2s, padding-left 0.2s',
};

const handleHover = (e: any, enter: boolean) => {
  e.currentTarget.style.color = enter ? '#C9A84C' : '#6A6560';
  e.currentTarget.style.paddingLeft = enter ? '6px' : '0px';
};

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
           {[
  { label: 'About', path: '/about-us' },
  { label: 'What is Fencing', path: '/what-is-fencing' },
  { label: 'Faq', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Register Now', path: '/eventregistration' },
].map((item, i) => (
  <li key={i}>
    <a
      href={item.path}
      style={{
        fontSize: '0.9rem',
        fontWeight: 300,
        color: '#6A6560',
        textDecoration: 'none',
        transition: 'color 0.2s, padding-left 0.2s',
      }}
    >
      {item.label}
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
                href="mailto:deccanfencingclub@gmail.com"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6A6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
              >
                deccanfencingclub@gmail.com
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
                +91 89858 67456
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
               The Peak Pride, 602, D.No 257/91/134/1, beside Walking Street Drive in, Madhapur, Hyderabad, Telangana, India. Pin Code: 500081
              </a>
            </li>
            {/* <li>
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
            </li> */}
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
    Links
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
    {/* Legal Pages */}
    <li>
      <a
        href="/privacy-policy"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Privacy Policy
      </a>
    </li>

    <li>
      <a
        href="/terms-and-conditions"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Terms & Conditions
      </a>
    </li>

    <li>
      <a
        href="/cookie-policy"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Cookie Policy
      </a>
    </li>

    <li>
      <a
        href="/disclaimer"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Disclaimer
      </a>
    </li>

    {/* Divider */}
    <li style={{ margin: '0.8rem 0', opacity: 0.3 }}>—</li>

    {/* Social Links */}
    <li>
      <a
        href="https://www.facebook.com/people/Deccan-Fencing-Club/61554942851751/?mibextid=JRoKGi"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Facebook
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/deccanfencingclub"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Instagram
      </a>
    </li>

    <li>
      <a
        href="https://api.whatsapp.com/send/?phone=918985867456&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        WhatsApp
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
          © 2026 Deccan Fencing Club · All Rights Reserved
        </span>
        <span style={{ fontSize: '1.3rem' }}>🇮🇳</span>
      </div>
    </footer>
  );
}
