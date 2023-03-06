import React, {
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
  bidding: string
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
  bidding: string
  process: string
  contract: string
  index: string
  object: string
  description: string
  emails: string
  // status?: boolean
}

interface IContractContext {
  contracts: IContract[]
  readContracts: () => Promise<void>
  readClientContracts: (clientId: string) => Promise<void>
  createContracts: (data: IContractInput) => Promise<void>
  updateContract: (data: IContract) => Promise<void>
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
      bidding,
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
      bidding,
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

  const updateContract = useCallback(
    async (data: IContract) => {
      const {
        id,
        clientId,
        contract,
        description,
        emails,
        index,
        modality,
        nModality,
        object,
        process,
        bidding,
      } = data
      await api.put(`/contracts/${id}`, {
        clientId,
        contract,
        description,
        emails,
        index,
        modality,
        nModality,
        object,
        process,
        bidding,
      })
      const nextContracts = contracts.map((cont) => {
        if (cont.id === id) {
          return {
            ...cont,
            clientId,
            contract,
            description,
            emails,
            index,
            modality,
            nModality,
            object,
            process,
            bidding,
          }
        } else {
          return cont
        }
      })
      setContracts(nextContracts)
    },
    [contracts],
  )

  useEffect(() => {
    readContracts()
  }, [readContracts])

  return (
    <ContractContext.Provider
      value={{
        contracts,
        readContracts,
        createContracts,
        readClientContracts,
        updateContract,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}
