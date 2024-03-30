import axios from 'axios'

const API_URL = 'https://localhost:7002/api/account'

const login = async (data) => await axios.post(API_URL + '/login', data)

const registerVerify = async (data) => await axios.post(API_URL + '/registerVerify', data)

const register = async (data) => await axios.post(API_URL + '/register', data)

const authService = {
  login,
  register,
  registerVerify,
}
export default authService
