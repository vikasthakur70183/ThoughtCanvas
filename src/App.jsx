import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Posts' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App