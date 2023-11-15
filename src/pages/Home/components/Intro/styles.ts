import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1080px;
  gap: 3.5rem;

  margin-top: 5.875rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: ${(props) => props.theme.baloo2.xl.weight};
    line-height: ${(props) => props.theme.baloo2.xl.lineHeight};
    font-size: 2.75rem;
  }
`

export const BannerLeftSide = styled.div`
  width: 50%;
`

export const Slogans = styled.div`
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
`

export const BannerRightSide = styled.div`
  img {
    margin-right: -1rem;
  }
`
