const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top band: 110px side paddings, 55px top, 10px bottom; inner area 1472px split into two 736px columns */}
      <div style={{ paddingLeft: 110, paddingRight: 110, paddingTop: 55, paddingBottom: 80 }}>
        <div className="grid" style={{ gridTemplateColumns: '736px 736px' }}>
          {/* Left column (736px) */}
          <div style={{ width: 736 }}>
            {/* Brand title 66/73 bold with -2 letter spacing, left offset 32, 10px bottom spacing */}
            <p style={{ marginLeft: 32, marginTop: 0, marginBottom: 10 }}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="text-black hover:opacity-80" style={{ fontSize: 66, lineHeight: '73px', fontWeight: 900, letterSpacing: '-2px', textDecoration: 'none' }}>
                SoraTech
              </a>
            </p>
            {/* Email 15/23 with left offset 44; ensure marginTop 100 from container top if requested */}
            <p style={{ marginTop: 100, marginBottom: 0 }}>
              <a
                href="mailto:join@soratechrwa.com"
                className="text-black hover:opacity-70"
                style={{ marginLeft: 44, fontSize: 15, lineHeight: '23px', textDecoration: 'none' }}
              >
                join@soratechrwa.com
              </a>
            </p>
          </div>

          {/* Right column (736px) */}
          <div style={{ width: 736 }}>
            {/* Copyright aligned to right within the 736px column */}
            <div style={{ marginTop: 174, width: '100%', textAlign: 'right' }}>
              <p className="text-black/80" style={{ marginTop: 0, marginBottom: 0, fontSize: 15, lineHeight: '23px' }}>
                © 2025 by SoraTech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider line with 120px side margins (1452px width) */}
      <div className="border-t border-black/10" style={{ marginLeft: 120, marginRight: 120 }} />
    </footer>
  )
}

export default Footer