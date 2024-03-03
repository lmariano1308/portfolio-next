'use client'
import React from 'react'
import * as S from './styles'
import Drawer from '../Drawer'
import Logo from '../Logo'

const Menu = () => {
  return (
    <S.Container>
      <Logo />
      <Drawer />
    </S.Container>
  )
}

export default Menu
