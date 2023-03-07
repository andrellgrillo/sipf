import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { ContractContext } from './ContractContext'

interface ICDetail {
  id: string
  contractId: string
  type: string
  dateIn: Date
  dateOut: Date
  documentDate: Date
  annualValue: number
  monthlyValue: number
  act: string
  status?: boolean
}

interface ICDetailInput {
  contractId: string
  type: string
  dateIn: Date
  dateOut: Date
  documentDate: Date
  annualValue: number
  monthlyValue: number
  act: string
}

interface ICDetailContext {
  cDetails: ICDetail[]
  readCDetails: () => Promise<void>
  getCDetails: (contractId: string) => Promise<void>
  createCDetails: (data: ICDetailInput) => Promise<void>
}

export const CDetailContext = createContext({} as ICDetailContext)

interface ICDetailProvider {
  children: ReactNode
}

export function CDetailProvider({ children }: ICDetailProvider) {
  const [cDetails, setCDetails] = useState<ICDetail[]>([])

  const readCDetails = useCallback(async () => {
    const response = await api.get('/details/')
    setCDetails(response.data)
  }, [])

  const createCDetails = useCallback(async (data: ICDetailInput) => {
    const {
      contractId,
      type,
      dateIn,
      dateOut,
      documentDate,
      annualValue,
      monthlyValue,
      act,
    } = data
    console.log(data)
    const response = await api.post(`/details/contract/${contractId}`, {
      type,
      dateIn,
      dateOut,
      documentDate,
      annualValue,
      monthlyValue,
      act,
    })
    setCDetails((state) => [...state, response.data])
  }, [])

  const getCDetails = useCallback(async (contractId: string) => {
    const response = await api.get(`/details/contract/${contractId}`)
    setCDetails(response.data)
  }, [])

  useEffect(() => {
    readCDetails()
  }, [readCDetails])

  return (
    <CDetailContext.Provider
      value={{ cDetails, readCDetails, createCDetails, getCDetails }}
    >
      {children}
    </CDetailContext.Provider>
  )
}
