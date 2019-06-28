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
import Section from '../../components/Section'
import Container from '../../components/Container'
import SEO from '../../components/seo'

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
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="Poradnia Chirugii Onkologicznej"
          keywords={[
            'chirurgia onkologiczna, choroby nowotworowe, schorzenia onkologiczne, onkologia Opole, lekarz onkolog w Opolu, poradnia onkologiczna w opolu, opole onkolog, specjalista onkolog w Opolu, gabinet onkologiczny w Opolu, lekarz onkolog Opole, przychodnia onkologiczna w Opolu, specjalista onkologi opole',
          ]}
          description="Nutrikon Opole gabinet onkologiczny w centrum Opola. Poradnia Chirurgii Onkologicznej w Opolu. Gabinet onkologiczny w Opolu. Przychodnia Nutrikon w Opolu zajmuje się diagnostyką chorób nowotworowych i leczeniem schorzeń onkologicznych."
          lang="pl/PL"
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns is-centered">
                <div className="column is-9">
                  <H1 small red>
                    Poradnia Chirurgii Onkologicznej
                  </H1>
                  <article className="tile is-parent is-vertical">
                    <H2 isBlue>
                      <ion-icon name="information-circle-outline" />
                      Informacje ogólne
                    </H2>
                    <p>
                      Poradnia Chirurgii Onkologicznej w Opolu zajmuje się
                      diagnostyką chorób nowotworowych i leczeniem schorzeń
                      onkologicznych. Obejmuje kwalifikację do leczenia
                      operacyjnego w warunkach szpitalnych oraz pełną opiekę
                      pooperacyjną.
                    </p>
                  </article>
                  <BoxNeutralColor>
                    <article className="tile is-child">
                      <H2 isBlue>
                        <ion-icon name="medkit" />
                        Profil leczenia oraz zakres usług
                      </H2>
                      <p>
                        Poradnia oferuje szybką, kompleksową diagnostykę z
                        zakresu chirurgii ogólnej. Zakres świadczonych usług:
                      </p>
                      <li>
                        ・ Diagnostyka i leczenie znamion barwnikowych
                        (pieprzyków) skóry
                      </li>
                      <li>・ Profilaktyka czerniaka skóry</li>
                      <li>・ Plastyka wrastających paznokci</li>
                      <li>
                        ・ Diagnostyka i leczenie stanów przedrakowych i
                        rakowych skóry
                      </li>
                      <li>
                        ・ Diagnostyka i usuwanie innych zmian skórnych oraz
                        tłuszczaków, kaszaków, włókniaków i innych guzów
                        położonych w tkance podskórnej
                      </li>
                      <li>
                        ・ Diagnostyka i leczenie chorób gruczołu piersiowego
                      </li>
                      <li>
                        ・ Badanie kliniczne piersi – interpretacja chirurgiczno
                        – onkologiczna opisów badań obrazowych piersi (USG,
                        mammografia)
                      </li>
                      <li>
                        ・ Diagnostyka inwazyjna (biopsje) powiększonych węzłów
                        chłonnych i innych guzów
                      </li>
                      <li>・ Biopsja tarczycy</li>
                      <li>・ Biopsja węzłów</li>
                      <li>
                        ・ Kierowanie do planowego leczenia szpitalnego w
                        oddziale chirurgicznym, onkologicznym i uzdrowiskowego
                        oraz ośrodków klinicznych
                      </li>
                      <li>・ Konsultacje w okresie przed i poszpitalnym</li>
                      <li>・ Kontynuacja leczenia poszpitalnego</li>
                      <li>・ Inne porady z zakresu chirurgii onkologicznej.</li>
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
                          <Star>★</Star> Dr n. med. Grzegorz Krasowski -
                          Specjalista chirurgii ogólnej i onkologicznej{' '}
                          <Link to="/zespol/krasowski">
                            <DoctorInfo />
                          </Link>
                        </li>
                        <li>
                          <Star>★</Star> lek. med. Jarosław Dziurdź -
                          Specjalista chirurgii ogólnej i onkologicznej{' '}
                        </li>
                        <li>
                          <Star>★</Star> lek. med. Mariusz Tarara - Specjalista
                          radiolog{' '}
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
    poradnieImage: file(relativePath: { eq: "onkologia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
