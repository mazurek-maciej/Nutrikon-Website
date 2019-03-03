import styled from 'styled-components'

const BoxPositiveColor = styled.div`
  border-radius: 20px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(150, 210, 60, 0.1);
  padding: 20px;
  margin: ${({ mT }) => (mT ? '24px' : '0')}
    ${({ mT }) => (mT ? '0.75rem' : '0')};
`

export default BoxPositiveColor
