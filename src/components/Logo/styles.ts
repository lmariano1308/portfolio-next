import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 2rem;
  z-index: 0;
  width: fit-content;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45;
  aspect-ratio: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 5px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;
`

export const Title = styled.p`
  font-size: 1.2rem;
  color: #fff;
`

export const Subtitle = styled.p`
  color: #b4b4b4;
  font-size: 0.8rem;
  font-weight: 300;
`
