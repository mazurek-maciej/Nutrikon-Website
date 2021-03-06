import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import {
  BoxNegativeColor,
  BoxNeutralColor,
  BackgroundGradient,
} from '../../components/Backgrounds'
import DoctorInfo from '../../components/DoctorInfoIcon'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'

const HeroPoradnie = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 50vh;
  img {
    object-fit: cover !important;
    object-position: 50% 30% !important;
  }
`
const Star = styled.span`
  color: gold;
`

class Index extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  scrollTo = () => this.myRef.current.scrollIntoView({ behavior: 'smooth' })

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="Poradnia Gastroenterologiczna"
          keywords={[
            'poradnia gastroenterologiczna, choroby przewodu pokarmowego, leczenie trzustki, gastroenterolog opole, gastroenterolog w Opolu, lakarz gastrolog Opole, opolskie gastrolog, przychodnia gastrologiczna, gastroenterolog Opole, przychodnia gastroenterologiczna',
          ]}
          description="Poradnia Gastroenterologiczna w Opolu. Poradnia Gastroenterologiczna Nutrikon Opole. Specjalistyczna poradnia gastroenterologiczna Nutrikon Opole ulica Krakowska 32A. Rejestracja do poradni gastroenterologicznej w Opolu. Nutrikon gastroenterolog Opole."
          lang="pl/PL"
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns is-centered">
                <div className="column is-9">
                  <H1 small red>
                    Poradnia Gastroenterologiczna
                  </H1>

                  <article className="tile is-parent is-vertical">
                    <H2 isBlue>
                      <ion-icon name="information-circle-outline" />
                      Informacje ogólne
                    </H2>
                    <p>
                      W ramach Poradni oferujemy Państwu profilaktykę,lekarz
                      diagnostykę oraz leczenie chorób przewodu pokarmowego i
                      gruczołów trawiennych - trzustki i wątroby oraz dróg
                      żółciowych. W ramach diagnostyki zapewniamy szeroki panel
                      badań laboratoryjnych oraz usg jamy brzusznej. W razie
                      wskazań istnieje dostęp do badań endoskopowych przewodu
                      pokarmowego (gastroskopia, kolonoskopia) diagnostycznych
                      jak i zabiegowych (np. polipektomia), a także kierowanie
                      do specjalistycznego leczenia stacjonarnego.
                    </p>
                  </article>
                  <BoxNeutralColor>
                    <article className="tile is-child">
                      <H2 isBlue>
                        <ion-icon name="medkit" />
                        Profil leczenia oraz zakres usług
                      </H2>
                      <p>Poradnia prowadzi:</p>
                      <li>
                        ・ Diagnostykę i leczenie chorób górnego odcinka
                        przewodu pokarmowego, w tym zapalenia refleksowe
                        przełyku i zaburzeń motoryki przełyku
                      </li>
                      <li>・ Diagnostykę raka przełyku, uchyłków przełyku</li>
                      <li>
                        ・ Diagnostykę i leczenie chorób żołądka i dwunastnicy,
                        w tym takich chorób jak: przewlekłe zapalenia błony
                        śluzowej żołądka i dwunastnicy, dyspepsja czynności
                        żołądka, choroba wrzodowa żołądka i dwunastnicy
                      </li>
                      <li>・ Diagnostykę raka żołądka</li>
                      <li>
                        ・ Diagnostykę i leczenie schorzeń jelita cienkiego i
                        grubego, chorób otrzewnej
                      </li>
                      <li>
                        ・ Diagnostykę i leczenie chorób pęcherzyka żółciowego i
                        dróg żółciowych
                      </li>
                      <li>
                        ・ Diagnostykę i leczenie chorób wątroby oraz trzustki
                      </li>
                    </article>
                  </BoxNeutralColor>
                  <BoxNegativeColor mT>
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <H2 isBlue>
                          <ion-icon name="person" />
                          Personel
                        </H2>
                        <li>
                          <Star>★</Star> Lek. med. Andrzej Żelowski -
                          Specjalista chorób wewnętrznych oraz gastroenterologii{' '}
                          <Link to="/zespol/zelkowski">
                            <DoctorInfo />
                          </Link>
                        </li>
                      </div>
                    </div>
                  </BoxNegativeColor>
                </div>
              </div>
            </Container>
          </Section>
        </BackgroundGradient>
      </Layout>
    )
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const pageQuery = graphql`
  query {
    poradnieImage: file(relativePath: { eq: "gastro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
