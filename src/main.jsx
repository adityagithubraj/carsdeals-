import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CarContextProvider } from './context/CarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarContextProvider>
      <App />
    </CarContextProvider>
  </React.StrictMode>,
)
