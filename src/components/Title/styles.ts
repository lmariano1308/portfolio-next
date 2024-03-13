'use client'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.h1)`
  font-size: 3rem;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: var(--font-esteban);
`
