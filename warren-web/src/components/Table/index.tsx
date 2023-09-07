import { useContext } from "react"
import { Column, TableMainContainer } from "./style"
import { DashContext, ITransaction } from "../../providers/DashContext"

const Table = () => {
  const { transactionss, filteredInput, search, setSelectedTransaction, setModal, modal } = useContext(DashContext)

  const showDetails = (transaction: ITransaction) => {
    setSelectedTransaction(transaction)

    setModal(!modal)
  }

  return (
    <TableMainContainer>
      <Column>
        <h4>Título</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}>{transaction.title}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.title}</span>
        ))}
      </Column>

      <Column>
        <h4>Descrição</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.description}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.description}</span>
          ))}
      </Column>

      <Column>
        <h4>Status</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.status}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.status}</span>
          ))}
      </Column>

      <Column>
        <h4>Valor</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.amount}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}
              onClick={() => {
                showDetails(transaction)
              }}
            >{transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          ))}
      </Column>
    </TableMainContainer>
  )
}

export default Table