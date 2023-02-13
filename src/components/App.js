import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import Container from "./Container"


const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Container/>
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App



