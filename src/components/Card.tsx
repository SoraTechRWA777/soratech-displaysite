interface CardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

const Card = ({ children, className = '', dark = false }: CardProps) => {
  const baseClasses = 'rounded-lg p-6'
  const themeClasses = dark
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black border border-gray-200'
  
  const classes = `${baseClasses} ${themeClasses} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card