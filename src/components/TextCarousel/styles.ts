import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.p)`
  color: ${(props) => props.theme.secondary};
  font-weight: 600;
  font-family: inherit;
  font-size: 1.5rem;
  line-height: 2;
`
