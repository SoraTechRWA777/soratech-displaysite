'use client'

import { ReactNode, ElementType } from 'react'
import { useInViewport } from '@/lib/useInViewport'

type Props = {
  as?: ElementType
  className?: string
  children?: ReactNode
  variant?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in' | 'line-reveal'
  delay?: 0 | 1 | 2 | 3
  [key: string]: unknown
}

export default function AnimateOnView({ as = 'div', className = '', children, variant = 'fade-in', delay = 0, ...rest }: Props) {
  const { ref, inView } = useInViewport<HTMLDivElement>()
  const Comp = as
  const delayClass = delay ? ` ${variant}-delay-${delay}` : ''
  return (
    <Comp ref={ref} className={`${variant} ${inView ? 'is-visible' : ''}${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Comp>
  )
}

