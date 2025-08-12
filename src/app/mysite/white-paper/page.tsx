import Image from 'next/image'
import AnimateOnView from '@/components/AnimateOnView'
import Typewriter from '@/components/Typewriter'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhitePaperPage() {
  return (
    <>
      <Header />
      <main className="whitepaper-page">
      {/* Section 1 – vision and bullet list - Responsive */}
      <section className="relative bg-white py-16 lg:py-0" style={{ height: 'auto' }}>
        <div className="px-110">
          <div className="relative" style={{ marginTop: 'auto', position: 'relative' }}>
            <div>
              <div className="relative max-w-full" style={{ marginTop: 24, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                {/* Title - Responsive */}
                <Typewriter 
                  as="p" 
                  text={"At SoraTech, We envision a future where anyone, anywhere can:"} 
                  speedMsPerChar={22} 
                  cursorWidthPx={10} 
                  className="text-center lg:text-left"
                  style={{ 
                    fontSize: 'clamp(24px, 5vw, 32px)', 
                    lineHeight: 'clamp(32px, 6vw, 45px)', 
                    marginBottom: 10, 
                    fontWeight: 900 
                  }} 
                />

                {/* Text block with small delay - Responsive */}
                <AnimateOnView as="div" variant="slide-up" delay={1} className="text-center lg:text-left">
                  <p style={{ fontSize: 13, lineHeight: '17px' }}>&nbsp;</p>
                  <ul className="max-w-lg mx-auto lg:mx-0" style={{ fontSize: 15, marginLeft: 8, listStyleType: 'disc' }}>
                    <li style={{ marginLeft: 20, lineHeight: '23px', marginBottom: 8 }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Issue real assets onchain</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px', marginBottom: 8 }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Access previously exclusive markets</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px', marginBottom: 8 }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Build protocols around real-world primitives</p>
                    </li>
                    <li style={{ marginLeft: 20, lineHeight: '23px', marginBottom: 8 }}>
                      <p style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>Earn real yield from tangible economic activity</p>
                    </li>
                  </ul>
                  <p style={{ fontSize: 15, lineHeight: '23px' }}>&nbsp;</p>
                  <p className="max-w-lg mx-auto lg:mx-0" style={{ fontSize: 15, lineHeight: '23px', margin: 0 }}>We&apos;re not just building tools—we&apos;re building a new financial system.</p>
                </AnimateOnView>

                {/* Button after text - Responsive positioning */}
                <AnimateOnView 
                  as="div" 
                  variant="slide-right" 
                  delay={2} 
                  className="mt-8 flex justify-center lg:justify-start"
                  style={{ position: 'relative' }}
                >
                  <a 
                    href="/assets/pdf/WhitePaper.pdf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center btn-invert btn-invert--white w-full max-w-md lg:w-auto" 
                    style={{ height: 48, padding: '0 32px' }}
                  >
                    <span style={{ fontSize: 16, lineHeight: '24px' }}>Download White Paper</span>
                  </a>
                </AnimateOnView>
              </div>

              {/* Removed horizontal line per request */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – full width background image - Responsive */}
      <section className="relative" style={{ height: 'clamp(600px, 50vh, 750px)' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/assets/images/whitepaper-abstract-lines.jpg" alt="Abstract Lines" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

