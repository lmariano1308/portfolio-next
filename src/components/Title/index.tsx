import React from 'react'
import { Container } from './styles'
import { titleVariants } from '@/utils/animations/text'

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <Container
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Container>
  )
}

export default Title
