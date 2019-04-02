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
  .active {
    color: ${({ theme }) => theme.colors.$secondaryBlue};
  }
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.$paragraph};
  & :hover {
    color: ${({ theme }) => theme.colors.$secondaryBlue};
  }
`
const Img = styled.img`
  width: 100px;
  height: 100px;
`
const NavWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Divider = styled.div`
  content: '';
  display: block;
  width: 100%;
  padding: 1px;
  background-image: linear-gradient(
    -90deg,
    ${({ theme }) => theme.colors.$B7} 0,
    ${({ theme }) => theme.colors.$B7} 5%,
    ${({ theme }) => theme.colors.$B7} 90%,
    ${({ theme }) => theme.colors.$B7} 100%
  );
  opacity: 0.08;
  margin: 0.5rem 0 0.5rem 0;
`
const Aside = styled.aside`
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.$G9} !important;
  border: 1px solid hsla(187, 0%, 65%, 0.5);
  box-shadow: 0 4px 25px hsla(0, 0%, 0%, 0.1);
  margin-top: 20%;
  z-index: 0;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
  }
`

const ZabiegiNav = () => (
  <NavWraper>
    <Aside className="navbar">
      <Navbar>
        <H2>Pozostałe zabiegi</H2>
        <ul>
          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt"
            >
              Laserowe leczenie żylaków pniowych EVLT
            </StyledLink>
          </li>

          <li>
            <StyledLink activeClassName="active" to="/zabiegi/skleroterapia">
              Skleroterapia
            </StyledLink>
          </li>

          <Divider />

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/laserowe-usuwanie-brodawek-i-znamion"
            >
              Laserowe usuwanie brodawek i znamion{' '}
            </StyledLink>
          </li>

          <Divider />

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/laserowe-leczenie-nietrzymania-moczu"
            >
              Laserowe leczenie nietrzymania moczu
            </StyledLink>
          </li>

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/usuwanie-zmian-skórnych-o-różnej-etiologii-z-okolicy-sromu-i-krocza"
            >
              Usuwanie zmian skórnych o różnej etiologii z okolicy sromu i
              krocza
            </StyledLink>
          </li>

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/rewitalizacja-pochwy"
            >
              Rewitalizacja pochwy
            </StyledLink>
          </li>
          <Divider />
          <li>
            <StyledLink activeClassName="active" to="/zabiegi/mezoterapia">
              Mezoterapia
            </StyledLink>
          </li>

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/osocze-bogatoplytkowe"
            >
              Osocze bogatopłytkowe
            </StyledLink>
          </li>

          <Divider />

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/laserowe-usuwanie-blizn-i-odmładzanie-skóry"
            >
              Laserowe usuwanie blizn i odmładzanie skóry
            </StyledLink>
          </li>

          <li>
            <StyledLink
              activeClassName="active"
              to="/zabiegi/depilacja-laserowa"
            >
              Depilacja laserowa
            </StyledLink>
          </li>
        </ul>
        <Img src={img} alt="logo" />
      </Navbar>
    </Aside>
  </NavWraper>
)

export default ZabiegiNav
