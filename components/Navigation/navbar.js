import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderNavigation = styled.ul`
  width: 100vw;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  font-size: 24px;
  padding: 10px 0 0 0;
  box-shadow: 0px 10px 25px -16px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.$white};
  margin: 0;
`
const NavbarButton = styled.button`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.$paragraph};
  padding: 1rem;
  margin: 0 8px;
  background: transparent;
  border: 2px solid transparent;
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
  & :hover {
    color: ${({ theme }) => theme.colors.$B6};
    border-bottom: 2px solid ${({ theme }) => theme.colors.$B6};
    cursor: pointer;
  }
`
const NavbarLi = styled.li`
  font-size: 24px;
  padding: 1rem;
  margin: 0 8px;
  background: transparent;
  border: 2px solid transparent;
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.$B6};
  }
  & > a {
    color: ${({ theme }) => theme.colors.$paragraph};
  }
  & :hover > a {
    color: ${({ theme }) => theme.colors.$B6};
  }
`

const Navbar = ({
  refOnas,
  refPoradnie,
  showToggleOnas,
  showTogglePoradnie,
}) => (
  <HeaderNavigation>
    <NavbarLi>
      <Link
        to="/"
        activeStyle={{
          color: 'hsl(210,90%,43%)',
        }}
      >
        Strona Główna
      </Link>
    </NavbarLi>

    <NavbarButton
      type="button"
      ref={refPoradnie}
      onClick={showTogglePoradnie}
      activeStyle={{
        color: 'hsl(210,90%,43%)',
      }}
    >
      Poradnie
    </NavbarButton>

    <NavbarLi>
      <Link
        to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt"
        activeStyle={{
          color: 'hsl(210,90%,43%)',
        }}
      >
        Zabiegi
      </Link>
    </NavbarLi>

    <NavbarLi>
      <Link
        to="/cennik"
        activeStyle={{
          color: 'hsl(210,90%,43%)',
        }}
      >
        Cennik
      </Link>
    </NavbarLi>

    <NavbarButton
      type="button"
      ref={refOnas}
      onClick={showToggleOnas}
      activeStyle={{
        color: 'hsl(210,90%,43%)',
      }}
    >
      O nas
    </NavbarButton>

    <NavbarLi>
      <Link
        to="/kontakt"
        activeStyle={{
          color: 'hsl(210,90%,43%)',
        }}
      >
        Kontakt
      </Link>
    </NavbarLi>

    <NavbarLi>
      <a href="https://sklep.nutrikon.pl/sklep/index.php">Sklep</a>
    </NavbarLi>
  </HeaderNavigation>
)

Navbar.propTypes = {
  refOnas: PropTypes.object.isRequired,
  refPoradnie: PropTypes.object.isRequired,
  showToggleOnas: PropTypes.func.isRequired,
  showTogglePoradnie: PropTypes.func.isRequired,
}

export default Navbar
