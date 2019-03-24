import styled from 'styled-components'

const BackgroundIndex = styled.div`
  background: ${({ rB }) =>
    rB
      ? 'linear-gradient(180deg, #f9f9f9 20%,#c4dce6 50%,#b4dff0 80%,#a5dcf2 100%)'
      : 'linear-gradient(180deg, #a5dcf2 20%, #b4dff0 50%, #c4dce6 60%, #f9f9f9 90%)'};
`

export default BackgroundIndex
