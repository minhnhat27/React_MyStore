import { reducer, initialState } from './services/authReducer'
import { GenerateRoutes, privateRoutes, publicRoutes } from './services/routes'
import NotFound from './components/NotFound'

import { createContext, useContext, useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          {/* <ReactNotifications /> */}
          <Routes>
            {GenerateRoutes(publicRoutes)}
            {state.isAuthenticated && GenerateRoutes(privateRoutes)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default App
