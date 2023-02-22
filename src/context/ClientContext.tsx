import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IClient {
  id: string
  name: string
  shortName: string
  cnpj: string
  status?: boolean
  treatment: 'SR' | 'SRA' | 'DR' | 'DRA'
  resp: string
  prefix: string
}

interface IClientContracts {
  id: string
  name: string
  cnpj: string
  treatment: string
  shortName: string
  resp: string
  status: boolean
  prefix: string
  Contracts: {
    id: string
    clientId: string
    modality: string
    nModality: string
    process: string
    contract: string
    index: string
    object: string
    description: string
  }
}

interface ICreateClientInput {
  name: string
  cnpj: string
  treatment: 'SR' | 'SRA' | 'DR' | 'DRA'
  resp: string
  shortName: string
  prefix: string
}

interface IClientContext {
  clients: IClient[]
  readClients: () => Promise<void>
  clientContracts: IClientContracts[]
  readClientContracts: (clientId: string) => Promise<void>
  createClient: (data: ICreateClientInput) => Promise<void>
  pacthClientStatus: (clientId: string) => Promise<void>
  updateClient: (data: IClient) => Promise<void>
}

export const ClientContext = createContext({} as IClientContext)

interface IClientsProvider {
  children: ReactNode
}

export function ClientsProvider({ children }: IClientsProvider) {
  const [clients, setClients] = useState<IClient[]>([])
  const [clientContracts, setClientContracts] = useState<IClientContracts[]>([])

  const readClients = useCallback(async () => {
    const response = await api.get('/clients')

    setClients(response.data)
  }, [])

  const createClient = useCallback(async (data: ICreateClientInput) => {
    const { name, shortName, cnpj, treatment, resp, prefix } = data
    const response = await api.post('/clients', {
      name,
      shortName,
      cnpj,
      treatment,
      resp,
      prefix,
    })
    setClients((state) => [...state, response.data])
  }, [])

  const pacthClientStatus = useCallback(
    async (clientId: string) => {
      await api.patch(`/clients/${clientId}`)
      const nextClients = clients.map((client) => {
        if (client.id === clientId) {
          return {
            ...client,
            status: !client.status,
          }
        } else {
          return client
        }
      })
      setClients(nextClients)
    },
    [clients],
  )

  const updateClient = useCallback(
    async (data: IClient) => {
      const { id, name, shortName, cnpj, treatment, resp, prefix } = data
      await api.put(`/clients/${id}`, {
        name,
        shortName,
        cnpj,
        treatment,
        resp,
        prefix,
      })
      const nextClients = clients.map((client) => {
        if (client.id === id) {
          return {
            ...client,
            name,
            shortName,
            cnpj,
            treatment,
            prefix,
          }
        } else {
          return client
        }
      })
      setClients(nextClients)
    },
    [clients],
  )

  const readClientContracts = useCallback(async (clientId: string) => {
    console.error(clientId)
    const response = await api.get(`/clients/${clientId}/contracts`)
    setClientContracts(response.data)
  }, [])

  useEffect(() => {
    readClients()
  }, [readClients])

  return (
    <ClientContext.Provider
      value={{
        clients,
        readClients,
        createClient,
        pacthClientStatus,
        updateClient,
        clientContracts,
        readClientContracts,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
