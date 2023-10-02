import {
  BannerContainer,
  BannerLeftSide,
  BannerRightSide,
  HomeContainer,
} from './styles'

import bannerMain from '../../assets/BannerMain.svg'
import cartItem from '../../assets/CartItem.svg'
import boxItem from '../../assets/BoxItem.svg'
import clockItem from '../../assets/ClockItem.svg'
import coffeeItem from '../../assets/CoffeeItem.svg'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerLeftSide>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="slogans">
            <div className="cart-item">
              <img src={cartItem} alt="" />
              <p>Compra simples e segura</p>
            </div>
            <div className="box-item">
              <img src={boxItem} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="clock-item">
              <img src={clockItem} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="coffee-item">
              <img src={coffeeItem} alt="" />
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </BannerLeftSide>
        <BannerRightSide>
          <img src={bannerMain} alt="" />
        </BannerRightSide>
      </BannerContainer>
    </HomeContainer>
  )
}
