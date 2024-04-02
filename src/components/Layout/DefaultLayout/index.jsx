import Header from '../Header'
import Footer from '../Footer'
import { useEffect } from 'react'

export default function DefaultLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Header />
      <div className="md:px-8">{children}</div>
      <Footer />
    </>
  )
}
