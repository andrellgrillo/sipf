import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ClientsProvider } from './context/ClientContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientsProvider>
        <App />
      </ClientsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
