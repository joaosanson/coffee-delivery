import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BannerLeftSide = styled.div`
  width: 50%;

  .slogans {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;

    .cart-item {
      gap: 0.75rem;

      display: flex;
      align-items: center;

      img {
        border: 0;
        background-color: ${(props) => props.theme.colors['yellow-700']};
        border-radius: 50px;
        padding: 0.5rem;
      }
    }
    .box-item {
      gap: 0.75rem;

      display: flex;
      align-items: center;
      img {
        border: 0;
        background-color: ${(props) => props.theme.colors['gray-700']};
        border-radius: 50px;
        padding: 0.5rem;
      }
    }
    .clock-item {
      gap: 0.75rem;

      display: flex;
      align-items: center;

      img {
        border: 0;
        background-color: ${(props) => props.theme.colors['yellow-500']};
        border-radius: 50px;
        padding: 0.5rem;
      }
    }
    .coffee-item {
      gap: 0.75rem;

      display: flex;
      align-items: center;

      img {
        border: 0;
        background-color: ${(props) => props.theme.colors['purple-500']};
        border-radius: 50px;
        padding: 0.5rem;
      }
    }

    > * {
      display: flex;
      flex-direction: row;
    }
  }
`

export const BannerRightSide = styled.div`
  width: 50%;
`
