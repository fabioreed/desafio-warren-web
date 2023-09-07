import { useContext } from "react"
import { Container, FiltersContainer } from "."
import Header from "../../components/Header"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Table from "../../components/Table"
import { DashContext } from "../../providers/DashContext"
import Modal from "../../components/Modal"

const Dashboard = () => {
  const { modal } = useContext(DashContext)

  return (
    <>
      <Header />
      <Container>
        <FiltersContainer>
          <Input />
          <Select />
        </FiltersContainer>
        <Table />
      </Container>
      {modal && <Modal />}
    </>
  )
}

export default Dashboard