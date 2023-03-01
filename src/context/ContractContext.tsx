import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IContractInput {
  clientId: string
  modality: string
  nModality: string
  process: string
  contract: string
  index: string
  object: string
  description: string
  emails: string
}

interface IContract {
  id: string
  clientId: string
  modality: string
  nModality: string
  process: string
  contract: string
  index: string
  object: string
  description: string
  emails: string
  status: boolean
}

interface IContractContext {
  contracts: IContract[]
  readContracts: () => Promise<void>
  readClientContracts: (clientId: string) => Promise<void>
  createContracts: (data: IContractInput) => Promise<void>
}

export const ContractContext = createContext({} as IContractContext)

interface IContractProvider {
  children: ReactNode
}

export function ConctractProvider({ children }: IContractProvider) {
  const [contracts, setContracts] = useState<IContract[]>([])

  const readContracts = useCallback(async () => {
    const response = await api.get('/contracts')
    setContracts(response.data)
  }, [])

  const createContracts = useCallback(async (data: IContractInput) => {
    const {
      clientId,
      modality,
      nModality,
      process,
      contract,
      index,
      object,
      description,
      emails,
    } = data
    console.log(data)
    const response = await api.post(`/contracts/${clientId}`, {
      modality,
      nModality,
      process,
      contract,
      index,
      object,
      description,
      emails,
    })

    setContracts((state) => [...state, response.data])
  }, [])

  const readClientContracts = useCallback(async (clientId: string) => {
    // console.log(clientId)
    const response = await api.get(`/contracts/${clientId}`)
    setContracts(response.data)
  }, [])

  useEffect(() => {
    readContracts()
  }, [readContracts])

  return (
    <ContractContext.Provider
      value={{ contracts, readContracts, createContracts, readClientContracts }}
    >
      {children}
    </ContractContext.Provider>
  )
}
