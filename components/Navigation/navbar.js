import React from 'react'
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
  li {
    width: 180px;
    height: 48px;
    list-style: none;
    margin: 0;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
  }
  ul {
    margin: 0;
  }
  li a {
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.$G3};
    .acitve {
      color: ${({ theme }) => theme.colors.$B6};
    }
  }
  li:hover a {
    color: ${({ theme }) => theme.colors.$B6};
  }
  li:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.$B6};
    color: ${({ theme }) => theme.colors.$B6};
  }
  @media only screen and (max-width: 1088px) {
    display: none;
  }
`

class Navbar extends React.Component {
  state = {
    active: false,
  }

  render() {
    const {
      showTogglePoradnie,
      showToggleOnas,
      refOnas,
      refPoradnie,
    } = this.props
    return (
      <HeaderNavigation>
        <li>
          <Link
            to="/"
            activeStyle={{
              color: 'hsl(210,90%,43%)',
            }}
          >
            Strona Główna
          </Link>
        </li>

        <li
          ref={refPoradnie}
          onClick={showTogglePoradnie}
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Poradnie
        </li>

        <li>
          <Link
            to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt"
            activeStyle={{
              color: 'hsl(210,90%,43%)',
            }}
          >
            Zabiegi
          </Link>
        </li>

        <li>
          <Link
            to="/cennik"
            activeStyle={{
              color: 'hsl(210,90%,43%)',
            }}
          >
            Cennik
          </Link>
        </li>

        <li
          ref={refOnas}
          onClick={showToggleOnas}
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          O nas
        </li>

        <li>
          <Link
            to="/kontakt"
            activeStyle={{
              color: 'hsl(210,90%,43%)',
            }}
          >
            Kontakt
          </Link>
        </li>

        <li>
          <Link
            to="/rodo"
            activeStyle={{
              color: 'hsl(210,90%,43%)',
            }}
          >
            RODO
          </Link>
        </li>

        <li>
          <a href="https://sklep.nutrikon.pl/sklep/index.php">Sklep</a>
        </li>
      </HeaderNavigation>
    )
  }
}

export default Navbar
