import React, { createContext, useContext, useReducer } from 'react'
import AppReducer, { initailState } from './AppReducer'

const GlobalContext = createContext()


function ContextProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initailState)
  return (
    <GlobalContext.Provider value={{
        basket : state.basket,
        user : state.user,
        dispatch : dispatch
    }}>
        {children}
    </GlobalContext.Provider>
    
  )
}

export default ContextProvider


export const AuthState = () => useContext(GlobalContext)