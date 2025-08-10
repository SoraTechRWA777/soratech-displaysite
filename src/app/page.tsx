"use client"
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroMedia from '@/components/HeroMedia'
import AnimateOnView from '@/components/AnimateOnView'
import Typewriter from '@/components/Typewriter'

import { useEffect } from 'react'
import { countries } from '@/lib/countries'

export default function Home() {
  // Handle scrollTo param to ensure we land at top then smooth scroll
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const target = params.get('scrollTo')
    if (target) {
      // Scroll to top first, then smooth-scroll to anchor; also update hash
      window.scrollTo({ top: 0 })
      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.replaceState(null, '', `/#${target}`)
        }
      }, 60)
    }
  }, [])
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="relative" style={{ backgroundColor: '#fff', marginBottom: 0 }}>
            {/* Main Content area with 120px side paddings */}
          <div className="relative z-10 px-120">
            {/* Title block (1452w x 238h) with bigger top gap and smaller bottom gap */}
            <div className="h-238" style={{ marginTop: 36, marginBottom: 0 }}>
              <AnimateOnView as="h1" variant="fade-in" className="h1-hero" style={{ fontWeight: 900, color: '#000' }}>
                SORATECH RWA
              </AnimateOnView>
            </div>

            {/* Subtitle + CTA row (1452w x 155h) */}
            <div className="grid grid-cols-2 h-155">
              {/* Left: subtitle (593w x 23h), offset ~23px from column left */}
              <div className="flex items-start">
                <AnimateOnView as="p" className="" variant="fade-in" delay={1}>
                  <span className="subtitle-hero" style={{ marginTop: 41, marginLeft: 23, display: 'inline-block' }}>
                  We Make Real World Assets, Onchain.
                  </span>
                </AnimateOnView>
              </div>
              {/* Right: CTA 160x50 aligned right with ~28px top offset */}
              <div className="flex items-start justify-end">
                <a href="#about" aria-label="Learn more" className="btn-invert btn-invert--white inline-flex items-center justify-center btn-160x50 mt-28">
                  <span className="text-16-24">
                    Learn more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Media Hero Section (video + parallax image) */}
        <HeroMedia />

        {/* About Section - EXACT MATCH, aligned container with hero */}
        <section
          id="about"
          className="Oqnisf section"
          style={{
            position: 'relative',
            backgroundColor: 'rgb(245, 245, 245)',
          }}
        >
          {/* Content band 1472px with 110px side paddings */}
          <div className="px-110">
            <div className="grid grid-cols-2">
              {/* Left: image slightly bigger, closer to right column */}
              <div className="relative" style={{ minHeight: 535 }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 58,
                    left: 20,
                    width: 660,
                    height: 477,
                    overflow: 'hidden',
                  }}
                >
                <Image 
                  src="/assets/images/about.jpeg"
                  alt="Professional woman working with technology"
                    width={660}
                    height={477}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: vertically center to image block, reduced left offset */}
              <div className="relative">
                <div style={{ marginTop: 58, height: 477 }} className="flex items-center">
              <div>
                    <Typewriter
                      as="h2"
                      text="About SoraTech"
                      speedMsPerChar={40}
                      cursorWidthPx={10}
                      className="h2-66 ml-10"
                      style={{ marginTop: 0, marginBottom: 24, fontWeight: 700, color: '#000' }}
                    />
                    <AnimateOnView
                      as="p"
                      variant="zoom-in"
                      delay={1}
                      className="text-33b ml-10"
                      style={{ maxWidth: 900, color: '#000' }}
                    >
                      We are dedicated to providing solutions that designed to
                      be a modular, compliant, and user-friendly infrastructure
                      for issuing, trading, and governing tokenized RWAs.
                    </AnimateOnView>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Hero legacy block removed (replaced by <HeroMedia />) */}

        {/* The Problem — pixel-perfect per provided spec */}
        <section id="problem" className="relative bg-white h-565">
          {/* Heading block: container aligned with 110px side margin; heading left offset 42px */}
          <div className="px-110">
            <div className="mt-86 mb-64">
              <AnimateOnView
                as="h2"
                variant="slide-left"
                style={{
                  marginLeft: 42,
                  fontSize: 66,
                  lineHeight: '73px',
                  letterSpacing: '-2px',
                  fontWeight: 900,
                  color: '#000',
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                The Problem
              </AnimateOnView>
            </div>

            {/* Intro paragraph: left offset 74px, size 33/43, bold, 65px bottom spacing */}
            <AnimateOnView
              as="p"
              variant="slide-up"
              delay={1}
              className="text-33b ml-74"
              style={{ color: '#000', marginBottom: 65 }}
            >
              Despite rapid growth in DeFi, most real-world assets remain locked
              in traditional systems:
            </AnimateOnView>

            {/* Bullet list: container left offset ~73px; font 18 with 27px line height; no extra top margin */}
            <AnimateOnView
              as="ul"
              variant="fade-in"
              delay={2}
              className="ml-73 ul-disc text-black"
              style={{ marginTop: 0, fontSize: 18, lineHeight: '27px' }}
            >
              <li className="li-ml-23">
                <p
                  style={{
                    margin: 0,
                    lineHeight: '27px',
                    fontFamily: 'Satoshi',
                  }}
                >
                  <span style={{ fontSize: 18 }}>
                    Limited Access: Only select participants can invest in
                    global real estate, private equity, or structured finance.
                  </span>
                </p>
                </li>
              <li className="li-ml-23">
                <p
                  style={{
                    margin: 0,
                    lineHeight: '27px',
                    fontFamily: 'Satoshi',
                  }}
                >
                  <span style={{ fontSize: 18 }}>
                    Lack of Liquidity: Many valuable assets are illiquid or have
                    high entry/exit costs.
                  </span>
                </p>
                </li>
              <li className="li-ml-23">
                <p
                  style={{
                    margin: 0,
                    lineHeight: '27px',
                    fontFamily: 'Satoshi',
                  }}
                >
                  <span style={{ fontSize: 18 }}>
                    Poor Transparency: Asset tracking, valuation, and custody
                    are opaque and fragmented.
                  </span>
                </p>
                </li>
              <li className="li-ml-23">
                <p
                  style={{
                    margin: 0,
                    lineHeight: '27px',
                    fontFamily: 'Satoshi',
                  }}
                >
                  <span style={{ fontSize: 18 }}>
                    Compliance Complexity: Navigating global regulatory
                    frameworks is difficult for both issuers and investors.
                  </span>
                </p>
                </li>
            </AnimateOnView>
          </div>
        </section>

        {/* Solution Section - pixel-perfect per provided spec */}
        <section id="solution" className="relative text-white h-766" style={{ backgroundColor: '#000' }}>
          {/* Container paddings match other sections: 110px sides, adjust top padding to 22px */}
          <div className="px-110" style={{ paddingTop: 88 }}>
            <div style={{ marginBottom: 7 }}>
                <Typewriter
                  as="h2"
                  text="Our Solution"
                  speedMsPerChar={40}
                  cursorWidthPx={10}
                  className="h2-66 ml-42"
                  style={{ fontWeight: 900, color: '#fff', marginTop: 0, marginBottom: 0 }}
                />
            </div>

            {/* Intro paragraph 33/43 bold; positioned with left offset (655 inside 110px padded container) */}
            <AnimateOnView
              as="p"
              variant="zoom-in"
              delay={1}
              className="text-33b ml-655"
              style={{ marginTop: 52, maxWidth: 780, color: '#fff', marginBottom: 10 }}
            >
              We are building an open RWA infrastructure that solves these
              problems through{' '}
              <span
                style={{
                  textShadow:
                    'rgba(10, 189, 240, 0.298039) 3px 3px 0px, rgba(254, 1, 1, 0.298039) -3px -3px 0px',
                }}
              >
                three key pillars
              </span>
              :
            </AnimateOnView>

            {/* Divider line (left/right margins 10) */}
            <AnimateOnView as="div" variant="line-reveal" delay={1} className="ml-10 mr-10" style={{ marginTop: 36, color: '#fff' }} />

            {/* Row 1: subheading + bullets (294px | 1178px) with bullets wrapper offset 394px */}
            <AnimateOnView
              as="div"
              variant="slide-up"
              className="grid grid-294-1178"
              style={{ marginTop: 20 }}
            >
              <div>
                <h3 className="ml-10" style={{ color: '#fff', fontSize: 15, lineHeight: '23px', marginBottom: 0 }}>
                  1. Compliant Tokenization
                </h3>
              </div>
              <div>
                <div style={{ marginLeft: 394, width: 500, height: 68 }}>
                  <ul className="ul-ml-8" style={{ color: '#fff', fontSize: 15, lineHeight: '23px' }}>
                    <li className="li-ml-20">KYC/AML checks built-in</li>
                    <li className="li-ml-20">
                      Jurisdictional design via ADGM (UAE), Swiss Trust, and
                      local entities
                    </li>
                    <li className="li-ml-20">
                      Modular legal templates for asset issuers
                    </li>
                </ul>
                </div>
              </div>
            </AnimateOnView>

            {/* Divider */}
            <AnimateOnView as="div" variant="line-reveal" delay={2} className="ml-10 mr-10" style={{ marginTop: 26, marginBottom: 13, color: '#fff' }} />

            {/* Row 2 */}
            <AnimateOnView
              as="div"
              variant="slide-up"
              className="grid grid-294-1178"
            >
              <div>
                <h3 className="ml-10" style={{ color: '#fff', fontSize: 15, lineHeight: '23px', marginBottom: 0 }}>
                  2. Modular Liquidity Engine
                </h3>
              </div>
              <div>
                <div style={{ marginLeft: 394, width: 500 }}>
                  <ul className="ul-ml-8" style={{ color: '#fff', fontSize: 15, lineHeight: '23px' }}>
                    <li className="li-ml-20">
                      Support for Bonding Curve, CLMM, and Orderbook-based AMMs
                    </li>
                    <li className="li-ml-20">
                      Seamless integration with Solana aggregators (e.g.,
                      Jupiter)
                    </li>
                    <li className="li-ml-20">
                      Permissionless liquidity provisioning
                    </li>
                </ul>
                </div>
              </div>
            </AnimateOnView>

            {/* Divider */}
            <AnimateOnView as="div" variant="line-reveal" delay={3} className="ml-10 mr-10" style={{ marginTop: 26, marginBottom: 13, color: '#fff' }} />

            {/* Row 3 */}
            <AnimateOnView
              as="div"
              variant="slide-up"
              className="grid grid-294-1178"
            >
              <div>
                <h3 className="ml-10" style={{ color: '#fff', fontSize: 15, lineHeight: '23px', marginBottom: 0 }}>
                  3. Creator Tools
                </h3>
              </div>
              <div>
                <div style={{ marginLeft: 394, width: 500 }}>
                  <ul className="ul-ml-8" style={{ color: '#fff', fontSize: 15, lineHeight: '23px' }}>
                    <li className="li-ml-20">
                      One-click asset token creation
                    </li>
                    <li className="li-ml-20">
                      NFT-style experience for asset wrappers
                    </li>
                    <li className="li-ml-20">
                      Airdrop, presale, and vesting modules
                    </li>
                </ul>
              </div>
            </div>
            </AnimateOnView>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-black/10" />

        {/* White Paper Section - exact paddings and alignment */}
        <section id="whitepaper" className="relative bg-white h-149">
          <div className="px-110">
            <div className="grid grid-736-736 h-99 mt-19 mb-31">
              <div className="flex items-center" style={{ width: 736 }}>
                <Typewriter
                  as="h2"
                  text="White Paper"
                  speedMsPerChar={40}
                  cursorWidthPx={10}
                  className="ml-10 h2-66 mt-26"
                  style={{ fontWeight: 900, color: '#000', marginBottom: 0 }}
                />
              </div>
              <div
                className="flex"
                style={{
                  width: 736,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <AnimateOnView
                  as="div"
                  variant="fade-in"
                  delay={1}
                  className="btn-142x40 ml-246 mt-26"
                >
                  <a
                    href="/assets/pdf/WhitePaper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-invert btn-invert--white inline-flex items-center justify-center"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <span style={{ fontSize: 15, lineHeight: '20px' }}>
                      Download
                    </span>
                  </a>
                </AnimateOnView>
              </div>
            </div>
          </div>
        </section>

        {/* Build on Section - pixel-perfect */}
        <section id="buildon" className="relative bg-white h-213">
          {/* top horizontal line with left-to-right reveal */}
          <AnimateOnView as="div" variant="line-reveal" className="ml-10 mr-10" style={{ marginTop: 30, marginBottom: 30, color: '#000' }} />
          <div className="px-110">
            <div className="grid grid-736-736" style={{ height: 73, marginBottom: -25 }}>
              <div className="flex items-center" style={{ width: 736 }}>
                <Typewriter
                  as="h2"
                  text="Build on"
                  speedMsPerChar={40}
                  cursorWidthPx={10}
                  className="ml-10 h2-66"
                  style={{ fontWeight: 900, color: '#000' }}
                />
              </div>
              <div
                className="flex items-center"
                style={{ width: 736, justifyContent: 'flex-start' }}
              >
                {/* Vector logo area 160x40; remove stray border/gap */}
                <AnimateOnView as="div" variant="fade-in" delay={1} className="ml-246" style={{ width: 160, height: 40 }}>
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="0 0 2568 643"
                    viewBox="0 0 2568 643"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="color"
                    role="presentation"
                    aria-hidden="true"
                    aria-label=""
                  >
                    <g>
                      <path
                        fill="#ffffff"
                        d="M2568 0v643H0V0z"
                        data-color="1"
                      ></path>
                      <path
                        d="M931.1 341h82.5c11.6 0 21 9.5 21 21.1 0 11.7-9.4 21.1-21 21.1h-99.5c-1.6 0-3.1.6-4.2 1.6l-30 25.9c-4.6 4-1.8 11.5 4.2 11.5h124.5s.1 0 .1-.1.1-.1.1-.1c1.6.1 3.1.2 4.7.2 33 0 59.8-26.9 59.8-60.1 0-31.5-24.1-57.4-54.9-59.9 0 0-.1 0-.1-.1s0-.1-.1-.1h-88.8c-11.6 0-21-9.5-21-21.1 0-11.7 9.4-21.1 21-21.1h99.3c1.6 0 3.2-.6 4.4-1.7l27.9-25.9c4.4-4.1 1.5-11.4-4.4-11.4H929.5c-33 0-59.8 26.9-59.8 60.1s26.8 60.1 59.8 60.1z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M1411.3 220.7c-3.6 0-6.5 2.9-6.5 6.6v188.4c0 3.6 2.9 6.6 6.5 6.6h151c1.8 0 3.5-.8 4.8-2.1l18.9-20.3c3.9-4.2 1-11.1-4.8-11.1h-131.8c-3.6 0-6.5-2.9-6.5-6.6v-155c0-3.6-2.9-6.6-6.5-6.6h-25.1z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M1169.5 220.7q0 .15 0 0c-19.3.9-34.8 16.4-35.7 35.7v128.3c0 20.1 15.8 36.5 35.7 37.3h137c19.8-.9 35.7-17.3 35.7-37.3V256.5c-.8-19.3-16.3-34.9-35.6-35.7h-137.1zm25.6 35.8q-.15 0 0 0c-12.1.5-21.8 10.3-22.3 22.5v80.7c0 12.6 9.9 23 22.3 23.5h85.9c12.4-.5 22.3-10.9 22.3-23.5V279c-.5-12.2-10.2-21.9-22.3-22.5z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M1805.5 415.7c0 3.6 2.9 6.6 6.5 6.6h25.6c3.6 0 6.5-2.9 6.5-6.6V258.2c0-20.1-15.7-36.5-35.3-37.3h-133.1c-20.4 0-36.9 16.7-36.9 37.4v157.5c0 3.6 2.9 6.6 6.5 6.6h25.6c3.6 0 6.5-2.9 6.5-6.6v-64.9c0-3.6 2.9-6.6 6.5-6.6h115.4c3.6 0 6.5 2.9 6.5 6.6v64.8zm-128.3-107.3V276c0-12.6 10.1-22.8 22.5-22.8h83.4c12.4 0 22.5 10.2 22.5 22.8v32.4c0 3.6-2.9 6.6-6.5 6.6h-115.4c-3.6 0-6.5-2.9-6.5-6.6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M2346 422.3c-3.6 0-6.5-2.9-6.5-6.6v-64.9c0-3.6-2.9-6.6-6.5-6.6h-116.7c-3.6 0-6.5 2.9-6.5 6.6v64.9c0 3.6-2.9 6.6-6.5 6.6h-25.8c-3.6 0-6.5-2.9-6.5-6.6V258.2c0-20.6 16.7-37.4 37.3-37.4h134.5c19.8.9 35.7 17.3 35.7 37.3v157.5c0 3.6-2.9 6.6-6.5 6.6h-26zM2209.8 276v32.4c0 3.6 2.9 6.6 6.5 6.6H2333c3.6 0 6.5-2.9 6.5-6.6V276c0-12.6-10.2-22.8-22.7-22.8h-84.3c-12.6 0-22.7 10.2-22.7 22.8"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M1940.5 220.7c1.9 0 3.7.8 4.9 2.3l114.8 136.9c3.9 4.6 11.4 1.8 11.4-4.3V227.3c0-3.6 2.9-6.6 6.5-6.6h25.6c3.6 0 6.5 2.9 6.5 6.6v188.4c0 3.6-2.9 6.6-6.5 6.6h-31.8c-.1 0-.2-.1-.2-.2s0-.1-.1-.2L1954.8 286c-3.9-4.6-11.4-1.7-11.4 4.3v125.5c0 3.6-2.9 6.6-6.5 6.6h-25.8c-3.6 0-6.5-2.9-6.5-6.6V227.3c0-3.6 2.9-6.6 6.5-6.6z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M274.4 429.2c3.2-3.2 7.5-5 12-5h416.5c7.6 0 11.4 9.2 6 14.5L626.6 521c-3.2 3.2-7.5 5-12 5H198.1c-7.6 0-11.4-9.2-6-14.5z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M274.4 122c3.2-3.2 7.5-5 12-5h416.5c7.6 0 11.4 9.2 6 14.5l-82.3 82.2c-3.2 3.2-7.5 5-12 5H198.1c-7.6 0-11.4-9.2-6-14.5z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                      <path
                        d="M626.6 274.6c-3.2-3.2-7.5-5-12-5H198.1c-7.6 0-11.4 9.2-6 14.5l82.3 82.2c3.2 3.2 7.5 5 12 5h416.5c7.6 0 11.4-9.2 6-14.5z"
                        fill="#000000"
                        data-color="2"
                      ></path>
                    </g>
                  </svg>
                </AnimateOnView>
              </div>
            </div>
          </div>
          {/* bottom horizontal line intentionally removed per design */}
        </section>

        {/* Contact Section - pixel-perfect per provided spec (desktop) */}
        <section
          id="contact"
          className="relative text-white"
          style={{ height: 1063, backgroundColor: '#000' }}
        >
          <div className="px-110" style={{ paddingTop: 84 }}>
            {/* Top row: heading and intro copy (304px tall) */}
            <div className="grid grid-500-972 h-304">
              {/* Left column: Contact heading */}
              <div className="relative">
                <AnimateOnView
                  as="h2"
                  variant="slide-up"
                  style={{
                    marginLeft: 10,
                    fontSize: 66,
                    lineHeight: '73px',
                    letterSpacing: '-2px',
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: 10,
                  }}
                >
                  Contact
                </AnimateOnView>
                </div>

              {/* Right column: Get in Touch + description */}
              <div className="relative">
                <AnimateOnView
                  as="p"
                  variant="zoom-in"
                  delay={1}
                  className="ml-325 text-17"
                  style={{ marginTop: 36, marginBottom: 43, color: '#fff', fontWeight: 400 }}
                >
                  Get in Touch
                </AnimateOnView>
                <AnimateOnView
                  as="p"
                  variant="slide-up"
                  delay={2}
                  className="ml-325 text-33xb"
                  style={{ maxWidth: 530, color: '#fff', marginBottom: 10 }}
                >
                  Have a question or want to learn more about our app solutions?
                  Reach out to us today.
                </AnimateOnView>
              </div>
            </div>

            {/* Bottom row: form block (569px tall) */}
            <div className="grid grid-500-972 h-569 mb-10">
              {/* Left column empty per spec */}
              <div />

              {/* Right column: form container 500x555 with offsets */}
              <div className="relative">
                <div style={{ marginTop: 7, marginBottom: 5, marginLeft: 325 }} className="w-500" >
                  <form
                    aria-label="Contact"
                    className="w-500"
                  >
                    
                    {/* First name */}
                    <div style={{ height: 68, marginBottom: 24 }}>
                      <label className="contact-label" style={{ color: '#fff' }}>
                        First name
                        <span aria-hidden="true" style={{ marginLeft: 4 }}>
                          *
                        </span>
                      </label>
                      <div className="contact-row" style={{ borderBottom: '1px solid #fff' }}>
                    <input 
                      type="text" 
                          aria-label="First name"
                      required 
                          className="contact-input"
                          style={{ width: 488 }}
                        />
                      </div>
                    </div>

                    {/* Last name */}
                    <div style={{ height: 68, marginBottom: 24 }}>
                      <label className="contact-label" style={{ color: '#fff' }}>
                        Last name
                        <span aria-hidden="true" style={{ marginLeft: 4 }}>
                          *
                        </span>
                      </label>
                      <div className="contact-row" style={{ borderBottom: '1px solid #fff' }}>
                    <input 
                      type="text" 
                          aria-label="Last name"
                      required 
                          className="contact-input"
                          style={{ width: 488 }}
                    />
                  </div>
                    </div>

                    {/* Email */}
                    <div style={{ height: 68, marginBottom: 24 }}>
                      <label className="contact-label" style={{ color: '#fff' }}>
                        Email
                        <span aria-hidden="true" style={{ marginLeft: 4 }}>
                          *
                        </span>
                      </label>
                      <div className="contact-row" style={{ borderBottom: '1px solid #fff' }}>
                  <input 
                    type="email" 
                          aria-label="Email"
                    required 
                          className="contact-input"
                          style={{ width: 488 }}
                        />
                      </div>
                    </div>

                    {/* Country dropdown + phone with 40x40 prefix and icon (globe + caret) */}
                    <div style={{ height: 68, marginBottom: 24 }}>
                      <label className="contact-label" style={{ color: '#fff' }}>
                        Phone
                      </label>
                      <div className="contact-row" style={{ alignItems: 'center', borderBottom: '1px solid #fff' }}>
                        {/* Globe + caret visual trigger (fixed 40x40) with invisible select overlay (full country list) */}
                        <div style={{ position: 'relative', width: 40, height: 40, marginLeft: 12 }}>
                          <span
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              pointerEvents: 'none',
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 24 }}>
                              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path fillRule="evenodd" d="M11.5,19 C11.331,19 11.166,18.985 11,18.975 L11,16.5 C11,16.224 10.776,16 10.5,16 L9.5,16 C9.224,16 9,15.775 9,15.5 L9,12.5 C9,12.366 8.947,12.238 8.852,12.145 L4.804,8.14 C6.04,5.688 8.573,4 11.5,4 C12.76,4 13.946,4.315 14.989,4.866 L15,6.497 C15.001,6.631 14.949,6.757 14.855,6.853 C14.76,6.947 14.634,7 14.5,7 L12.339,7 C12.207,7 12.08,7.053 11.986,7.146 L10.146,8.983 C10.053,9.077 10,9.204 10,9.337 L10,10.5 C10,11.325 10.672,11.999 11.499,12 L15.293,12 L17,13.707 L17,16.582 C15.629,18.064 13.674,19 11.5,19 M4,11.5 C4,10.673 4.14,9.879 4.388,9.135 L8,12.709 L8,15.5 C8,16.327 8.673,17 9.5,17 L10,17 L10,18.849 C6.581,18.152 4,15.122 4,11.5 M19,11.5 C19,12.856 18.632,14.127 18,15.226 L18,13.5 C18,13.367 17.947,13.24 17.854,13.146 L15.854,11.146 C15.76,11.053 15.633,11 15.5,11 L11.5,11 C11.224,11 11,10.775 11,10.5 L11,9.544 L12.546,8 L14.5,8 C14.902,8 15.281,7.843 15.564,7.557 C15.848,7.271 16.003,6.892 16,6.49 L15.993,5.51 C17.814,6.879 19,9.051 19,11.5 M11.5,3 C6.813,3 3,6.813 3,11.5 C3,16.187 6.813,20 11.5,20 C16.187,20 20,16.187 20,11.5 C20,6.813 16.187,3 11.5,3" />
                              </svg>
                              <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true" style={{ marginLeft: 2 }}>
                                <path fillRule="evenodd" d="M15.648 6.645l.707.707-5.293 5.294.002.003-.707.707-.002-.003-.001.002-.707-.707v-.003L4.355 7.352l.707-.707 5.293 5.293 5.293-5.293z" />
                              </svg>
                            </span>
                          </span>
                          {/* Invisible native select covering the globe trigger */}
                          <select
                            aria-label="Country"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              opacity: 0,
                              color: 'transparent',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              WebkitAppearance: 'none',
                              appearance: 'none',
                            }}
                            className="country-select-overlay"
                          >
                            {countries.map((c) => (
                              <option key={c.code} value={c.code}>{`${c.name} ${c.dial}`}</option>
                            ))}
                          </select>
                        </div>
                  <input 
                    type="tel" 
                          aria-label="Phone"
                          className="contact-input"
                          style={{ width: 436, padding: '8px 2px 8px 4px' }}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ height: 120, marginBottom: 24 }}>
                      <label className="contact-label" style={{ color: '#fff' }}>
                        Message
                      </label>
                      <div className="contact-row" style={{ height: 92, paddingTop: 8, paddingBottom: 8, borderBottom: '1px solid #fff' }}>
                  <textarea 
                          aria-label="Message"
                          className="contact-textarea"
                        />
                      </div>
                    </div>

                    {/* Submit button */}
                    <div style={{ height: 43 }}>
                      <button
                        type="button"
                         className="btn-invert btn-invert--black btn-500x43"
                         style={{ fontSize: 16, lineHeight: '21px', color: '#fff', padding: '11px 15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <span style={{ display: 'block', lineHeight: '19px' }}>
                    Submit
                        </span>
                      </button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
