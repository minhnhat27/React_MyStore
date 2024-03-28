import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import Image from '../../UI/Image'
import Wrapper from '../../Wrapper'
import Tippy from '@tippyjs/react/headless'
import { BsBell, BsCart } from 'react-icons/bs'

export default function NavUser({
  isAuthenticated,
  toggleSignIn,
  toggleSignUp,
}) {
  return (
    <>
      {isAuthenticated ? (
        <div className="flex justify-between">
          <Button
            type="button"
            className="rounded-full bg-green-200 p-1 text-gray-500 ring-1 ring-blue-300 ms-2"
          >
            <BsBell className="p-1 text-2xl" />
          </Button>
          <Link
            to="/cart"
            className="rounded-full bg-green-200 p-1 text-gray-500 ring-1 ring-blue-300 mx-2"
          >
            <BsCart className="p-1 text-2xl" />
          </Link>
          <Tippy
            interactive
            trigger="click"
            placement="top-end"
            render={(attrs) => (
              <div className="w-48 z-10" tabIndex="-1" {...attrs}>
                <Wrapper className="p-1">
                  <Link
                    className="block rounded-md p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    className="block rounded-md p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <Link
                    className="block rounded-md p-2 text-sm text-gray-700 hover:bg-slate-300"
                    role="menuitem"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </Link>
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
