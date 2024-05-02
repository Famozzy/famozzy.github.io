import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/tailwind.css'

const element = document.getElementById('root') as HTMLDivElement

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
