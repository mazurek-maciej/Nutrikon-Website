import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled from 'styled-components'
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
const P = styled.p`
  color: ${({ theme }) => theme.colors.$secondary};
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
          title="Poradnia Internistyczna"
          keywords={[
            'poradnia internistyczna, leczenie profilaktyczne, lekarz ogólny, przychodnia internistyczna, interna Opole, rejestracja do lekarza internisty Opole, choroby serca Opole, choroby układu pokarmowego, choroby układu moczowego, cukrzyca, leczenie cukrzycy Opole, internista w Opolu, internista Opole, internista w centrum Opola',
          ]}
          description="Poradnia Internistyczna Nutrikon w Opolu. Poradnia internistyczna w Opolu oferujemy szybką diagnostykę wszelkich schorzeń internistycznych. Przychodnia internistyczna Opole - Nutrikon. Internista - choroby serca i układu krążenia, choroby układu dokrewnego, choroby układu pokarmowego, choroby układu moczowego, cukrzyca i jej powikłania."
          lang="pl/PL"
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns is-centered">
                <div className="column is-9">
                  <H1 small red>
                    Poradnia Internistyczna
                  </H1>
                  <article className="tile is-parent is-vertical">
                    <H2 isBlue>
                      <ion-icon name="information-circle-outline" />
                      Informacje ogólne
                    </H2>
                    <p>
                      Nasza poradnia zajmuje się całym procesem leczenia
                      pacjenta, lekarz zaczynając od profilaktyki, po
                      diagnostykę, leczenie, rehabilitację oraz kontrolę stanu
                      zdrowia. Wiedza internistyczna naszych specjalistów
                      obejmuje szczegółową znajomość fizjologii i chorób układu:
                      krążenia, pokarmowego, oddechowego, moczowego, wydzielania
                      wewnętrznego, krwiotwórczego, odpornościowego i narządu
                      ruchu. Realizujemy kompleksową ocenę stanu zdrowia.
                      Oferujemy szybką diagnostykę wszelkich schorzeń
                      internistycznych oraz natychmiastowe podjęcie leczenia
                      chorób wewnętrznych, zarówno tych najczęściej spotykanych,
                      jak i tych nietypowych.
                    </p>
                  </article>
                  <H2 isBlue>
                    <ion-icon name="medkit" />
                    Profil leczenia oraz zakres usług
                  </H2>
                  <p>
                    Najczęstsze choroby rozpoznawane i leczone przez internistów
                    to:
                  </p>
                  <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Choroby serca i układu krążenia</P>
                            <li>・ nadciśnienie tętnicze</li>
                            <li>・ niedociśnienie tętnicze</li>
                            <li>・ zakrzepica, miażdżyca</li>
                            <li>・ zaburzenia rytmu serca</li>
                            <li>・ zapalenie mięśnia sercowego</li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>

                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Choroby układu dokrewnego</P>
                            <li>
                              ・ niedoczynność i nadczynność tarczycy, choroba
                              Hashimoto
                            </li>
                            <li>
                              ・ wole objętne tarczycy, nadczynność i
                              niedoczynność przytarczyc
                            </li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>
                  </div>

                  <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Choroby układu pokarmowego</P>
                            <li>・ choroby jelit, trzustki i wątroby</li>
                            <li>
                              ・ choroby żołądka i dwunastnicy, choroby przełyku
                            </li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>

                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Choroby układu moczowego</P>
                            <li>・ kamica, zapalenie pęcherza moczowego</li>
                            <li>・ zapalenie pęcherzyka żółciowego</li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>
                  </div>

                  <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Choroby układu kostno-stawowego</P>
                            <li>
                              ・ zmiany zwyrodnieniowe kręgosłupa i stawów
                            </li>
                            <li>・ reumatoidalne zapalenie stawów</li>
                            <li>・ twardzina układowa</li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>

                    <div className="tile is-parent">
                      <div className="tile is-child">
                        <BoxNeutralColor>
                          <article className="tile is-child">
                            <P>Cukrzyca i jej powikłania</P>
                            <li>・ stopa cukrzycowa, angiopatia</li>
                          </article>
                        </BoxNeutralColor>
                      </div>
                    </div>
                  </div>
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
    poradnieImage: file(relativePath: { eq: "internistyczna.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
