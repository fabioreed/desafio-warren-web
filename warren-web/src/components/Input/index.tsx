import { useContext, useState } from 'react'
import { DashContext } from "../../providers/DashContext"
import { InputContainer } from "./style"

const Input = () => {
  const { setSearch } = useContext(DashContext)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: any) => {
    const value = e.target.value
    setInputValue(value)
    setSearch(value)
  }

  const handleClearInput = () => {
    setInputValue('')
    setSearch('')
  }

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Pesquise pelo título"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && <span onClick={handleClearInput}>&times;</span>}
    </InputContainer>
  )
}

export default Input