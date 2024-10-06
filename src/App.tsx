import SignUpForm from "./pages/sign-up"
import SignIn from "./pages/sign-in"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <Routes>
      <Route path="" element={<SignUpForm/>}/>
      <Route path="signin" element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App
