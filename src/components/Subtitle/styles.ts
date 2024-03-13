import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.p)`
  color: ${(props) => props.theme.fontSecondary};
  font-weight: 300;
  font-family: var(--font-montserrat);
  font-size: clamp(1.25rem, 5vw, 1.5rem);
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 2;
`
