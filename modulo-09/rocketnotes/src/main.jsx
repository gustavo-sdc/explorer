import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GLobalStyles from './styles/global'

import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GLobalStyles/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
