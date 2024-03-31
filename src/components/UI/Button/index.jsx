import { forwardRef } from 'react'

const Button = forwardRef(({ children, className, type, onClick, disabled }, ref) => {
  return (
    <button onClick={onClick} className={className} type={type} ref={ref} disabled={disabled}>
      {children}
    </button>
  )
})

export default Button
