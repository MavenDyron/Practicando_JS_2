import { Routes, Route, Link, Navigate } from 'react-router-dom'

import Principal from "./Principal";

import Secundario from "./Secundario";

import './App.css'

function App() {


  return (
    <>
      <h1>Navegador</h1>
      <Link to="/">Pagina Principal</Link>
      <Link to="/secundario">Pagina Secundaria</Link>

      <div className='contenedor'>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/secundario' element={<Secundario />} />
        </Routes>
      </div>
    </>
  )
}

export default App
