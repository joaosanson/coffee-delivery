import {
  CartButton,
  HeaderContainer,
  HeaderInfo,
  HeaderLogo,
  LocationButton,
} from './styles'
import headerLogo from '../../assets/HeaderLogo.svg'
import headerLocation from '../../assets/HeaderLocation.svg'
import headerCart from '../../assets/HeaderCart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogo} />

      <HeaderInfo>
        <LocationButton>
          <img src={headerLocation} alt="" /> Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <img src={headerCart} alt="" />
        </CartButton>
      </HeaderInfo>
    </HeaderContainer>
  )
}
