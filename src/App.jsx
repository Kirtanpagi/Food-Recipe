import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react'
import './App.css'
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Info from './component/Info';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/:mealid' element={<Info  />} />

      </Routes>

    </>
  )
}

export default App
