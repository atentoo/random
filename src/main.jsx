import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { GenesisProvider } from '@gobolt/genesis'

createRoot(document.getElementById('root')).render(
  <GenesisProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </GenesisProvider>
)
