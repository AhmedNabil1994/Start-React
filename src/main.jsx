import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// global css
import "./index.css"
// app component
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
