import Button from '../../UI/Button'
import Image from '../../UI/Image'
import Wrapper from '../../Wrapper'
import { useAuth } from '../../../App'
import logo from '../../../logo.svg'
import Search from './Search'
import Login from '../../Login'
import Register from '../../Register'

import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { BsX, BsList, BsChevronLeft } from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group'
import Offcanvas from './Offcanvas'
import NavUser from './NavUser'
import { navigation } from '../../../services/routes'

export default function Header({ className }) {
  const { state } = useAuth()
  const isAuthenticated = state.isAuthenticated

  const [isExpanded, setIsExpanded] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const nodeRef = useRef(null)

  const handleCloseForm = () => {
    if (document.body.style.overflow === 'hidden' && !isExpanded) {
      document.body.style.overflow = ''
    }
    setIsSignIn(false)
    setIsSignUp(false)
  }
  const toggleSignIn = () => {
    if (document.body.style.overflow === '') {
      document.body.style.overflow = 'hidden'
    }
    setIsSignIn(true)
    setIsSignUp(false)
  }
  const toggleSignUp = () => {
    if (document.body.style.overflow === '') {
      document.body.style.overflow = 'hidden'
    }
    setIsSignUp(true)
    setIsSignIn(false)
  }

  const toggleNavbar = () => {
    setIsExpanded((pre) => {
      if (!pre) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
      return !isExpanded
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = ''
      }
      if (window.innerWidth < 768 && isExpanded) {
        document.body.style.overflow = 'hidden'
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isExpanded])

  return (
    <>
      <div className={`${className} md:px-14 px-2 py-4 w-full`}>
        <nav id="nav" className="border bg-white opacity-80 rounded-2xl">
          <div className="relative px-4 h-12 flex items-center justify-between">
            <div className="relative left-0 flex items-center md:hidden">
              <Button
                onClick={toggleNavbar}
                className="relative inline-flex items-center justify-center rounded-full p-2 cursor-pointer text-gray-400 hover:bg-slate-400 hover:text-white"
              >
                <BsList className="text-2xl" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="relative flex items-center justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="h-8 w-auto" src={logo} alt="React" />
                </div>
                <div className="flex space-x-2 md:ml-2">
                  {navigation.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      className="rounded-full transition ease-in-out px-3 py-2 text-sm font-medium hover:bg-emerald-100"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative right-0 flex items-center">
              <div>
                <Search />
              </div>
              <NavUser
                isAuthenticated={isAuthenticated}
                toggleSignIn={toggleSignIn}
                toggleSignUp={toggleSignUp}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Login --- Register */}
      <CSSTransition
        in={isSignIn || isSignUp}
        nodeRef={nodeRef}
        classNames="showSignIn"
        timeout={1000}
        unmountOnExit
      >
        <div ref={nodeRef} className="fixed w-full z-50">
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="overflow-auto flex items-center justify-center lg:w-2/5 md:w-1/2 sm:w-3/4 w-11/12">
              <Wrapper className="mb-0 px-10 py-5 rounded-sm">
                <div className={`flex ${isSignUp ? 'justify-between' : 'justify-end'}`}>
                  {isSignUp && (
                    <div
                      onClick={toggleSignIn}
                      className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-slate-400 hover:text-white"
                    >
                      <BsChevronLeft className="text-xl" />
                    </div>
                  )}
                  <div
                    onClick={handleCloseForm}
                    className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-slate-400 hover:text-white"
                  >
                    <BsX className="text-xl" />
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <Image width="70" height="70" className="py-2 fs-4" src={logo} alt="logo" />
                </div>
                {isSignIn && <Login toggleSignUp={toggleSignUp} />}
                {isSignUp && <Register toggleSignIn={toggleSignIn} />}
              </Wrapper>
            </div>
          </div>
        </div>
      </CSSTransition>

      <Offcanvas
        navigation={navigation}
        toggleNavbar={toggleNavbar}
        isExpanded={isExpanded}
        isAuthenticated={isAuthenticated}
        toggleSignIn={toggleSignIn}
      />
    </>
  )
}
