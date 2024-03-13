'use client'
import styled from 'styled-components'

export const Border = styled.div`
  background: ${(props) => props.theme.primaryGradient};
  border-radius: 10px;
  padding: 2px;
`

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
`
