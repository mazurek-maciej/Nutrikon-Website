import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from 'styled-components'

const PosedOnas = posed.div({
  visible: {
    applyAtStart: { display: 'flex' },
  },
  hidden: {
    applyAtEnd: { display: 'none' },
  },
})
const OnasNavbarWraper = styled(PosedOnas)`
  display: none;
  .drop-menu {
    justify-content: center;
    flex-flow: row wrap;
    position: absolute;
    width: 100vw;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.$white};
    z-index: 1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 15px 25px hsla(210, 20%, 0%, 0.07);
    transition: all 0.2s linear;
    li {
      list-style: none;
      display: inherit;
      flex-direction: column;
      justify-content: center;
      margin: 10px 10px 10px 10px;
      width: fit-content;
      transition: color 0.2s;
      cursor: pointer;
    }
    li:hover {
      color: ${({ theme }) => theme.colors.$primaryBlue};
    }
    a {
      color: ${({ theme }) => theme.colors.$paragraph};
      border-bottom: 2px solid transparent;
      font-size: 1.2rem;
      transition: all 0.2s;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.$subtitle};
      border-bottom: 2px solid ${({ theme }) => theme.colors.$primaryBlue};
    }
  }
`

const OnasDropMenu = ({ isOnasActive }) => (
  <OnasNavbarWraper pose={isOnasActive ? 'visible' : 'hidden'}>
    <ul style={{ display: 'flex' }} className="drop-menu">
      <li>
        <Link to="/oNas">Przychodnia</Link>
      </li>
      <li>
        <Link to="/zespol">Zespół</Link>
      </li>
    </ul>
  </OnasNavbarWraper>
)

OnasDropMenu.propTypes = {
  isOnasActive: PropTypes.bool.isRequired,
}

export default OnasDropMenu
