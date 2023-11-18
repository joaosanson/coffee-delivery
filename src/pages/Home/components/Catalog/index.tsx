import { Product } from '../Product'
import { CatalogContainer } from './styles'

export function Catalog() {
  return (
    <CatalogContainer>
      <h1>Nossos cafés</h1>

      <Product />
    </CatalogContainer>
  )
}
