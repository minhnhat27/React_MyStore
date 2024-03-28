import style from './Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={`${style.home}`}>Home</div>
      <div className="min-h-screen">Home</div>
      <div className={`${style.home}`}>Home</div>
    </>
  )
}
