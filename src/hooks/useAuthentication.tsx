import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { setAuthToken } from '../api/api'

interface AuthenticationContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const AuthenticationContext = createContext<AuthenticationContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
})

export const useAuthentication = () => useContext(AuthenticationContext)

export const AuthenticationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    console.log('Authentication')
    const token = localStorage.getItem('jwtToken')
    if (token) {
      setAuthToken(token)
      setIsAuthenticated(true)
      console.log('Authentication Success')
    }
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
