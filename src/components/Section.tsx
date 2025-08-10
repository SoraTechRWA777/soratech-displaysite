interface SectionProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
}

const Section = ({ children, className = '', dark = false, id }: SectionProps) => {
  const baseClasses = 'py-0'  // Remove default padding to allow custom control
  const themeClasses = dark
    ? 'bg-black text-white'
    : 'bg-white text-black'
  
  const classes = `${baseClasses} ${themeClasses} ${className}`
  
  return (
    <section id={id} className={classes}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

export default Section