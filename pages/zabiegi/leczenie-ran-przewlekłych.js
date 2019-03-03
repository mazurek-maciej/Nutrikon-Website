import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import H1 from '../../components/H1'
import H2 from '../../components/H2'
import BoxNeutralColor from '../../components/BoxNeutralColor'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const LeczenieRanPrzewleklych = ({ data }) => (
  <Layout>
    <SEO
      title={'Leczenie ran przewlekłych'}
      keywords={['rana przewlekła, ubytek tkanki, owrzodzenie, odleżyny']}
      lang={'pl/PL'}
    />
    <HeroZabiegi fluid={data.zabieg.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <Link to="/poradnie/chirurgia-ogolna">
            <ion-icon name="ios-arrow-back" />
            Poradnia chirurgi ogólnej
          </Link>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Leczenie Ran Przewlekłych
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        <p>
                          Rana przewlekła (RP) to ubytek tkanki skórnej
                          spowodowany procesem chorobowym lub urazem
                          niepoddający się leczeniu. Trudno przyjąć jednoznaczną
                          granicę czasu, kiedy możemy mówić o ranie przewlekłej.
                          Większość autorów proponuje, aby było to powyżej 6-8
                          tygodni.
                        </p>
                        <p>
                          Rany przewlekłe, takie jak owrzodzenia podudzia, stopa
                          cukrzycowa, owrzodzenia odleżynowe coraz częściej
                          stają się problemem społecznym. Przedłużające się
                          gojenie i trudne metody zaopatrywania tych ran oraz
                          związane z nimi cierpienie pacjenta wymaga
                          indywidualnego podejścia do każdego przypadku. Rany
                          przewlekłe goją się powoli i stosowanie nowoczesnych
                          opatrunków zawierających sole srebra, węgiel aktywny,
                          substancje hipoalergiczne w znaczący sposób
                          przyśpiesza ich gojenie i poprawia komfort życia
                          pacjenta. Opatrunki dobierane są indywidualnie dla
                          każdego pacjenta w zależności od rodzaju rany.
                        </p>
                        <p>
                          W większości przypadków udaje się ustalić przyczynę
                          powstania ran przewlekłych i noszą one nazwę zgodnie
                          ze swoją etiologią. Do ran przewlekłych należą:
                          owrzodzenia żylne goleni (około 75% RP), rany
                          niedokrwienne goleni( około 14% RP), zespół stopy
                          cukrzycowej( około 5% RP) oraz powstałe na tle
                          mieszanym ( żylno - niedokrwiennym).
                        </p>
                      </article>
                    </div>
                    <BoxNeutralColor mT>
                      <div className="tile is-parent is-vertical">
                        <H2 blue>
                          Do rzadziej spotykanych w praktyce klinicznej ran
                          przewlekłych należą:
                        </H2>
                        <li>・ odleżyny</li>
                        <li>・ rany immunologiczne</li>
                        <li>・ hematologiczne</li>
                        <li>
                          ・ ropne zgorzelinowe zapalenie skóry (pyodermia
                          gangreno sum)
                        </li>
                        <li>・ owrzodzenia nowotworowe</li>
                        <li>
                          ・ rany towarzyszące wrodzonym malformacjom
                          naczyniowym
                        </li>
                        <li>
                          ・ rany brzucha i klatki piersiowej powstałe w
                          przebiegu przetok przewodu pokarmowego
                        </li>
                        <li>・ rany pourazowe oraz o nieznanym tle</li>
                      </div>
                    </BoxNeutralColor>
                    <BoxNeutralColor mT>
                      <H2 blue>Nasza oferta obejmuje</H2>
                      <li>・ Konsultacje lekarskie</li>
                      <li>・ Opatrunki</li>
                    </BoxNeutralColor>
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

export default LeczenieRanPrzewleklych

export const pageQuery = graphql`
  query {
    zabieg: file(relativePath: { eq: "rana.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
