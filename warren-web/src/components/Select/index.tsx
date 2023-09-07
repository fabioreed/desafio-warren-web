import { useContext } from "react"
import { SelectContainer } from "./style"
import { DashContext } from "../../providers/DashContext"

const Select = () => {
  const { setStatus, status } = useContext(DashContext)

  const handleStatusChange = (e: any) => {
    setStatus(e.target.value)
  }

  return (
    <SelectContainer>
      <select name="status" id="" onChange={handleStatusChange} value={status}>
        <option value="">Status</option>
        <option value="Processando">Processando</option>
        <option value="Solicitada">Solicitada</option>
        <option value="Concluída">Concluída</option>
      </select>
    </SelectContainer>
  )
}

export default Select