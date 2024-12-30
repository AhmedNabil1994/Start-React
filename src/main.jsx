import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
