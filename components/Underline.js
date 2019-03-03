import styled from 'styled-components'

const Underline = styled.div`
  content: '';
  display: block;
  width: ${({ short, long }) => (short ? '20vw' : long ? '50vw' : '30vw')};
  height: 2px;
  background-image: ${({ red, blue }) =>
    red
      ? 'linear-gradient(-90deg,#c1224f 0,#ff2e4c 5%,#ff2e4c 90%,#c1224f 100%)'
      : blue
      ? 'linear-gradient(-90deg,#004794 0,#005fc7 5%,#005fc7 90%,#004794 100%)'
      : null};
  opacity: 0.08;
  margin-bottom: 1rem;
`

export default Underline
