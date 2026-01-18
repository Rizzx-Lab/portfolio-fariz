// src/main.jsx - Untuk React 19
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/animations.css'

// Pastikan element dengan id 'root' ada di index.html
const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found')
}

const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)