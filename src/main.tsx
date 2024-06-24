import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fonts/fonts.css'
import GlobalStyles from './styles/GlobalStyles.ts'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Analytics />
  </React.StrictMode>,
)
