import React from 'react'
import * as S from './styles/App'

import Card from './components/Card'
import Custom from './components/Custom';
import { AppContextProvider } from './context/provider'

function App() {
  return (
    <AppContextProvider>
      <S.Container>
        <Custom />
        <Card />
      </S.Container>
    </AppContextProvider>
  )
}

export default App
