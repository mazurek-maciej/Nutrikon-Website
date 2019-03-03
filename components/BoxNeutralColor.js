import styled from 'styled-components'

const BoxNeutralColor = styled.div`
  background-color: rgba(79,122,193,0.05);
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.1);
  border-radius: 20px;
  padding: 20px;
  margin: ${({ mT }) => (mT ? '24px' : '0')} ${({ mT }) =>
  mT ? '0.75rem' : '0'};
  /* margin-bottom: ${({ mT }) => (mT ? '24px' : '0')}; */
`

export default BoxNeutralColor
