import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.aside)`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 18rem;
  color: white;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
`
export const Button = styled(motion.button)`
  all: unset;
  z-index: 3;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  height: fit-content;
  aspect-ratio: 1;
`

export const ButtonIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`

export const Label = styled(motion.div)`
  font-size: 1.2rem;
  color: #b4b4b4;
  overflow: hidden;
`

export const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  gap: 10px;
  color: #b4b4b4;
`

export const OverflowHidden = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  padding: 10px;
`
