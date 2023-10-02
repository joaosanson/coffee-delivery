import { HeaderContainer, HeaderInfo, HeaderLogo } from './styles'
import headerLogo from '../../assets/HeaderLogo.svg'
import headerLocation from '../../assets/HeaderLocation.svg'
import headerCart from '../../assets/HeaderCart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogo} />

      <HeaderInfo>
        <div className="location">
          <img src={headerLocation} alt="" /> Porto Alegre, RS
        </div>
        <div className="cart">
          <img src={headerCart} alt="" />
        </div>
      </HeaderInfo>
    </HeaderContainer>
  )
}
