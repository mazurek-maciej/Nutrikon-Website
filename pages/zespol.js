import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import H1 from '../components/Tags/H1'
import Underline from '../components/Underline'
import Background from '../components/Backgrounds/BackgroundGradient'
import Section from '../components/Section'
import TeamTile from '../components/TeamTile'

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Zespol = ({ data }) => (
  <Layout>
    <SEO
      title="Zespół"
      keywords={['nutrikon, Krasowski, zespół']}
      lang="pl/PL"
    />
    <Background>
      <Section>
        <Wraper>
          <H1 big>Nasz zespół</H1>
          <Underline short />

          <div className="container">
            <div className="columns">
              <TeamTile
                linkTo="/zespol/tarara"
                img={data.tarara.childImageSharp.fluid}
                alt="Tarara"
                name="lek. med. Katarzyna Tarara"
              />
              <TeamTile
                linkTo="/zespol/ziolkowska"
                img={data.ziolkowska.childImageSharp.fluid}
                alt="Ziółkowska"
                name="lek. med. Małgorzata Ziółkowska"
              />
              <TeamTile
                linkTo="/zespol/krasowski"
                img={data.krasowski.childImageSharp.fluid}
                alt="Krasowski"
                name="dr n. med. Grzegorz Krasowski"
              />
              <TeamTile
                linkTo="/zespol/wajda"
                img={data.wajda.childImageSharp.fluid}
                alt="Wajda"
                name="lek. med. Robert Wajda"
              />
            </div>

            <div className="columns">
              <TeamTile
                linkTo="/zespol/osko"
                img={data.osko.childImageSharp.fluid}
                alt="Ośko"
                name="Dr Andrzej Ośko"
              />
              <TeamTile
                linkTo="/zespol/front"
                img={data.front.childImageSharp.fluid}
                alt="Front"
                name="Beata Front"
              />
              <TeamTile
                linkTo="/zespol/tesarz"
                img={data.tesarz.childImageSharp.fluid}
                alt="Tesarz"
                name="Małgorzata Tesarz"
              />
              <TeamTile
                linkTo="/zespol/prochnicka"
                img={data.prochnicka.childImageSharp.fluid}
                alt="Próchnicka"
                name="Barbara Próchnicka"
              />
            </div>

            <div className="columns">
              <TeamTile
                linkTo="/zespol/mroz"
                img={data.mroz.childImageSharp.fluid}
                alt="Mróz"
                name="mgr Ilona Mróz"
              />
            </div>
          </div>
        </Wraper>
      </Section>
    </Background>
  </Layout>
)

Zespol.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Zespol

export const pageQuery = graphql`
  query {
    front: file(relativePath: { eq: "BeataFront.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tesarz: file(relativePath: { eq: "MałgorzataTasarz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prochnicka: file(relativePath: { eq: "person3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tarara: file(relativePath: { eq: "KatarzynaTarara.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    krasowski: file(relativePath: { eq: "GrzegorzKrasowski.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wajda: file(relativePath: { eq: "RobertWajda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ziolkowska: file(relativePath: { eq: "MalgorzataZiolkowska.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mroz: file(relativePath: { eq: "Mroz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    osko: file(relativePath: { eq: "Osko.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundLogo: file(relativePath: { eq: "backgroundLogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
