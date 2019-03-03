import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { graphql } from 'gatsby'
import { theme } from '../../utils/theme'
import './layout.scss'
import { StaticQuery } from 'gatsby'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Raleway;
   }
   *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <header>
            <Header />
          </header>
          <>{children}</>
          <footer>
            <Footer />
          </footer>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
