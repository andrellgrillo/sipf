import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Client } from './pages/Client'
import { ClientContracts } from './pages/ClientContracts'
import { Teste } from './pages/Teste'

export function Router() {
  const id: any = ''
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Client />} />
        <Route
          path="/client/contracts/:clientID"
          loader={({ params }) => {
            console.log(params.clientID)
          }}
          element={<ClientContracts clientId={id} />}
        />
        <Route path="/teste" element={<Teste />} />
      </Route>
    </Routes>
  )
}
