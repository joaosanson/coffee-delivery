import { Intro } from './components/Intro'
import { Product } from './components/Product'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <h2>Nossos cafés</h2>
      <Product />
    </HomeContainer>
  )
}
