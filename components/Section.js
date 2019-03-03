import React from 'react'
import styled from 'styled-components'

const SectionWraper = styled.section`
  padding: 3rem 1.5rem;
`

const Section = ({ children }) => <SectionWraper>{children}</SectionWraper>

export default Section
