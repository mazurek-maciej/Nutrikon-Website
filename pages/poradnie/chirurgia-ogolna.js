import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import PoradnieNav from '../../components/Navigation/poradnie-nav'
import H1 from '../../components/H1'
import H2 from '../../components/H2'
import BoxNegativeColor from '../../components/BoxNegativeColor'
import BoxNeutralColor from '../../components/BoxNeutralColor'
import BackgroundGradient from '../../components/BackgroundGradient'
import DoctorInfo from '../../components/DoctorInfoIcon'
import Scroll from '../../components/Scroll'
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

const navList = [
  'Laserowe usuwanie brodawek i znamion',
  'Laserowe usuwanie blizn i odmładzanie skóry',
  'Laserowe leczenie żylaków pniowych EVLT',
  'Skleroterapia',
  'Leczenie ran przewlekłych',
]

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
          title={'Poradnia Chirurgii Ogólnej'}
          keywords={[
            'poradnia chirugi, chirurgia ogólna, zabiegi chirurgiczne',
          ]}
          lang={'pl/PL'}
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns">
                <div className="column is-9">
                  <div className="container">
                    <H1 small red>
                      Poradnia Chirurgii Ogólnej
                      <Scroll onClick={this.scrollTo} />
                    </H1>
                    <div className="tile is-ancestor">
                      <div className="tile is-vertical is-9">
                        <div className="tile">
                          <div className="tile is-parent is-vertical">
                            <article className="tile is-child">
                              <H2>
                                <ion-icon name="information-circle-outline" />
                                Informacje ogólne
                              </H2>
                              <p>
                                W poradni Chirurgii Ogólnej w Opolu i
                                Niemodlinie prowadzone są konsultacje lekarskie,
                                konsultacje kwalifikujące do leczenia
                                chirurgicznego. W gabinecie zabiegowym istnieje
                                możliwość wykonania drobnych zabiegów
                                chirurgicznych. Konsultacje chirurgiczne dotyczą
                                m. in.: chorób układu pokarmowego, przepuklin
                                brzusznych, zmian skóry i tkanki podskórnej,
                                chorób żył i ich powikłań, powikłań miażdżycy
                                tętnic kończyn, przewlekle niegojących się ran i
                                owrzodzeń, odleżyn, dostępów do żywienia
                                dojelitowego. Zakres procedur diagnostycznych
                                obejmuje USG jamy brzusznej, USG Doppler naczyń
                                kończyn dolnych, anoskopię i rektoskopię z
                                możliwością pobrania wycinków do badania
                                histopatologicznego. Zabiegi z zakresu małej
                                chirurgii wykonywane są w znieczuleniu
                                miejscowym i obejmują m. in.: usuwanie zmian
                                skóry i tkanki podskórnej z weryfikacją
                                histopatologiczną, usunięcie wrastającego
                                paznokcia, chirurgiczne leczenie stanów ropnych
                                np. zanokcicy, ropni powłok. W przypadku ran
                                przewlekłych proponujemy diagnostykę w kierunku
                                ustalenia przyczyn upośledzonego gojenia,
                                stosujemy leczenie chirurgiczne i opatrunki
                                specjalistyczne.
                              </p>
                            </article>
                            <BoxNeutralColor>
                              <article className="tile is-child">
                                <H2>
                                  <ion-icon name="medkit" />
                                  Profil leczenia oraz zakres usług
                                </H2>
                                <p>
                                  Poradnia oferuje szybką, kompleksową
                                  diagnostykę z zakresu chirurgii ogólnej.
                                  Zakres świadczonych usług:
                                </p>
                                <li>
                                  ・ diagnostyka i usuwanie zmian podskórnych,
                                  np.: guzków skóry, kaszaków, włókniaków,
                                  brodawek;
                                </li>
                                <li>
                                  ・ leczenie zmian ropnych skóry, zastrzałów,
                                  zanokcicy kończyn;
                                </li>
                                <li>・ plastyka wrastających paznokci;</li>
                                <li>
                                  ・ przygotowywanie i kwalifikacja chorych do
                                  operacji oraz prowadzenie chorych po zabiegach
                                  operacyjnych;
                                </li>
                                <li>・ leczenie oparzeń, odmrożeń;</li>
                                <li>
                                  ・ diagnostyka i leczenie świeżych i
                                  przewlekłych ran, żylaków, owrzodzeń
                                  żylakowych i cukrzycowych odleżyn;
                                </li>
                                <li>・ zakładanie i zdejmowanie opatrunków,</li>
                              </article>
                            </BoxNeutralColor>
                          </div>
                        </div>
                        <BoxNegativeColor mT>
                          <div className="tile is-parent">
                            <div className="tile is-child">
                              <H2>
                                <ion-icon name="person" />
                                Personel
                              </H2>
                              <H2 className="subtitle">Oddział w Opolu</H2>
                              <li>
                                <Star>★</Star> Dr n. med. Grzegorz Krasowski -
                                Specjalista chirurgii ogólnej i onkologicznej{' '}
                                <Link to="/zespol/krasowski">
                                  <DoctorInfo />
                                </Link>
                              </li>
                              <li>
                                <Star>★</Star> lek. med. Małgorzata Ziółkowska{' '}
                                <Link to="/zespol">
                                  <DoctorInfo />
                                </Link>
                              </li>
                              <li>
                                <Star>★</Star> Lek. med. Robert Wajda -
                                Specjalista chirurgii ogólnej{' '}
                                <Link to="/zespol/wajda">
                                  <DoctorInfo />
                                </Link>
                              </li>
                              <H2
                                className="subtitle"
                                style={{ marginTop: '1.5rem' }}
                              >
                                Oddział w Niemodlinie
                              </H2>
                              <li>
                                <Star>★</Star> Lek. med. Robert Wajda -
                                Specjalista chirurgii ogólnej{' '}
                                <Link to="/zespol/wajda">
                                  <DoctorInfo />
                                </Link>
                              </li>
                            </div>
                          </div>
                        </BoxNegativeColor>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={this.myRef} className="column is-3">
                  <PoradnieNav navList={navList} />
                </div>
              </div>
            </Container>
          </Section>
        </BackgroundGradient>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    poradnieImage: file(relativePath: { eq: "chir-ogol.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
