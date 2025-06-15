import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import MoviePage from "./pages/MoviePage/MoviePage"
import TestPage from "./pages/TestPage/TestPage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie' element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
