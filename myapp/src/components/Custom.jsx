import React, { useContext, useRef } from 'react'
import * as S from './styles/custom'

import ContextColors from '../context/template/components/colors'

export default function Custom() {
  const { setState: setGlobalState } = useContext(ContextColors)
  const { state } = useContext(ContextColors);

  const colorBackAvatar = useRef(state.colorBackAvatar)
  const colorTitle = useRef(state.colorTitle)
  const colorSubTitle = useRef(state.colorSubTitle)
  const colorCard = useRef(state.colorSubTitle)

  const handleChangeColorBackCard = (e) => {
    setTimeout(() => {
      setGlobalState({ ...state, colorCard: e.target.value })
      localStorage.setItem('colorCard', state.colorCard)
    }, 300)
  }

  const handleChangeColorBackAvatar = (e) => {
    setTimeout(() => {
      setGlobalState({ ...state, colorBackAvatar: e.target.value })
      localStorage.setItem('colorBackAvatar', state.colorBackAvatar)
    }, 300)
  }

  const handleChangeColorTitle = (e) => {
    setTimeout(() => {
    setGlobalState({ ...state, colorTitle: e.target.value })
      localStorage.setItem('colorTitle', state.colorTitle)
    }, 300)
  }

  const handleChangeColorSubTitle = (e) => {
    setTimeout(() => {
      setGlobalState({ ...state, colorSubTitle: e.target.value })
      localStorage.setItem('colorSubTitle', state.colorSubTitle)
    }, 300)

  }

  return (
    <S.Container>
      <S.H1>Settings</S.H1>

      <S.ContentColor>
        <input ref={colorCard} defaultValue={state.colorCard}
          type={'color'} onChange={(e) => handleChangeColorBackCard(e)} />
        <S.Label>Background card</S.Label>
      </S.ContentColor>

      <S.ContentColor>
        <input ref={colorBackAvatar} defaultValue={state.colorBackAvatar}
          type={'color'} onChange={(e) => handleChangeColorBackAvatar(e)} />
        <S.Label>Background avatar</S.Label>
      </S.ContentColor>

      <S.ContentColor>
        <input ref={colorTitle} defaultValue={state.colorTitle}
          type={'color'} onChange={(e) => handleChangeColorTitle(e)} />
        <S.Label>Title</S.Label>
      </S.ContentColor>

      <S.ContentColor>
        <input ref={colorSubTitle} defaultValue={state.colorSubTitle}
          type={'color'} onChange={(e) => handleChangeColorSubTitle(e)} />
        <S.Label>SubTitle</S.Label>
      </S.ContentColor>
    </S.Container>
  )
}