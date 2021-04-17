import React from "react"

import { ColorDefaultContextProvider } from "./template/components/colors"

const GlobalContext = ({ children }) => {
  return (
    <>
      <ColorDefaultContextProvider>{children}</ColorDefaultContextProvider>
    </>
  )
}

export default GlobalContext