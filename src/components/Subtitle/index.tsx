'use client'
import React from 'react'
import { Container } from './styles'

interface Props {
  children: React.ReactNode
}

const Subtitle = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Subtitle
