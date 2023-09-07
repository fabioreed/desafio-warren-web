import { Container, FiltersContainer } from "."
import Header from "../../components/Header"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Table from "../../components/Table"

const Dashboard = () => {
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
    </>
  )
}

export default Dashboard