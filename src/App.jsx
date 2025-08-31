import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'


const App = () => {
  return (
    <>
    <div className='text-white '>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/agence' element={<Agence />} />
  <Route path='/project' element={<Project />} />
</Routes>
</div>
      </>
  )
}

export default App