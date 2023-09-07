import Dashboard from "./pages/Dashboard/dashboard"
import { DashProvider } from "./providers/DashContext"
import GlobalStyle from "./styles/globalStyles"
import Reset from "./styles/reset"

const App = () => {

  return (
    <>
      <DashProvider>
        <GlobalStyle />
        <Reset />
        <Dashboard />
      </DashProvider>
    </>
  )
}

export default App
