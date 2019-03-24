import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionWraper = styled.section`
  padding: 3rem 1.5rem;
`

const Section = ({ children }) => <SectionWraper>{children}</SectionWraper>

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
