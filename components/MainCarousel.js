import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import H1 from '../components/H1'

const HeroWrapper = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 60vh; // or whatever
  filter: brightness(60%);
`
const TextWraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PromoWraper = styled.div`
  height: 100%;
  max-width: 1120px;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0 1rem 0 1rem;
  }
`
const NoArrow = styled.div`
  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`
const WiecejButton = styled(Link)`
  align-self: flex-start;
  padding: 4px 16px;
  font-size: 24px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.$B5};
  color: #f2f2f2;
  transition: all 0.2s;
  :active,
  :hover {
    background: ${({ theme }) => theme.colors.$B6};
    color: #f2f2f2;
  }
  /* @media (min-width: 481px) and (max-width: 767px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  } */
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 2px 12px;
    font-size: 16px;
  }
`

const MainCarousel = ({ img, settings }) => (
  <NoArrow>
    <Slider {...settings}>
      <div>
        <HeroWrapper fluid={img} />
        <TextWraper>
          <PromoWraper>
            <H1 big white>
              Zapraszamy do zapoznania się naszą szeroką ofertą zabiegów
            </H1>
            <WiecejButton to="/zabiegi/laserowe-leczenie-żylaków-pniowych-evlt">
              Sprawdź
            </WiecejButton>
          </PromoWraper>
        </TextWraper>
      </div>
    </Slider>
  </NoArrow>
)

export default MainCarousel
