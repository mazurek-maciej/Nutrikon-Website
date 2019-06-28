import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PosedNavbar = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: { display: 'flex' },
    transition: {
      duration: 200,
      ease: 'easeIn',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: { display: 'none' },
    transition: {
      duration: 200,
    },
  },
})

const NavbarWraper = styled(PosedNavbar)`
  display: none;
  ${({ theme }) => theme.media.tablet`
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
    position: sticky;
    top: 0;
    button {
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
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
      font-size: 1.2rem;
  `}

  .drop-menu-mobile {
    display: none;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    z-index: 1;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px
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
  isDropMobileActive,
  showToggleDropMobileNav,
}) => (
  <NavbarWraper pose={isOpen ? 'visible' : 'hidden'}>
    <ul>
      <li>
        <Link to="/">Strona Główna</Link>
      </li>

      <button
        style={{ fontSize: '24px', color: '#4a4a4a' }}
        type="button"
        onClick={showToggleDropMobileNav}
      >
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
    </ul>
  </NavbarWraper>
)

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isDropMobileActive: PropTypes.string.isRequired,
  showToggleDropMobileNav: PropTypes.func.isRequired,
}

export default MobileNavbar
