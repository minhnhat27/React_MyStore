import Button from '../../UI/Button'
import Image from '../../UI/Image'
import Wrapper from '../../Wrapper'
import { useAuth } from '../../../App'

import Tippy from '@tippyjs/react/headless'
import { NavLink } from 'react-router-dom'
import { BsBell, BsCart } from 'react-icons/bs'
import authActions from '../../../services/authAction'
import authService from '../../../services/authService'

export default function NavUser({ isAuthenticated, toggleSignIn, toggleSignUp }) {
  const { dispatch } = useAuth()
  const handleLogout = () => {
    dispatch(authActions.LOGOUT)
    authService.logout()
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="flex justify-between cart">
          <Button
            type="button"
            className="rounded-full bg-white p-1 text-gray-500 ring-1 ring-blue-300 ms-2"
          >
            <BsBell className="p-1 text-2xl" />
          </Button>
          <NavLink
            to="/cart"
            className="rounded-full bg-white p-1 text-gray-500 ring-1 ring-blue-300 mx-2"
          >
            <BsCart className="p-1 text-2xl" />
          </NavLink>
          <Tippy
            interactive
            trigger="click"
            placement="top-end"
            render={(attrs) => (
              <div className="w-48 z-10" tabIndex="-1" {...attrs}>
                <Wrapper className="p-1 rounded-sm bg-white">
                  <NavLink
                    to="/profile"
                    className="block rounded-sm p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className="block rounded-sm p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Settings
                  </NavLink>
                  <Button
                    className="block rounded-sm p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-2"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </Wrapper>
              </div>
            )}
          >
            <div className="flex-shrink-0">
              <Button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1"
              >
                <Image
                  className="w-8 rounded-full"
                  src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
                  alt=""
                />
              </Button>
            </div>
          </Tippy>
        </div>
      ) : (
        <>
          <Button
            onClick={toggleSignIn}
            className="flex-shrink-0 rounded-2xl px-4 py-2 ml-2 text-sm font-semibold hidden lg:block"
          >
            Sign In
          </Button>
          <Button
            onClick={toggleSignUp}
            className="flex-shrink-0 block rounded-2xl ml-2 px-2 py-2 text-sm bg-emerald-500 text-white font-semibold"
          >
            Sign Up
          </Button>
        </>
      )}
    </>
  )
}
