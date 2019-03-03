import styled from 'styled-components'
import { ChevronRight } from 'styled-icons/feather'

const DoctorInfo = styled(ChevronRight)`
  color: ${({ theme }) => theme.colors.$secondaryBlue};
  width: 2rem;
  height: 2rem;
`
export default DoctorInfo
