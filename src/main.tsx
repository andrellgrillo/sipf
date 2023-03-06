import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ClientsProvider } from './context/ClientContext'
import { ConctractProvider } from './context/ContractContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientsProvider>
        <ConctractProvider>
          <App />
        </ConctractProvider>
      </ClientsProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
)
