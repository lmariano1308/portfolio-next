import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <S.Border>
      <S.Container>{children}</S.Container>
    </S.Border>
  )
}

export default Card
