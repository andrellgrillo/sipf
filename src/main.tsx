import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ClientsProvider } from './context/ClientContext'
import { ConctractProvider } from './context/ContractContext'
import { CDetailProvider } from './context/CDetailContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientsProvider>
        <ConctractProvider>
          <CDetailProvider>
            <App />
          </CDetailProvider>
        </ConctractProvider>
      </ClientsProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
)
