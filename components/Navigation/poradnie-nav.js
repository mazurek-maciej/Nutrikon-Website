import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import H2 from '../Tags/H2'
import img from '../../images/Nutrikon_Logo.svg'

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul li a {
    color: ${({ theme }) => theme.colors.$white};
  }
  ul li a:hover {
    color: ${({ theme }) => theme.colors.$secondaryBlue};
  }
`
const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 8px;
`
const NavWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Aside = styled.aside`
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.$G9} !important;
  border: 1px solid hsla(187, 0%, 65%, 0.5);
  box-shadow: 0 4px 25px hsla(0, 0%, 0%, 0.1);
  margin-top: 20%;
  z-index: 0;
  ul > li > a {
    color: ${({ theme }) => theme.colors.$paragraph};
  }
  ul > li {
    margin-bottom: 4px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
  }
`

const PoradnieNav = ({ navList }) => (
  <NavWraper>
    <Aside className="navbar">
      <Navbar>
        <H2>Zabiegi wykonywane w ramach poradni</H2>
        <ul>
          {navList.map(item => (
            <li key={item}>
              <Link to={`/zabiegi/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Img src={img} alt="logo" />
      </Navbar>
    </Aside>
  </NavWraper>
)

export default PoradnieNav
