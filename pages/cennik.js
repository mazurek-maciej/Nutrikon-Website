import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import { naglowki } from '../utils/cennik-naglowki'
import Layout from '../components/Layout/layout'
import { BackgroundGradient } from '../components/Backgrounds'
import H1 from '../components/Tags/H1'
import Underline from '../components/Underline'
import Section from '../components/Section'
import CennikTable from '../components/CennikTable'

const CennikContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Collapsible {
    background-color: #004794;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: #fff;
  }
`
const CollapsibleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.$white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 0.2);
  span {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.$white};
    margin: 10px 0 10px 0;
    cursor: pointer;
  }
  p {
    border: 1px solid ${({ theme }) => theme.colors.$primaryBlue};
  }
`
const CennikHeadings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.$textBright};
  ion-icon {
    color: ${({ theme }) => theme.colors.$white};
  }
  h2 {
    font-size: 1.4rem;
  }
`

const Cennik = ({ data }) => (
  <Layout>
    <SEO
      title="Cennik"
      keywords={[
        'mezoterapia, przychodnia, skleroterapia, elvt, cennik, zabiegi',
      ]}
      lang="pl/PL"
    />
    <BackgroundGradient>
      <Section>
        <Fade>
          <CennikContainer>
            <H1>Cennik Naszej Przychodni</H1>
            <Underline short red />
            <CollapsibleContainer>
              <Collapsible open trigger={heds(naglowki[0])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi1} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[1])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi2} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[2])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi3} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[3])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi4} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[4])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi5} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[5])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi6} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[6])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi7} />
              </Collapsible>
              <Collapsible trigger={heds(naglowki[7])}>
                <CennikTable zabieg={data.utilsJson.Zabiegi8} />
              </Collapsible>
            </CollapsibleContainer>
          </CennikContainer>
        </Fade>
      </Section>
    </BackgroundGradient>
  </Layout>
)

function heds(name) {
  return (
    <CennikHeadings>
      <h2>{name}</h2>
      <ion-icon name="arrow-dropdown" />
    </CennikHeadings>
  )
}

export const IndexQuery = graphql`
  query dataJson {
    utilsJson {
      Zabiegi1 {
        id
        nazwa
        value
      }
      Zabiegi2 {
        id
        nazwa
        value
      }
      Zabiegi3 {
        id
        nazwa
        value
      }
      Zabiegi4 {
        id
        nazwa
        value
      }
      Zabiegi5 {
        id
        nazwa
        value
      }
      Zabiegi6 {
        id
        nazwa
        value
      }
      Zabiegi7 {
        id
        nazwa
        value
      }
      Zabiegi8 {
        id
        nazwa
        value
      }
    }
  }
`

Cennik.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Cennik
