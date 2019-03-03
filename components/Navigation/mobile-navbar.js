import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from 'styled-components'

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
  .header-navigation-mobile {
    display: none;
  }
  @media only screen and (max-width: 1088px) {
    .header-navigation-mobile {
      display: none;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 100vw;
      height: 100vh;
      margin: 0;
      background-color: rgba(255, 255, 255, 0.9);
      z-index: 1;
      font-size: 1.5rem;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      box-shadow: 0px 10px 25px -16px rgba(0, 0, 0, 0.3);
      transition: all 0.2s linear;
      position: sticky;
      top: 0;
      li {
        list-style: none;
        display: none;
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
        color: #4a4a4a;
      }
      a:hover {
        color: ${({ theme }) => theme.colors.$B6};
      }
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 1.1rem;
      }
    }
    .isMobileActive {
      display: flex !important;
    }
  }
  @media only screen and (max-width: 1088px) {
    .drop-menu {
      display: none !important;
    }
  }
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
    display: flex !important;
  }
`

const MobileNavbar = ({
  isOpen,
  isMobileActive,
  isDropMobileActive,
  showToggleDropMobileNav,
}) => (
  <NavbarWraper>
    <MobileNav
      pose={isOpen ? 'open' : 'closed'}
      className={`header-navigation-mobile ${isMobileActive}`}
    >
      <li className={isMobileActive}>
        <Link to="/">Strona Główna</Link>
      </li>

      <li className={isMobileActive} onClick={showToggleDropMobileNav}>
        Poradnie
      </li>
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

      <li className={isMobileActive}>
        <Link to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt">Zabiegi</Link>
      </li>

      <li className={isMobileActive}>
        <Link to="/cennik">Cennik</Link>
      </li>

      <li className={isMobileActive}>
        <Link to="/oNas">Przychodnia</Link>
      </li>

      <li className={isMobileActive}>
        <Link to="/zespol">Zespół</Link>
      </li>

      <li className={isMobileActive}>
        <Link to="/kontakt">Kontakt</Link>
      </li>

      <li className={isMobileActive}>
        <Link to="/rodo">RODO</Link>
      </li>

      <li className={isMobileActive}>
        <a href="https://sklep.nutrikon.pl/sklep/index.php">Sklep</a>
      </li>
    </MobileNav>
  </NavbarWraper>
)

export default MobileNavbar
