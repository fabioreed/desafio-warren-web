import { useContext } from "react"
import { Column, TableMainContainer } from "./style"
import { DashContext } from "../../providers/DashContext"

const Table = () => {
  const { transactionss, filteredInput, search } = useContext(DashContext)

  return (
    <TableMainContainer>
      <Column>
        <h4>Título</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}>{transaction.title}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}>{transaction.title}</span>
        ))}
      </Column>

      <Column>
        <h4>Descrição</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}>{transaction.description}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}>{transaction.description}</span>
          ))}
      </Column>

      <Column>
        <h4>Status</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}>{transaction.status}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}>{transaction.status}</span>
          ))}
      </Column>

      <Column>
        <h4>Valor</h4>
        {search.length > 0 ?
          filteredInput.map((transaction) => (
            <span key={transaction.id}>{transaction.amount}</span>
          ))
          : transactionss.map((transaction) => (
            <span key={transaction.id}>{transaction.amount}</span>
          ))}
      </Column>
    </TableMainContainer>
  )
}

export default Table