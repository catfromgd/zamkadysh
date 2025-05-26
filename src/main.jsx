import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Zamkadysh from './components/zamkadysh/Zamkadysh.jsx'

createRoot(document.getElementById('root')).render(
  <Zamkadysh />
)
