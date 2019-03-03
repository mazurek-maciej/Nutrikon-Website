import styled from 'styled-components'
import { KeyboardArrowDown } from 'styled-icons/material'

const Scroll = styled(KeyboardArrowDown)`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: inline;
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.$secondaryBlue};
  }
`
export default Scroll
