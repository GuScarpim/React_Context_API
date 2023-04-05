/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react'

export const userContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('Hello User!')

  const values = {
    user,
    setUser
  }

  return <userContext.Provider value={values}>{children}</userContext.Provider>
}
