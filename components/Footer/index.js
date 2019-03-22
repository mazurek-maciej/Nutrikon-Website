import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import H2 from '../../components/H2'

const FooterMainContainer = styled.div`
  background-color: hsl(210, 20%, 98%);
`
const FooterContainer = styled.div`
  display: flex;
`
const Column1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${colors.$paragraph};
  text-align: left;
  margin-top: 20px;
  h3 {
    margin: 5px 0 5px 40px;
    color: ${colors.$B6};
    font-weight: 300;
    font-size: 36px;
  }
  p {
    margin: 5px 5px 5px 40px;
    color: ${colors.$paragraph};
  }
  a {
    margin: 5px 5px 5px 40px;
    color: ${colors.$paragraph};
  }
  a:hover {
    color: ${colors.$B7};
  }
  @media only screen and (max-width: 1088px) {
    align-items: flex-start;
  }
`
const Column1Wraper = styled.div`
  display: flex;
  flex-direction: column;
`
const Column2 = styled.div`
  flex: 1;
  color: ${colors.$paragraph};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`
const Column3 = styled.div`
  flex: 1;
  color: ${colors.$paragraph};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: ${colors.$paragraph};
    margin: 5px 40px 5px 5px;
    font-size: 1.4rem;
    transition: color 0.2s;
  }
  a:hover {
    color: ${colors.$B7};
  }
  @media only screen and (max-width: 1088px) {
    display: none;
  }
`
const FooterLinks = styled.a`
  color: ${colors.$paragraph};
  font-size: 1.2rem;
  transition: color 0.2s;
  :hover {
    color: ${colors.$B7};
  }
`
const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.$B6};
  font-size: 64px;
  margin: 32px;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterMainContainer>
        <FooterContainer>
          <Column1>
            <Column1Wraper>
              <H2 blue big fM>
                Nutrikon
              </H2>
              <p>
                <b>Krakowska 32A, 46-020 Opole</b>
              </p>
              <FooterLinks>
                <b>nutrikon@nutrikon.pl</b>
              </FooterLinks>
              <p>Rejestracja do poradni:</p>
              <FooterLinks>
                <b>48 792 325 000</b>
              </FooterLinks>
              <FooterLinks>
                <b>48 792 766 000</b>
              </FooterLinks>
              <p>Leczenie żywieniowe, opieka domowa:</p>
              <FooterLinks>
                <b>48 792 325 000</b>
              </FooterLinks>
            </Column1Wraper>
          </Column1>
          <Column2>
            <p>Zapraszamy do odwiedzenia nas!</p>
            <div>
              <SocialIcon
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/nutrikon.sp.z.o.o/"
              >
                <i className="icon ion-logo-facebook" />
              </SocialIcon>
              <SocialIcon
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/nutrikon/"
              >
                <i className="icon ion-logo-instagram" />
              </SocialIcon>
            </div>
          </Column2>
          <Column3>
            <Link to="/zabiegi/mezoterapia" className="col-nav">
              Zabiegi
            </Link>
            <Link to="/cennik" className="col-nav">
              Cennik
            </Link>
            <Link to="/oNas" className="col-nav">
              O nas
            </Link>
            <Link to="/kontakt" className="col-nav">
              Kontakt
            </Link>
            <a
              href="https://sklep.nutrikon.pl/sklep/index.php"
              className="col-nav"
            >
              Sklep
            </a>
          </Column3>
        </FooterContainer>
      </FooterMainContainer>
    )
  }
}

export default Footer
