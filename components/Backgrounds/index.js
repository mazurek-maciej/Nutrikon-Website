import styled from 'styled-components'

export const BackgroundGradient = styled.div`
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

export const BackgroundIndex = styled.div`
  background: ${({ rB }) =>
    rB
      ? 'linear-gradient(180deg, #f9f9f9 20%,#c4dce6 50%,#b4dff0 80%,#a5dcf2 100%)'
      : 'linear-gradient(180deg, #a5dcf2 20%, #b4dff0 50%, #c4dce6 60%, #f9f9f9 90%)'};
`

export const BoxNegativeColor = styled.div`
  border-radius: 20px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(140, 96, 246, 0.1);
  padding: 20px;
  margin: ${({ mT }) => (mT ? '24px' : '0')}
    ${({ mT }) => (mT ? '0.75rem' : '0')};
`

export const BoxNeutralColor = styled.div`
  background-color: rgba(79, 122, 193, 0.05);
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin: ${({ mT }) => (mT ? '24px' : '0')}
    ${({ mT }) => (mT ? '0.75rem' : '0')};
`

export const BoxPositiveColor = styled.div`
  border-radius: 20px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(150, 210, 60, 0.1);
  padding: 20px;
  margin: ${({ mT }) => (mT ? '24px' : '0')}
    ${({ mT }) => (mT ? '0.75rem' : '0')};
`
