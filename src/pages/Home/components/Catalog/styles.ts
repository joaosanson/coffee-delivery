import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`
