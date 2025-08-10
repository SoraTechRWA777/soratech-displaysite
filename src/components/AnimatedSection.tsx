'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
  delay?: number
}

const AnimatedSection = ({ children, className = '', dark = false, id, delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const baseClasses = 'py-16 lg:py-20'
  const themeClasses = dark
    ? 'bg-black text-white'
    : 'bg-white text-black'
  
  const classes = `${baseClasses} ${themeClasses} ${className}`
  
  return (
    <motion.section
      ref={ref}
      id={id}
      className={classes}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6,
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  )
}

export default AnimatedSection