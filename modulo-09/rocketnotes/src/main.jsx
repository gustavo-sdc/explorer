import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GLobalStyles from './styles/global'

import { Details } from './pages/Details/'
import { Home } from './pages/Home'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GLobalStyles />
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
