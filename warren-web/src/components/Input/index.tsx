import { useContext } from 'react'
import { DashContext } from "../../providers/DashContext"
import { InputContainer } from "./style"

const Input = () => {
  const {setSearch } = useContext(DashContext)

  return (
    <InputContainer>
      <input type="text" placeholder="Pesquise pelo título" onChange={e => setSearch(e.target.value)} />
    </InputContainer>
  )
}

export default Input