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

class Mroz extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title={'mgr Ilona Mróz'}
          keywords={['Ilona Mróz']}
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
                mgr Ilona Mróz
              </H1>
              <H2 blue>Wiceprezes Zarządu</H2>
              <div className="columns">
                <SmallColumn className="column is-4">
                  <Image fluid={this.props.data.person.childImageSharp.fluid} />
                </SmallColumn>
                <LargeColumn className="column is-8">
                  <H2 blue>Wykształcenie</H2>
                  <p>
                    Wykształcenie wyższe, ukończone studia podyplomowe na
                    kierunku Zarządzanie Placówkami Służby Zdrowia
                  </p>
                  <H2 blue>Życiorys</H2>
                  <p>
                    Jestem absolwentką Uniwersytetu Opolskiego w Opolu, gdzie
                    studiowałam na kierunku Ekonomii.
                  </p>
                  <p>
                    W toku studiów obrałam specjalność: Ekonomika i zarządzanie
                    przedsiębiorstwem. Następnie kontynuowałam naukę na Studiach
                    Podyplomowych na kierunku Zarządzanie placówkami służby
                    zdrowia.{' '}
                  </p>
                  <p>
                    Decydujący wpływ na moje ukierunkowanie zawodowe miało
                    zatrudnienie w firmie Powiatowe Centrum Zdrowia S.A. w
                    Kluczborku na stanowisku Głównego Księgowego. Powierzone mi
                    projekty i zadania wymagały ode mnie kreatywności,
                    zdyscyplinowania, szybkiej oceny sytuacji i podejmowania
                    trafnych decyzji oraz dużej odporności na stres.
                  </p>
                  <p>
                    Następnym miejscem mojej pracy było Powiatowe Centrum
                    Medyczne Sp. z o.o. w Wieruszowie - pierwszy w województwie
                    łódzkim Szpital prowadzony w formie spółki prawa handlowego.
                    W placówce tej pełniłam funkcję Dyrektora ds. Finansowo -
                    Administracyjnych. Odpowiadałam za politykę finansową
                    Spółki, a także wdrożyłam systemy informatyczne zarówno w
                    zakresie części białej jak i finansowo - księgowej. Byłam
                    współautorką wdrożonego planu zmiany formy prawnej.
                  </p>
                  <p>
                    W latach 2009 -2011 piastowałam stanowisko Prezesa Zarządu
                    Krapkowickiego Centrum Zdrowia Sp. z o.o. Od listopada 2011
                    r do października 2012 byłam dyrektorem Szpitala Powiatowego
                    w Blachowni i jednocześnie pełniłam funkcję Koordynatora w
                    Ministerstwie Zdrowia ds. restrukturyzacji i przekształcenia
                    Szpitala w Polanicy Zdroju gdzie objęłam tymczasową funkcję
                    Koordynatora ds. Przekształcenia.
                  </p>
                  <p>
                    Od sierpnia 2013 r do chwili obecnej pełnię funkcję
                    Dyrektora Zarządzającego VITAL MEDIC w Kluczborku - jednego
                    z najlepszych prywatnych ośrodków medycznych w Polsce.
                  </p>
                  <p>
                    Od 2012 roku jestem wiceprezesem i współwłaścicielem spółki
                    medycznej Nutrikon
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

export default Mroz

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "Mroz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
