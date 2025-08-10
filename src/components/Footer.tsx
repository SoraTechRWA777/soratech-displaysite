const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top band: responsive paddings */}
      <div className="px-110" style={{ paddingTop: 55, paddingBottom: 80 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Left column - responsive width and alignment */}
          <div className="text-center lg:text-left">
            {/* Brand title responsive positioning */}
            <p className="ml-32" style={{ marginTop: 0, marginBottom: 10 }}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="text-black hover:opacity-80" style={{ fontSize: 66, lineHeight: '73px', fontWeight: 900, letterSpacing: '-2px', textDecoration: 'none' }}>
                SoraTech
              </a>
            </p>
            {/* Email responsive positioning */}
            <p style={{ marginTop: 100, marginBottom: 0 }}>
              <a
                href="mailto:join@soratechrwa.com"
                className="text-black hover:opacity-70 ml-44 block lg:inline"
                style={{ fontSize: 15, lineHeight: '23px', textDecoration: 'none' }}
              >
                join@soratechrwa.com
              </a>
            </p>
          </div>

          {/* Right column - responsive alignment */}
          <div className="text-center lg:text-right">
            {/* Copyright responsive positioning */}
            <div style={{ marginTop: 'auto', width: '100%' }} className="mt-8 footer-copy-mt">
              <p className="text-black/80" style={{ marginTop: 0, marginBottom: 0, fontSize: 15, lineHeight: '23px' }}>
                © 2025 by SoraTech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider line responsive margins */}
      <div className="border-t border-black/10 mx-4 lg:mx-[120px]" />
    </footer>
  )
}

export default Footer