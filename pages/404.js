import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import HeartHouse from '../images/HouseHeart.svg'

const Wraper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`
const H1 = styled.h1`
  color: #004794;
  font-size: ${({ big }) => (big ? '3rem' : '2.5rem')};
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: ${({ big }) => (big ? '2rem' : '1.5rem')};
  }
`
const P = styled.p`
  color: #004794;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: ${({ big }) => (big ? '2rem' : '1.5rem')};
  }
`
const Img = styled.img`
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }
`

const NotFoundPage = () => (
  <Wraper>
    <Img src={HeartHouse} />
    <div>
      <H1 big>Przepraszamy, ale strona nie istnieje</H1>
      <P>Błąd 404</P>
      <P>Może to być spowodowane wprowadzeniem niepoprawnego adres.</P>
      <P>
        W tym celu, aby wrócić do strony głównej kliknij{' '}
        <Link to="/">link</Link>
      </P>
    </div>
  </Wraper>
)

export default NotFoundPage
