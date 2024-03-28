import Header from '../Header'
import Footer from '../Footer'

export default function HomeLayout({ children }) {
  return (
    <>
      <Header className="fixed" />
      {children}
      <Footer />
    </>
  )
}
