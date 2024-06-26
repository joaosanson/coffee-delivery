import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  margin: 2rem auto;
`
export const HeaderLogo = styled.img``

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
`
export const LocationButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.675rem;
  gap: 0.25rem;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme.colors['purple-300']};
  color: ${(props) => props.theme.colors['purple-700']};
  cursor: pointer;
`

export const CartButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors['yellow-300']};
  padding: 0.7rem;
  border-radius: 6px;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`
