import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'

import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Login({ toggleSignUp }) {
  const [showPassword, setShowPassword] = useState(false)
  const [regSuccess, setRegSuccess] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const reg = localStorage.getItem('register') ?? false
    if (reg) localStorage.removeItem('register')
    setRegSuccess(reg)
  }, [])

  return (
    <>
      <p className="text-center font-bold text-xl">Sign In To React</p>
      <form method="POST">
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
        {regSuccess && <span className="text-red-500 text-sm">Register Successfully</span>}
        <div className="flex items-center justify-between mb-4">
          <div>
            <Input type="checkbox" id="flexCheckChecked" />
            <label className="ml-1 select-none" htmlFor="flexCheckChecked">
              Remember
            </label>
          </div>
          <Link className="text-emerald-700">Forget password?</Link>
        </div>
        <Button
          type="submit"
          className="w-full py-2 fs-4 mb-4 rounded-md bg-gradient-to-r from-emerald-100 to-sky-300 text-slate-800 font-semibold"
        >
          Login
        </Button>
        <div className="flex items-center justify-center">
          <p className="mb-0">Don't have an account?</p>
          <Link onClick={toggleSignUp} className="mx-1 text-emerald-700">
            Create account
          </Link>
        </div>
      </form>
    </>
  )
}
