import React, { Component } from 'react'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import styled from 'styled-components'
import Img from 'gatsby-image'
import H1 from '../../components/H1'
import Background from '../../components/BackgroundGradient'
import { Link, graphql } from 'gatsby'
import H2 from '../../components/H2'
import Section from '../../components/Section'
import Container from '../../components/Container'

const SmallColumn = styled.div``
const LargeColumn = styled.div``
const Image = styled(Img)`
  height: 400px;
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`

class Prochnicka extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title={'Barbara Próchnicka'}
          keywords={['Barbara Próchnicka']}
          lang={'pl/PL'}
        />
        <Background>
          <Section>
            <Container>
              <H1 red>
                <Link to="/zespol">
                  <ion-icon
                    style={{ fontSize: '2rem' }}
                    name="ios-arrow-back"
                  />
                </Link>
                Barbara Próchnicka
              </H1>
              <div className="columns">
                <SmallColumn className="column is-4">
                  <Image fluid={this.props.data.person.childImageSharp.fluid} />
                </SmallColumn>
                <LargeColumn className="column is-8">
                  <H2 blue>Życiorys</H2>
                  <p>
                    Wykształcenie wyższe magisterskie. Posiada dwie
                    specjalizacje: w dziedzinie pielęgniarstwa
                    epidemiologicznego oraz anestezjologicznego i intensywnej
                    opieki. Ukończyła studia podyplomowe z zarządzania w
                    placówkach opieki zdrowotnej. Pracuje na stanowisku{' '}
                  </p>
                  <p>
                    Kierownika Bloku Operacyjnego w Krapkowickim Centrum Zdrowia
                    Sp. z o.o. Czynnie uczestniczy w pracy zespołu kontroli
                    zakażeń szpitalnych. Posiada liczne kursy kwalifikacyjne
                    potrzebne do pracy w swojej dziedzinie.
                  </p>
                  <p>
                    W firmie Nutrikon Sp. z o.o. specjalizuje się w laserowym
                    zamykaniu zmian naczyniowych, usuwaniu zmian barwnikowych ,
                    trwałej redukcji owłosienia oraz odmładzania skóry.
                    Interesuje się leczeniem ran oraz powiązaną z tym
                    mikrobiologią. Aseptykę i antyseptykę stawia na pierwszym
                    planie.
                  </p>
                  <p>
                    Ciągłe doskonalenie zawodowe uczula ją na śledzenie
                    pojawiających się w nowych teorii i metod. Stara się
                    poznawać na bieżąco wszelkie nowości. Jest autorem i
                    współautorem publikacji w dziedzinie zawodowej.
                  </p>
                  <p>
                    Jest osobą otwartą, komunikatywną, łatwo nawiązuje
                    znajomości. Cechuje ją rozsądek w podejmowaniu decyzji.
                    Potrafi słuchać innych, przez co ma spore grono przyjaciół.
                  </p>
                  <p>
                    Fascynują ją podróże, odkrywanie nowych miejsc, poznawanie
                    historii. Czas wolny wypełniają jej książki, wyprawy
                    górskie, jazda na rowerze. Regularnie pływa i ćwiczy.
                  </p>
                </LargeColumn>
              </div>
            </Container>
          </Section>
        </Background>
      </Layout>
    )
  }
}

export default Prochnicka

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "person3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
