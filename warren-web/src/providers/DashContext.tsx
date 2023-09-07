import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import { transactions } from '../transactions'

interface IDashContext {
  transactionss: ITransaction[]
  setTransactionss: React.Dispatch<React.SetStateAction<ITransaction[]>>
  getTransactionsById: (id: string) => Promise<void>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  filteredInput: ITransaction[]
  status: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  filteredStatus: ITransaction[]
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedTransaction: ITransaction | null
  setSelectedTransaction: React.Dispatch<React.SetStateAction<ITransaction | null>>
}

interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface ITransaction {
  id: string
  title: string
  description: string
  status: string
  amount: number
  date: string
  from: string
  to: string
}

export const DashContext = createContext({} as IDashContext)

export const DashProvider = ({ children }: IDefaultProviderProps) => {
  const [transactionss, setTransactionss] = useState<ITransaction[]>([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [modal, setModal] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | null>(null)

  const filteredInput = search.length > 0
    ? transactionss.filter(transaction => transaction.title.toLowerCase().includes(search.toLowerCase())) : []
  
  const filteredStatus = status
    ? transactionss.filter(transaction => transaction.status === status) : transactions
  
  useEffect(() => {
    const getTransactions = async () => {
      try {
        // const response = await api.get(`/transactions`)
        const response = transactions

        let filteredTransactions = response;

        if (status) {
          filteredTransactions = filteredTransactions.filter(transaction => transaction.status === status);
        }

        if (search) {
          filteredTransactions = filteredTransactions.filter(transaction => transaction.title.toLowerCase().includes(search.toLowerCase()));
        }

        setTransactionss(filteredTransactions)
      } catch (error) {
        console.log(error)
      }
    } 
    getTransactions()
  }, [status, search])

  const getTransactionsById = async (id: string) => {
    try {
      const response = await api.get(`/transactions/${id}`)

      setTransactionss(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DashContext.Provider value={{
      transactionss,
      setTransactionss,
      getTransactionsById,
      search,
      setSearch,
      filteredInput,
      status,
      setStatus,
      filteredStatus,
      modal,
      setModal,
      selectedTransaction,
      setSelectedTransaction
    }}>
      { children }
    </DashContext.Provider>
  )
}