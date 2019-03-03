import React, { Component } from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import H1 from '../components/H1'
import Underline from '../components/Underline'
import Background from '../components/BackgroundGradient'
import Section from '../components/Section'

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ProfileImage = styled(Img)`
  height: 20rem;
`

class Zespol extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title={'Zespół'}
          keywords={['nutrikon, Krasowski, zespół']}
          lang={'pl/PL'}
        />
        <Background>
          <Section>
            <Wraper>
              <H1 big>Nasz zespół</H1>
              <Underline short />
              <div className="container">
                <div className="columns">
                  <div className="column is-3">
                    <Link to="/zespol/tarara">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person4.childImageSharp.fluid
                              }
                              alt="Tatara"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">
                                lek. med. Katarzyna Tarara
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="column is-3">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          <ProfileImage
                            fluid={
                              this.props.data.person9.childImageSharp.fluid
                            }
                            alt="Ziółkowska"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-6">
                              lek. med. Małgorzata Ziółkowska
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-3">
                    <Link to="/zespol/krasowski">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person5.childImageSharp.fluid
                              }
                              alt="Krasowski"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">
                                dr n. med. Grzegorz Krasowski
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-3">
                    <Link to="/zespol/wajda">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person6.childImageSharp.fluid
                              }
                              alt="Wajda"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">
                                lek. med. Robert Wajda
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-3">
                    <Link to="/zespol/osko">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={this.props.data.osko.childImageSharp.fluid}
                              alt="Ośko"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">Dr Andrzej Ośko</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="column is-3">
                    <Link to="/zespol/front">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person1.childImageSharp.fluid
                              }
                              alt="Front"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">Beata Front</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="column is-3">
                    <Link to="/zespol/tasarz">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person2.childImageSharp.fluid
                              }
                              alt="Tasarz"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">Małgorzata Tesarz</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="column is-3">
                    <Link to="/zespol/prochnicka">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person3.childImageSharp.fluid
                              }
                              alt="Próchnicka"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">Barbara Próchnicka</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-3">
                    <Link to="/zespol/mroz">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image">
                            <ProfileImage
                              fluid={
                                this.props.data.person10.childImageSharp.fluid
                              }
                              alt="Mróz"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-6">mgr Ilona Mróz</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Wraper>
          </Section>
        </Background>
      </Layout>
    )
  }
}

export default Zespol

export const pageQuery = graphql`
  query {
    person1: file(relativePath: { eq: "BeataFront.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person2: file(relativePath: { eq: "MałgorzataTasarz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person3: file(relativePath: { eq: "person3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person4: file(relativePath: { eq: "KatarzynaTarara.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person5: file(relativePath: { eq: "GrzegorzKrasowski.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person6: file(relativePath: { eq: "RobertWajda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person7: file(relativePath: { eq: "AgnieszkaBuczkowska.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person8: file(relativePath: { eq: "AlinaWojcik.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person9: file(relativePath: { eq: "MalgorzataZiolkowska.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person10: file(relativePath: { eq: "Mroz.jpg" }) {
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
