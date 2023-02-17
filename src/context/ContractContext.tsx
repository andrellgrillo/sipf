import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IContractContext {
  id: string
  clientId: string
  modality: string
  nmodality: string
  process: string
  contract: string
  index: string
  object: string
  description: string
  emails: string
  status: boolean
}

export const ContractContext = createContext({} as any)

interface IContractProvider {
  children: ReactNode
}

export function ConctractProvider({ children }: IContractProvider) {
  const [contracts, setContracts] = useState<IContractContext[]>([])

  const readContracts = useCallback(async () => {
    const response = await api.get('/contracts')
    setContracts(response.data)
  }, [])

  useEffect(() => {
    readContracts()
  }, [readContracts])

  return (
    <ContractContext.Provider value={{ readContracts }}>
      {children}
    </ContractContext.Provider>
  )
}
