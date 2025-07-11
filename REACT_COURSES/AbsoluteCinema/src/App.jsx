import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import MoviePage from "./pages/MoviePage/MoviePage"
import TestPage from "./pages/TestPage/TestPage"
import SingInPage from "./pages/SigninPage/SingInPage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie/:id' element={<MoviePage/>}/>
        <Route path='/test' element={<TestPage/>}/>
        <Route path='/sign-in' element={<SingInPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
