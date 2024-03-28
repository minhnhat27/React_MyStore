import Button from '../UI/Button'
import Input from '../UI/Input'

import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register({ toggleSignIn }) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <p className="text-center font-bold text-xl">Sign Up React Account</p>
      <form method="POST">
        <div className="my-3">
          <Input
            type="text"
            name="name"
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Your Name"
            id="name"
          />
        </div>
        <div className="my-3">
          <Input
            type="email"
            name="email"
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="my-3 flex">
          <Input
            type={showPassword ? 'text' : 'password'}
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Password"
            name="password"
            id="password"
          />
          <div
            onClick={handleShowPassword}
            className="flex justify-around items-center cursor-pointer"
          >
            {showPassword ? (
              <BsEyeSlash className="absolute mr-10" size={20} />
            ) : (
              <BsEye className="absolute mr-10" size={20} />
            )}
          </div>
        </div>
        <div className="my-3 flex">
          <Input
            type="number"
            name="verification"
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Verification"
            id="verification"
          />
          <div className="flex justify-around items-center cursor-pointer">
            <Button
              type="button"
              className="absolute rounded-md py-2 px-3 -ml-16 bg-emerald-500 text-white font-semibold"
            >
              Send
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full py-2 fs-4 mb-4 rounded-md bg-gradient-to-r from-emerald-100 to-sky-300 text-slate-800 font-semibold"
        >
          Register
        </Button>
        <div className="flex items-center justify-center">
          Already have an account?
          <Link onClick={toggleSignIn} className="mx-1 text-emerald-700">
            Login
          </Link>
        </div>
      </form>
    </>
  )
}
