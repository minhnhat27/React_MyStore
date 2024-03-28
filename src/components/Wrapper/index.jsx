import style from './Wrapper.module.scss'

export default function Wrapper({ children, className }) {
  return <div className={`${style.wrapper} ${className}`}>{children}</div>
}
