'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// (removed unused clamp)

export default function HeroMedia() {
  const VIEWPORT_HEIGHT = 677
  const COLUMN_WIDTH = 1183
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const OVERSCAN = 160 // extra pixels to avoid top/bottom gaps
  const [offset, setOffset] = useState(0)
  const [scale, setScale] = useState(1)
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef(0)
  const velocityRef = useRef(0)
  const progressRef = useRef(0)
  const posRef = useRef(0)

  useEffect(() => {
    const computeTarget = () => {
      const el = parallaxRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight || VIEWPORT_HEIGHT
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportH / 2
      const distanceFromCenter = elementCenter - viewportCenter
      let progress = distanceFromCenter / viewportH // approx -1..1
      if (progress < -1.2) progress = -1.2
      if (progress > 1.2) progress = 1.2
      progressRef.current = progress
      const baseStrength = window.innerWidth < 1024 ? 160 : 240
      targetRef.current = progress * baseStrength
    }

    const step = () => {
      const STIFFNESS = 0.08
      const DAMPING = 0.85
      const pos = posRef.current
      const target = targetRef.current
      let vel = velocityRef.current + (target - pos) * STIFFNESS
      vel *= DAMPING
      const nextPos = pos + vel
      velocityRef.current = vel
      posRef.current = nextPos
      setOffset(nextPos)
      const s = 1 + Math.min(0.04, Math.abs(progressRef.current) * 0.04)
      setScale(s)
      if (Math.abs(vel) > 0.05 || Math.abs(target - nextPos) > 0.5) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
      }
    }

    const onScrollOrResize = () => {
      computeTarget()
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    computeTarget()
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(step)
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="hero-media" className="relative" style={{ height: VIEWPORT_HEIGHT }}>
      <div className="grid" style={{ gridTemplateColumns: '508px 1183px', height: '100%', columnGap: 0, gap: 0, rowGap: 0 }}>
        {/* Left column: background video fill (609x677 shifted left by 51px) */}
        <div className="relative" style={{ width: 508, height: VIEWPORT_HEIGHT, overflow: 'hidden', borderRight: '1px solid #fff' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            crossOrigin="anonymous"
            src="/assets/video/hero-left.mp4"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right column: simple vertical parallax */}
        <div ref={parallaxRef} className="relative" style={{ width: COLUMN_WIDTH, height: VIEWPORT_HEIGHT, overflow: 'hidden', backgroundColor: '#e6e6e6' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: -OVERSCAN, bottom: -OVERSCAN, transform: `translate3d(0, ${offset}px, 0) scale(${scale})`, willChange: 'transform' }}>
            <Image
              src="/assets/images/hero-right.jpg"
              alt="Neon Ring Lights"
              fill
              style={{ objectFit: 'cover' }}
              sizes={`${COLUMN_WIDTH}px`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

