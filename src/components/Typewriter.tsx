'use client'

import { useEffect, useRef, useState, ElementType } from 'react'
import { useInViewport } from '@/lib/useInViewport'

type Props = {
  as?: ElementType
  text: string
  speedMsPerChar?: number
  startDelayMs?: number
  cursorWidthPx?: number
  className?: string
  style?: React.CSSProperties
}

export default function Typewriter({
  as = 'h2',
  text,
  speedMsPerChar = 45,
  startDelayMs = 0,
  cursorWidthPx = 10,
  className = '',
  style = {},
}: Props) {
  const { ref, inView } = useInViewport<HTMLElement>()
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true
    const startTimer = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i += 1
        setCount((c) => Math.min(text.length, c + 1))
        if (i >= text.length) {
          clearInterval(id)
        }
      }, speedMsPerChar)
    }, startDelayMs)
    return () => clearTimeout(startTimer)
  }, [inView, speedMsPerChar, startDelayMs, text.length])

  const Comp = as
  const visible = text.slice(0, count)

  return (
    <Comp ref={ref} className={className} style={{ position: 'relative', ...style }}>
      <span>{visible}</span>
      <span
        aria-hidden
        style={{
          display: count >= text.length ? 'none' : 'inline-block',
          width: cursorWidthPx,
          height: '1em',
          marginLeft: 2,
          background: 'currentColor',
          verticalAlign: '-0.15em',
          animation: 'tw-blink 1s steps(1) infinite',
        }}
      />
    </Comp>
  )
}

