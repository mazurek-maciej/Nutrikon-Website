import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Layout from '../components/Layout/layout'

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const ContentWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin-bottom: 32px;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: auto 8px;
    margin-bottom: 32px;
  }
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 24px 0 16px 0;
  }
  li {
    margin-left: 16px;
  }
  & ul li {
    list-style: disc;
  }
`
const Rodo = ({ data }) => {
  const { body } = data
  const content = body.edges[0].node.html
  return (
    <Layout>
      <SEO
        title="RODO"
        keywords={['Nutrikon, przychodnia opole, rodo']}
        lang="pl/PL"
      />
      <Wraper>
        <ContentWraper>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ContentWraper>
      </Wraper>
    </Layout>
  )
}

Rodo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Rodo

export const pageQuery = graphql`
  query {
    body: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/" } }
    ) {
      totalCount
      edges {
        node {
          html
        }
      }
    }
  }
`
