import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  )
}

export default App
