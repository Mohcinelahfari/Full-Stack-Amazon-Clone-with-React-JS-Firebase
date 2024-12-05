import React, { useEffect } from 'react'
import Header from './components/Menu/Header'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/Login/LoginPage'
import { useAuth } from './context/GlobalSttate'
import * as actions from './context/ActionType' 
import { auth } from './firebase'
import HomePage from './components/pages/Home/HomePage'
import CheckoutPag from './components/pages/CheckOutPage/CheckoutPag'
function App() {
  const {dispatch} = useAuth()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type : actions.SET_USER,
          user : authUser
        })
      }else{
        dispatch({
          type : actions.SET_USER,
          user : null
        })
      }
    })
  },[])
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <HomePage />
        </>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/checkout' element={<>
          <Header />
          <CheckoutPag />
        </>} />
      </Routes>
    </div>
  )
}

export default App