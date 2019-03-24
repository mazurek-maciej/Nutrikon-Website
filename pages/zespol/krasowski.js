import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Background from '../../components/Backgrounds/BackgroundGradient'
import Section from '../../components/Section'
import Container from '../../components/Container'

const SmallColumn = styled.div``
const LargeColumn = styled.div``
const Image = styled(Img)`
  height: 400px;
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`

const Krasowski = ({ data }) => (
  <Layout>
    <SEO
      title="Dr n. med. Grzegorz Krasowski"
      keywords={['Grzegorz Krasowski']}
      lang="pl/PL"
    />
    <Background>
      <Section>
        <Container>
          <H1 red>
            <Link to="/zespol">
              <ion-icon style={{ fontSize: '2rem' }} name="ios-arrow-back" />
            </Link>
            Dr n. med. Grzegorz Krasowski
          </H1>
          <H2 blue>
            Specjalista chirurgii ogólnej i onkologicznej. Zajmuje się m.in.
            leczeniem ran przewlekłych, przewlekłymi chorobami żylnymi,
            leczeniem żylaków, pajączków żylnych
          </H2>
          <div className="columns">
            <SmallColumn className="column is-4">
              <Image fluid={data.person.childImageSharp.fluid} />
            </SmallColumn>
            <LargeColumn className="column is-8">
              <H2 blue>Życiorys</H2>
              <p>
                W 1993 roku ukończył Akademię Medyczną we Wrocławiu. W 1998 roku
                zdał egzaminy i uzyskał tytuł chirurga ogólnego, a w 2004 roku
                tytuł specjalisty z zakresu chirurgii ogólnej.
              </p>
              <p>
                W 2001 roku obronił pracę doktorską "Niewydolność żył kończyn
                dolnych u kobiet w ciąży i w połogu" i uzyskał tytuł doktora
                nauk medycznych.
              </p>
              <p>
                W 2015 roku po zdaniu egzaminów uzyskał tytuł specjalisty z
                zakresu chirurgii onkologicznej.
              </p>
              <p>
                Stale podnosi swoje kwalifikacje uczestnicząc w różnych
                kongresach, zjazdach i kursach, prowadzi badania naukowe.
                Publikuje wyniki w literaturze naukowej, uczestniczy w pisaniu
                podręczników medycznych - w 2009 został wydany Podręcznik
                Angiologii pod redakcją Prof. A. Sieronia, Z. Rybaka i innych,
                którego jest współautorem.
              </p>
              <p>
                Od 2012 roku jestem prezesem i współwłaścicielem spółki
                medycznej "Nutrikon" sp. z o.o.
              </p>
              <H2 blue style={{ marginTop: '1rem' }}>
                Zainteresowania zawodowe
              </H2>
              <p>
                ・ W pracy zawodowej interesuje się problemami przewlekłej
                choroby żylnej - zajmuje się leczeniem żylaków, pajączków
                żylnych, leczeniem przewlekłych ran-owrzodzeń kończyn dolnych.
                Wykonuje przetoki tętniczo-żylne dla potrzeb dializoterapii.
              </p>
              <p>
                ・ Kwalifikuje i wykonuje zabiegi onkologiczne dotyczące
                schorzeń przewodu pokarmowego: żołądka, jelita, jelita grubego.
              </p>
              <p>・ Wykonuje operacje usunięcia tarczycy.</p>
              <p>
                ・ Wykonuje zabiegi laparoskopowe: usunięcia pęcherzyka
                żółciowego, wyrostka robaczkowego, śledziony , nadnerczy, zmian
                guzowatych w jamie brzusznej itd.
              </p>
              <p>
                ・ Przeprowadza operacje planowe w zakresie jamy brzusznej
                związane ze schorzeniami żołądka, jelita cienkiego, jelita
                grubego, śledziony, pęcherzyka żółciowego i dróg żółciowych.
              </p>
              <p>
                ・ Wykonuje operacje naprawcze w przepuklinach rozworu
                przełykowego, plastyczne w przypadkach przepuklin pachwinowych i
                brzusznych z użyciem siatek. Zabiegi naprawcze w przepuklinach
                wykonuje również w technice małoinwazyjnej-laparoskopowej.
              </p>
              <p>
                ・ Zajmuje się zabiegami proktologicznymi- hemoroidy, szczeliny
                odbytu, przetoki okołoodbytnicze. Usuwa zmiany skórne i w tkance
                podskórnej.
              </p>
              <p>
                ・ Wykonuję zabiegi ostrodyżurowe w zakresie jamy brzusznej,
                klatki piersiowej i naczyń krwionośnych. Zajmuję się żywieniem
                poza i dojelitowym, wykonuję przetoki odżywcze w technice
                małoinwazyjnej (PEG).
              </p>
              <p>・ Wykonuje zabiegi bariatryczne (leczenie otyłości).</p>
              <p>
                ・ Zajmuje się zakrzepicami żylnymi. Wykonuje badania
                dopplerowskie układu naczyniowego: żył i tętnic.
              </p>
              <p>・ Prowadzi leczenie ostrych zapaleń trzustki.</p>
              <p>
                Współpracuje z różnego rodzaju specjalistami dążąc do właściwej
                diagnostyki i kompleksowego leczenia swoich pacjentów.
              </p>
            </LargeColumn>
          </div>
        </Container>
      </Section>
    </Background>
  </Layout>
)

Krasowski.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Krasowski
export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "GrzegorzKrasowski.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
