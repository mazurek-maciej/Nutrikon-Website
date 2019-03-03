import styled from 'styled-components'

const BackgroundGradient = styled.div`
  background: ${({ rB }) =>
    rB
      ? 'linear-gradient(180deg, #ddf5ff 40%,#f9f9f9 80%)'
      : 'linear-gradient(180deg, #f9f9f9 40%,#ddf5ff 80%)'};
  z-index: -1;
  li {
    list-style-type: none;
  }
  ion-icon {
    margin-right: 5px;
  }
`

export default BackgroundGradient
