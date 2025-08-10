import Image from 'next/image'
import AnimateOnView from '@/components/AnimateOnView'
import Typewriter from '@/components/Typewriter'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhitePaperPage() {
  return (
    <>
      <Header />
      <main>
      {/* Section 1 – vision and bullet list */}
      <section className="relative bg-white" style={{ height: 409 }}>
        <div style={{ paddingLeft: 110, paddingRight: 110 }}>
          <div style={{ height: 329, marginTop: 80, position: 'relative' }}>
            <div>
              <div style={{ position: 'relative', marginTop: 24, marginBottom: 10, marginLeft: 10, marginRight: 10, width: 1276 }}>
                {/* Title */}
                <Typewriter as="p" text={"At SoraTech, We envision a future where anyone, anywhere can:"} speedMsPerChar={22} cursorWidthPx={10} style={{ fontSize: 32, lineHeight: '45px', marginBottom: 10, fontWeight: 900 }} />

                {/* Text block with small delay */}
                <AnimateOnView as="div" variant="slide-up" delay={1}>
                  <p style={{ fontSize: 13, lineHeight: '17px' }}>&nbsp;</p>
                  <ul style={{ fontSize: 15, marginLeft: 8, listStyleType: 'disc' }}>
                    <li style={{ marginLeft: 20, lineHeight: '23px' }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Issue real assets onchain</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px' }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Access previously exclusive markets</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px' }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Build protocols around real-world primitives</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px' }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Earn real yield from tangible economic activity</p>
                    </li>
                  </ul>
                  <p style={{ fontSize: 15, lineHeight: '23px' }}>&nbsp;</p>
                  <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>We’re not just building tools—we’re building a new financial system.</p>
                </AnimateOnView>

                {/* Button after text with its own animation */}
                <AnimateOnView as="div" variant="slide-right" delay={2} style={{ position: 'absolute', left: 603, bottom: 0, width: 485, height: 48 }}>
                  <a href="/assets/pdf/WhitePaper.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center btn-invert btn-invert--white" style={{ width: '100%', height: '100%' }}>
                    <span style={{ fontSize: 16, lineHeight: '24px' }}>Download White Paper</span>
                  </a>
                </AnimateOnView>
              </div>

              {/* Removed horizontal line per request */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – full width background image 750 height */}
      <section className="relative" style={{ height: 750 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/assets/images/whitepaper-abstract-lines.jpg" alt="Abstract Lines" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

