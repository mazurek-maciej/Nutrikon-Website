import styled from 'styled-components'

const H1 = styled.h1`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  color: ${({ red, blue, white, theme }) =>
    red
      ? theme.colors.$R6
      : blue
      ? theme.colors.$B6
      : white
      ? theme.colors.$textBright
      : theme.colors.$G2};
  font-size: ${({ big, small }) => (big ? '3rem' : small ? '2rem' : '2.5rem')};
  margin-bottom: 1.5rem;
  letter-spacing: 0.05rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: ${({ big, small }) =>
      big ? '2rem' : small ? '1.2rem' : '1.5rem'};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: ${({ big, small }) =>
      big ? '2rem' : small ? '1.2rem' : '1.5rem'};
  }
  text-align: ${props => props.align};
`

export default H1
