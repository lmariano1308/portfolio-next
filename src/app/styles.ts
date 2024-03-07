import { colors } from '@/utils/variables'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colors.background};
  color: white;
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100dvh;
`
export const Content = styled.div`
  flex: 1;
  padding: 4rem 1.25rem;
`
