import React from 'react'
import Header from './components/Menu/Header'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/Login/LoginPage'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App