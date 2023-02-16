import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Client } from './pages/Client'
import { CadCliente } from './pages/CadCliente'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Client />} />
        <Route path="/cadcli" element={<CadCliente />} />
      </Route>
    </Routes>
  )
}
