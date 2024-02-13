import './App.css'
import Home from './components/home/Home'
import {Routes, Route} from "react-router-dom"
import SinglePage from './components/single_page/SinglePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/single/:id' element={<SinglePage/>}/>
    </Routes>
    </>
  )
}

export default App
