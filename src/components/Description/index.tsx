import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
}

const Description = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>
}

export default Description
