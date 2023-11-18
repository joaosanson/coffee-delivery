import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1080px;
  gap: 3.5rem;

  margin: 5.875rem 0;
`

export const BannerLeftSide = styled.div`
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: ${(props) => props.theme.baloo2.xl.weight};
    line-height: ${(props) => props.theme.baloo2.xl.lineHeight};
    font-size: 3rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  p {
    font-style: 'Roboto';
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['gray-800']};
    line-height: 130%;
  }

  margin-bottom: 4.125rem;
`

export const Slogans = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  .cart-item {
    gap: 0.75rem;

    display: flex;
    align-items: center;
    width: max-content;

    img {
      border: 0;
      background-color: ${(props) => props.theme.colors['yellow-700']};
      border-radius: 50px;
      padding: 0.5rem;
    }
  }
  .box-item {
    gap: 0.75rem;
    width: max-content;
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
    width: max-content;
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
    width: max-content;

    img {
      border: 0;
      background-color: ${(props) => props.theme.colors['purple-500']};
      border-radius: 50px;
      padding: 0.5rem;
    }
  }
`

export const BannerRightSide = styled.div`
  img {
    margin-right: -1rem;
  }
`
