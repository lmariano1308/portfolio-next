'use client'
import React from 'react'
import * as S from './styles'
import Drawer from '../Drawer'
import Logo from '@/assets/svg/logo'

const Menu = () => {
  return (
    <S.Container>
      {/* <Logo size={80} /> */}
      <Drawer />
    </S.Container>
  )
}

export default Menu
