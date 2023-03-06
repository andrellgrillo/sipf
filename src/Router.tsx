import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Client } from './pages/Client'
import { ClientContracts } from './pages/ClientContracts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Client />} />
        <Route path="/client/contracts/:id" element={<ClientContracts />} />
        <Route
          path="/contracts/:nome/:clientId"
          element={<ClientContracts />}
        />
      </Route>
    </Routes>
  )
}
