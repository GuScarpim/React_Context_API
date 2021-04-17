import React, { useContext } from 'react'
import * as S from './styles/card'

import ContextColors from '../context/template/components/colors'

import Imagem from '../assets/megamen.gif'

function App() {
  const { state } = useContext(ContextColors)

  return (
    <S.Card color={state.colorCard}>
      <S.ContentImage color={state.colorBackAvatar}>
        <S.Image src={Imagem} />
      </S.ContentImage>

      <S.Content>
        <S.Label color={state.colorTitle}>Lorem Ipsum</S.Label>
        <S.Subtitle color={state.colorSubTitle}>Ipsum Lorem</S.Subtitle>
      </S.Content>

    </S.Card>
  );
}

export default App
