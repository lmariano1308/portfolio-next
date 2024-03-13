'use client'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: red;
  font-family: var(--font-montserrat);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100dvh;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  padding: 105px 1.25rem 0;
`
export const TopContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: calc(100dvh - 8rem);
`
export const ProfileImage = styled(Image)`
  border-radius: 50%;
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
