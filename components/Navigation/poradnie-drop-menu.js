import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from 'styled-components'

const DropMenu = posed.ul({
  open: {
    opacity: 1,
    transition: 200,
  },
  closed: {
    opacity: 0,
    transition: 100,
  },
})
const NavbarWraper = styled.div`
  .drop-menu {
    display: none;
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
      color: ${({ theme }) => theme.colors.$G3};
      border-bottom: 2px solid transparent;
      font-size: 1.2rem;
      transition: all 0.2s;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.$subtitle};
      border-bottom: 2px solid ${({ theme }) => theme.colors.$B6};
    }
  }
  .active {
    display: flex !important;
  }
`

const PoradnieDropMenu = ({ isPoradnieActive }) => (
  <NavbarWraper>
    <DropMenu
      pose={isPoradnieActive ? 'open' : 'closed'}
      className={`drop-menu ${isPoradnieActive}`}
    >
      <li>
        <Link
          to="/poradnie/chirurgia-ogolna"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Chirugia Ogólna
        </Link>
      </li>
      <li>
        <Link
          to="/poradnie/chirurgia-onkologiczna"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Chirurgia Onkologiczna
        </Link>
      </li>
      <li>
        <Link
          to="/poradnie/ginekologiczno-poloznicza"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Ginekologiczno–Położnicza
        </Link>
      </li>
      <li>
        <Link
          to="/poradnie/internistyczna"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Internistyczna
        </Link>
      </li>
      <li>
        <Link
          to="/poradnie/gastroenterologiczna"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Gastroenterologiczna
        </Link>
      </li>
      <li>
        <Link
          to="/poradnie/zywieniowa"
          activeStyle={{
            color: 'hsl(210,90%,43%)',
          }}
        >
          Żywieniowa
        </Link>
      </li>
    </DropMenu>
  </NavbarWraper>
)

export default PoradnieDropMenu
