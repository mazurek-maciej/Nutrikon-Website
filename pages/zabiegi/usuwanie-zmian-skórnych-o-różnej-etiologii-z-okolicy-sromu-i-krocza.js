import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Li from '../../components/Tags/Li'
import Red from '../../components/Red'
import {
  BoxNegativeColor,
  BoxPositiveColor,
  BoxNeutralColor,
} from '../../components/Backgrounds'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'

const HeroZabiegi = styled(Img)`
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
const Zabiegi = styled.div`
  background: linear-gradient(180deg, #f9f9f9 40%, #ddf5ff 80%);
  li {
    list-style-type: none;
  }
`

const UsuwanieZmianSkornych = ({ data }) => (
  <Layout>
    <SEO
      title="Nutrikon | Usuwanie zmian skórnych z okolicy sromu i krocza"
      keywords={['zmiany skrórne, okolice sromu, polipy, włókniaki, kłykciny']}
      lang="pl/PL"
    />
    <HeroZabiegi fluid={data.zabieg.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <Link to="/poradnie/ginekologiczno-poloznicza">
            <ion-icon name="ios-arrow-back" />
            Poradnia ginekologiczno-położnicza
          </Link>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Usuwanie zmian skórnych o różnej etiologii z okolicy sromu i
                krocza
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        <p>
                          Zmiany skórne z okolic sromu i krocza takie jak
                          polipy, włókniaki, kłykciny. należą do częstych
                          dolegliwości kobiet w różnym wieku. Jednak można je
                          skutecznie usunąć przy pomocy lasera CO2.
                        </p>
                        <p>
                          W naszej przychodni wszystkie zabiegi laserowe
                          usuwania zmian skórnych z okolicy sromu i krocza
                          poprzedzone są wcześniejszą konsultacją medyczną i
                          wykonywane są przez lekarza specjalistę.
                        </p>
                      </article>
                      <br />
                      <h2>
                        Technika ta szczególnie nadaje się do zamykania zmian:
                      </h2>
                      <Li>・ włókniaki</Li>
                      <Li>・ kłykciny sromu i krocza</Li>
                      <Li>・ znamiona barwnikowe</Li>
                    </div>

                    <br />
                    <BoxPositiveColor mT>
                      <H2 blue>Przebieg zabiegu</H2>
                      <p>
                        Zabieg wykonuje się w znieczuleniu miejscowym
                        Lignocainą, której działanie sprawia , że zabieg jest
                        całkowicie bezbolesny.
                      </p>
                      <p>
                        Zabieg polega na bezdotykowym odcięciu /koagulacji
                        zmiany skórnej za pomocą wiązki lasera CO2. Po zabiegu
                        nie ma potrzeby zakładania szwów.
                      </p>
                      <p>
                        W związku z tym, że zabieg jest bezkontaktowy istnieje
                        minimalne ryzyko przeniesienia chorób wirusowych jak np.
                        Wirusowe zapalenie wątroby (żółtaczka typu B czy C),
                        HIV.
                      </p>
                      <p>
                        W czasie zabiegu istnieje możliwość pobrania materiału
                        tkankowego do badania histopatologicznego.
                      </p>
                      <p>
                        Zabieg wykonywany jest ambulatoryjnie i trwa ok 30 minut
                      </p>
                    </BoxPositiveColor>

                    <BoxNeutralColor mT>
                      <H2 blue>Zalecenia po zabiegu</H2>
                      <article>
                        Po zabiegu można powrócić do normalnych czynności.
                        Pacjent nie odczuwa żadnych dolegliwości bólowych. Rana
                        szybko się goi. Powstałe po zabiegu drobniutkie strupki
                        należy natłuszczać tłustym kremem i po kilku dniach same
                        odpadają.
                      </article>
                    </BoxNeutralColor>

                    <BoxNegativeColor mT>
                      <H2 blue>
                        <img
                          style={{
                            width: '32px',
                            height: '32px',
                            margin: '0 5px',
                          }}
                          alt="Przeciwwskazania"
                          src={stopImg}
                        />
                        Przeciwwskazania
                      </H2>
                      <Li>
                        <Red>✕</Red> Infekcje pochwy
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża i okres laktacji
                      </Li>
                      <Li>
                        <Red>✕</Red> Miesiączka
                      </Li>
                      <Li>
                        <Red>✕</Red> Nowotwory do 5 lat wstecz
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciężkie choroby ogólnoustrojowe
                      </Li>
                      <Li>
                        <Red>✕</Red> Przyjmowanie leków wrażliwych na
                        promieniowanie( dziurawiec, nagietek, preparaty z wit.
                        A, niektóre antybiotyki)
                      </Li>
                    </BoxNegativeColor>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <ZabiegiNav />
            </div>
          </div>
        </Container>
      </Section>
    </Zabiegi>
  </Layout>
)

UsuwanieZmianSkornych.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UsuwanieZmianSkornych

export const pageQuery = graphql`
  query {
    zabieg: file(relativePath: { eq: "gine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
