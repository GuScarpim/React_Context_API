import React from 'react'
import * as S from './styles/App'

import Card from './components/Card'
import Custom from './components/Custom';

function App() {
  return (
    <S.Container>
      <Custom />
      <Card />
    </S.Container>
  );
}

export default App
