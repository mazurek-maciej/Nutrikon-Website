import React from 'react'
import styled from 'styled-components'
import H2 from '../../components/H2'
import img1 from '../../images/adv-image.svg'
import img2 from '../../images/veins2.svg'
import promoLogo from '../../images/PromoLogo.svg'
import { media } from '../../utils/media'
import Tile from '../Tile'

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 900px;
  width: 100%;
  ${media.phone`
    flex-direction: column;
    align-items: center;
  `}
`
const PromoLogo = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`
const PromoWraper = styled.div`
  display: flex;
  align-items: baseline;
`

const ZabiegiTiles = () => {
  return (
    <div>
      <section className="section has-text-centered">
        <Wraper>
          <PromoWraper>
            <PromoLogo src={promoLogo} />
            <H2 big>Polecane zabiegi</H2>
          </PromoWraper>
          <TilesContainer>
            <Tile text="Mezoterapia" destination="mezoterapia" img={img1} />
            <Tile text="Skleroterapia" destination="skleroterapia" img={img2} />
            <Tile
              text="Laserowe leczenie EVLT"
              destination="laserowe-leczenie-żylaków-pniowych-evlt"
              img={img2}
            />
          </TilesContainer>
        </Wraper>
      </section>
    </div>
  )
}

export default ZabiegiTiles
