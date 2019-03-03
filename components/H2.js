import styled from 'styled-components'

const H2 = styled.h2`
  display: flex;
  align-items: baseline;
  font-size: ${({ big, small }) =>
    big ? '2rem' : small ? '1.2rem' : '1.5rem'};
  color: ${({ red, blue, white, theme }) =>
    red
      ? theme.colors.$R6
      : blue
      ? theme.colors.$B6
      : white
      ? theme.colors.$textBright
      : theme.colors.$G3};
  font-weight: ${props => (props.news ? 600 : 400)};
  margin: ${({ fM }) => (fM ? '5px 0 5px 40px' : null)};
  margin-bottom: 8px;
  letter-spacing: 0.05rem;
  ion-icon {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.$B9};
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: ${({ big, promo }) =>
      big ? '1.2rem' : promo ? '1.4rem' : '1rem'};
    ion-icon {
      font-size: 16px;
    }
  }
`

export default H2
