import Button from '../UI/Button'
import Input from '../UI/Input'
import InsideLoading from '../Loading/InsideLoading'

import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import authService from '../../services/authService'

export default function Register({ toggleSignIn }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const handleSubmitRegister = () => {
    setLoading(true)

    authService
      .register(getValues())
      .then((res) => {
        setLoading(false)
        toggleSignIn()
        localStorage.setItem('register', true)
      })
      .catch(() => {
        setLoading(false)
        console.log('register error')
      })
  }

  return (
    <>
      {loading && <InsideLoading />}
      <p className="text-center font-bold text-xl">Sign Up React Account</p>
      <form method="POST" onSubmit={handleSubmit(handleSubmitRegister)}>
        <div className="my-3">
          <Input
            type="text"
            name="name"
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Your Name"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          <span className="text-red-500">{errors.name && errors.name.message}</span>
        </div>
        <div className="my-3">
          <Input
            type="email"
            name="email"
            className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
            placeholder="Email"
            id="email"
            {...register('email', { required: 'Email is required' })}
          />
          <span className="text-red-500">{errors.email && errors.email.message}</span>
        </div>
        <div className="my-3">
          <div className="flex">
            <Input
              type={showPassword ? 'text' : 'password'}
              className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
              placeholder="Password"
              name="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
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
          <span className="text-red-500">{errors.password && errors.password.message}</span>
        </div>
        <div className="my-3">
          <div className="flex">
            <Input
              type="number"
              name="verification"
              className="w-full p-2 border-2 rounded-md focus:outline-blue-500"
              placeholder="Verify Code"
              id="verification"
              {...register('verifyCode', { required: 'Verify code is required' })}
            />
            <div className="flex justify-around items-center cursor-pointer">
              <Button
                type="button"
                className="absolute rounded-md py-2 px-3 -ml-16 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
              >
                Send
              </Button>
            </div>
          </div>
          <span className="text-red-500">{errors.verifyCode && errors.verifyCode.message}</span>
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
