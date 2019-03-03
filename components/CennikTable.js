import React from 'react'
import styled from 'styled-components'

const SelectedBlue = styled.tr`
  background-color: ${({ theme }) => theme.colors.$primaryBlue} !important;
`
const Th = styled.th`
  color: ${({ theme }) => theme.colors.$textBright} !important;
  border: 1px solid transparent !important;
  text-align: ${props => (props.center ? 'center' : 'left')} !important;
`
const Tr = styled.tr`
  :nth-child(even) {
    background-color: hsla(210, 30%, 100%, 0.7);
  }
  :nth-child(odd) {
    background-color: hsla(210, 30%, 95%, 1);
  }
`
const Td = styled.td`
  border: 0 !important;
  padding: 12px 10px !important;
  color: ${({ theme, blk }) =>
    blk ? `${theme.colors.$black}` : `${theme.colors.$textDark}`};
  text-align: ${props => (props.center ? 'right' : 'left')};
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 0.9rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
  }
`
const Table = styled.table`
  * > td {
    border: 0 !important;
    padding: 12px 10px !important;
  }
`

const CennikTable = ({ zabieg }) => (
  <table className="table is-hoverable is-bordered is-fullwidth">
    <tbody>
      <SelectedBlue>
        <Th>Zabieg</Th>
        <Th center>Cena</Th>
      </SelectedBlue>
      {zabieg.map((zabieg, index) => (
        <Tr key={index}>
          <Td blk>{zabieg.nazwa}</Td>
          <Td center>{zabieg.value}</Td>
        </Tr>
      ))}
    </tbody>
  </table>
)
export default CennikTable
