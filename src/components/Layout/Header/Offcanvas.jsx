import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'

export default function Offcanvas({
  navigation,
  toggleNavbar,
  isExpanded,
  isAuthenticated,
  toggleSignIn,
}) {
  return (
    <div
      className={`${
        isExpanded ? '-translate-x-0' : '-translate-x-full'
      } md:hidden duration-500 fixed top-0 left-0 w-screen z-10`}
    >
      <div className="sm:w-1/2 w-4/5 bg-white shadow-lg h-screen">
        <div className="flex justify-end">
          <span
            onClick={toggleNavbar}
            className="rounded-full cursor-pointer text-gray-400 hover:bg-slate-400 hover:text-white"
          >
            <BsX className="text-2xl" />
          </span>
        </div>
        <div>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {!isAuthenticated && (
              <Button
                onClick={toggleSignIn}
                className="hover:bg-emerald-200 w-full text-start rounded-md block transition ease-in-out px-3 py-2 text-base font-medium"
              >
                Sign In
              </Button>
            )}
            {navigation.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`${
                  item.current
                    ? 'bg-emerald-500 text-white'
                    : 'hover:bg-emerald-200'
                } rounded-md block transition ease-in-out px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
