import { colors } from '@/utils/variables'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.aside)`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 18rem;

  justify-content: center;
  align-items: center;
  color: white;
  gap: 30px;
`

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
`
export const Button = styled(motion.button)`
  all: unset;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`

export const ButtonIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`

export const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

export const OverflowHidden = styled(motion.div)`
  overflow: hidden;
  width: 80%;
  padding: 10px;
  border-bottom: 2px solid #fff;
`
