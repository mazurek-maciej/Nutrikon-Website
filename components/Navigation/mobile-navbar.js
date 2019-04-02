import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MobileNav = posed.ul({
  open: {
    opacity: 1,
    transition: {
      duration: 200,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 100,
    },
  },
})

const NavbarWraper = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: ${props => (props.active ? 'flex' : 'none')};
    color: ${theme.colors.$paragraph};
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    font-size: 1.5rem;
    transition: all 0.2s linear;
    position: sticky;
    top: 0;
    button {
      background: transparent;
      border: transparent;
      font-size: 1.5rem;
      margin: 10px;
      color: ${theme.colors.$paragraph};
      :hover {
        color: ${theme.colors.$B6};
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px;
      width: fit-content;
      transition: all 0.2s;
      cursor: pointer;
    }
    li:hover {
      color: ${theme.colors.$B6};
    }
    a {
      color: #4a4a4a;
    }
    a:hover {
      color: ${theme.colors.$B6};
    }
    .drop-menu {
      display: none;
    }
  `}
  ${({ theme }) => theme.media.phone`
      font-size: 1.1rem;
  
  `}

  .drop-menu-mobile {
    display: none;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    z-index: 1;
    transition: all 0.2s linear;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px 10px 10px 10px;
      width: fit-content;
      transition: all 0.2s;
      cursor: pointer;
    }
    li:hover {
      color: ${({ theme }) => theme.colors.$B6};
    }
    a {
      color: ${({ theme }) => theme.colors.$B3};
    }
    a:hover {
      color: ${({ theme }) => theme.colors.$B6};
    }
  }
  .active {
    display: flex;
  }
`

const MobileNavbar = ({
  isOpen,
  isMobileActive,
  isDropMobileActive,
  showToggleDropMobileNav,
}) => (
  <NavbarWraper active={isMobileActive}>
    <MobileNav pose={isOpen ? 'open' : 'closed'}>
      <li>
        <Link to="/">Strona Główna</Link>
      </li>

      <button type="button" onClick={showToggleDropMobileNav}>
        Poradnie
      </button>
      <div>
        <ul className={`drop-menu-mobile ${isDropMobileActive}`}>
          <li>
            <Link to="/poradnie/chirurgia-ogolna">Chirugia Ogólna</Link>
          </li>
          <li>
            <Link to="/poradnie/chirurgia-onkologiczna">
              Chirurgia Onkologiczna
            </Link>
          </li>
          <li>
            <Link to="/poradnie/ginekologiczno-poloznicza">
              Ginekologiczno–Położnicza
            </Link>
          </li>
          <li>
            <Link to="/poradnie/internistyczna">Internistyczna</Link>
          </li>
          <li>
            <Link to="/poradnie/gastroenterologiczna">
              Gastroenterologiczna
            </Link>
          </li>
          <li>
            <Link to="/poradnie/zywieniowa">Żywieniowa</Link>
          </li>
        </ul>
      </div>

      <li>
        <Link to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt">
          Zabiegi
        </Link>
      </li>

      <li>
        <Link to="/cennik">Cennik</Link>
      </li>

      <li>
        <Link to="/oNas">Przychodnia</Link>
      </li>

      <li>
        <Link to="/zespol">Zespół</Link>
      </li>

      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>

      <li>
        <a href="https://sklep.nutrikon.pl/sklep/index.php">Sklep</a>
      </li>
    </MobileNav>
  </NavbarWraper>
)

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobileActive: PropTypes.string.isRequired,
  isDropMobileActive: PropTypes.string.isRequired,
  showToggleDropMobileNav: PropTypes.func.isRequired,
}

export default MobileNavbar
