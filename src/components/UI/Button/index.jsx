import { forwardRef } from 'react'

const Button = forwardRef(
  ({ children, className, type, onClick, disable }, ref) => {
    return (
      <button
        onClick={onClick}
        className={className}
        type={type}
        ref={ref}
        disabled={disable}
      >
        {children}
      </button>
    )
  },
)

export default Button
