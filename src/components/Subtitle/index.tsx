'use client'
import React from 'react'
import { Container } from './styles'
import { subtitleVariants } from '@/utils/animations/text'

interface Props {
  children: React.ReactNode
}

const Subtitle = ({ children }: Props) => {
  return (
    <Container
      variants={subtitleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Container>
  )
}

export default Subtitle
