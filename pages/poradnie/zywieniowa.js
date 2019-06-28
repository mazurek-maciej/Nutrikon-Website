import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'
import Layout from '../../components/Layout/layout'
import H2 from '../../components/Tags/H2'
import H1 from '../../components/Tags/H1'
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
          title="Poradnia Żywieniowa"
          keywords={[
            'poradnia żywieniowa w Opolu, poradnia żywieniowa Opole, zdrowy styl życia, walka z nadwagą, otyłość, leczenie otyłości Opole, leczenie nadwagi Opole, otyłość Opole, nadwada opole, przychodnia żywieniowa Opole, żywienie dojelitowe Opole, pompy żywienia dojelitowego Opole, preparaty żywienia dojelitowego, żywienie Opole, specjalistyczna poradnia żywieniowa, lekarze specjaliści żywieniowi, rejestracja do poradni żywienowej',
          ]}
          description="Nutrikon poradnia żywieniowa w Opolu. Poradnia żywienieniowa Opole ulica Krakowska 32A. Specjalistyczna poradnia żywieniowa w Opolu. żywienie dojelitowe w Opolu specjalistyczne pompy i preparaty. Leczenie otyłości w Opolu, Nutrikon."
          lang="pl/PL"
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns is-centered">
                <div className="column is-9">
                  <H1 small red>
                    Poradnia Żywieniowa
                  </H1>

                  <article className="tile is-parent is-vertical">
                    <H2 isBlue>
                      <ion-icon name="information-circle-outline" />
                      Informacje ogólne
                    </H2>
                    <p>
                      Poradnia żywieniowa zajmuje się zarówno promowaniem
                      zdrowego stylu życia jak również świadczy kompleksową
                      opiekę nad pacjentem żywionym dojelitowo w warunkach
                      domowych. W przypadku osób wymagających profilaktyki
                      żywienia, pomocy w walce z nadwagą i otyłością lub
                      ustalenia odpowiedniej diety w stanach chorobowych
                      proponujemy przeprowadzenie podczas wizyty dokładnego
                      wywiadu żywieniowego, pomiaru składu ciała, a także
                      skorygowane zostaną błędy żywieniowe. Uzyskają również
                      Państwo poradę dotyczącą prawidłowego odżywiania w różnych
                      jednostkach chorobowych, alergiach pokarmowych, w których
                      odżywianie ma istotny wpływ na stan zdrowia.
                      <br />
                      Dietetyk oceni Twój stan odżywienia, przeanalizuje wyniki
                      pomiarów składu ciała, ustali indywidualny jadłospis,
                      pokaże ćwiczenia, które pomagają zachować dobrą kondycję
                      organizmu.
                      <br />
                      Oferta skierowana jest do osób w każdym wieku, zarówno
                      dzieci,młodzieży, dorosłych, całych rodzin oraz grup,
                      które mają wątpliwości dotyczące odżywiania.
                    </p>
                  </article>
                  <BoxNeutralColor>
                    <article className="tile is-child">
                      <H2 isBlue>
                        <ion-icon name="medkit" />
                        Profil leczenia oraz zakres usług
                      </H2>
                      <p>
                        W przypadku pacjentów żywionych dojelitowo w warunkach
                        domowych nasza oferta obejmuje:
                      </p>
                      <li>
                        ・ Przygotowanie pacjenta lub opiekunów do leczenia
                        żywieniowego w warunkach domowych
                      </li>
                      <li>
                        ・ Zapewnienie ciągłego kontaktu telefonicznego z
                        pacjentem lub opiekunami
                      </li>
                      <li>
                        ・ Dostarczanie preparatów, sprzętu (w tym nieodpłatne
                        wypożyczanie pomp do żywienia dojelitowego, jeśli
                        istnieją wskazania) i niezbędnych środków opatrunkowych
                        do domu pacjenta
                      </li>
                      <li>
                        ・ Zapewnienie hospitalizacji w przypadku podejrzenia
                        lub wystąpienia powikłań leczenia żywieniowego oraz
                        innych wskazań wymagających leczenia szpitalnego
                        związanych z leczeniem żywieniowym
                      </li>
                      <li>
                        ・ Udrożnienie lub poprawę mocowania zgłębnika lub
                        naprawę zgłębnika lub przetoki – według potrzeb
                      </li>
                      <li>
                        ・ Transport pacjenta do ośrodka w celu badań lub
                        hospitalizacji w przypadku wskazań do transportu
                        medycznego jeżeli wykonanie badań lub hospitalizacja
                        związane są z prowadzonym leczeniem żywieniowym
                      </li>
                      <li>
                        ・ Program badań kontrolnych zgodnie z terminarzem wizyt
                        oraz według potrzeb w poradni prowadzącej leczenie
                        pacjentów żywionych dojelitowo w warunkach domowych lub
                        w domu pacjenta
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
                          <Star>★</Star> Dr n. med. Grzegorze Krasowski -
                          Specjalista chirurgii ogólnej i onkologicznej{' '}
                          <Link to="/zespol/krasowski">
                            <DoctorInfo />
                          </Link>
                        </li>
                        <li>
                          <Star>★</Star> Lek. med. Robert Wajda - Specjalista
                          chirurgii ogólnej{' '}
                          <Link to="/zespol/wajda">
                            <DoctorInfo />
                          </Link>
                        </li>
                        <li>
                          <Star>★</Star> Małgorzata Kornacka - Dietetyk{' '}
                          <Link to="/zespol/kornacka">
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
    poradnieImage: file(relativePath: { eq: "zywieniowa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
