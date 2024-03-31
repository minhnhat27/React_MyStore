import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'https://localhost:7002/api/account'

const login = async (data) =>
  await axios.post(API_URL + '/login', data).then((res) => {
    const expires = 2 * 60 * 60 * 1000
    const inTwoHour = new Date(new Date().getTime() + expires)
    Cookies.set('userToken', res.data, { expires: inTwoHour })
    return res
  })

const sendCode = async (data) => await axios.post(API_URL + '/sendCode', data)

const register = async (data) => await axios.post(API_URL + '/register', data)

const logout = () => Cookies.remove('userToken')

const getCurrentUser = () => Cookies.get('userToken')

const authService = {
  login,
  register,
  logout,
  sendCode,
  getCurrentUser,
}
export default authService
