import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1.25rem;
  height: 85px;
  position: fixed;
  top: -5px;
  width: 100%;
  opacity: 1;
  filter: blur(0.5px);
  -webkit-filter: blur(0.5px);
  z-index: 10;
`
