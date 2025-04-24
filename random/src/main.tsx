import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GenesisProvider } from '@gobolt/genesis'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GenesisProvider>
    <App />
    </GenesisProvider>
  </StrictMode>,
)
