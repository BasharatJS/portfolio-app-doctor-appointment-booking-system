'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set default theme to light and check for saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const initialTheme = savedTheme || 'light' // Default to light theme

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    setIsLoaded(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!isLoaded) {
    return <div className="loading-theme">Loading...</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
