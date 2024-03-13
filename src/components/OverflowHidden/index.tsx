import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children: ReactNode
}

const OverflowHidden = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default OverflowHidden
