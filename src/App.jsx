import './App.css'
import BoardContextProvider from './context/BoardContextProvider';
import Home from './pages/Home'
import Posts from './pages/Posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (

    <BrowserRouter>
      <BoardContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Posts/:id" element={<Posts />} />
        </Routes>
      </BoardContextProvider>
    </BrowserRouter>

  )
}

export default App