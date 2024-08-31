import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DLProvider } from './components/DarkLightContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* importing darklightProvider */}
    <DLProvider>
      <App />
    </DLProvider>
  </StrictMode>,
)
