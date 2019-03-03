import React, { Component } from 'react'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import styled from 'styled-components'
import H1 from '../../components/H1'
import Img from 'gatsby-image'
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
  background-size: contain;
`

class Front extends Component {
  render() {
    return (
      <Layout>
        <SEO title={'Beata Front'} keywords={['Beata Front']} lang={'pl/PL'} />
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
                Beata Front
              </H1>
              <div className="columns">
                <SmallColumn className="column is-4">
                  <Image fluid={this.props.data.person.childImageSharp.fluid} />
                </SmallColumn>
                <LargeColumn className="column is-8">
                  <H2 blue>Życiorys</H2>
                  <p>Z zawodu pielęgniarka i kosmetyczka.</p>
                  <p>
                    Ukończyła specjalizację z pielęgniarstwa ratunkowego w
                    trakcie specjalizacji onkologicznej.
                  </p>
                  <p>
                    Posiada kursy kwalifikacyjne: operacyjny, onkologiczny,
                    opieka na przewlekle chorymi i niepełnosprawnymi. Liczne
                    kursy specjalistyczne, dokształcające. Uczestniczy w wielu
                    konferencjach w dziedzinie pielęgniarstwa i kosmetyki.
                  </p>
                  <p>
                    Obecnie pracuje w Opolskim Centrum Onkologii na bloku
                    operacyjnym. Poprzednie miejsce pracy to kolebka chirurgii
                    plastycznej Polanica Zdrój, również blok operacyjny.
                  </p>
                  <p>
                    Jej pasją jest kosmetyka twarzy, szczególnie zabiegi
                    regeneracyjne i przeciwstarzeniowe. Posiada uprawnienia do
                    wykonywania zabiegów mezoterapii, podawania osocza
                    bogatopłytkowego oraz fibryny. Jej zainteresowania to
                    również chirurgia plastyczna
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

export default Front

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "BeataFront.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
