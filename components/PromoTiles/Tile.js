import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import shape from '../../images/adv-shape-v3.svg'

const TileWraper = styled.div`
  flex: 1;
  display: flex;
  height: 400px;
  max-width: 280px;
  max-height: 360px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 10px;
`
const TopWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background: url(${shape}) no-repeat bottom;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const BottomWraper = styled.div`
  flex: 1;
  width: 100%;
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const BottomWraperContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`
const Description = styled.span`
  align-self: flex-start;
  font-size: 1.2rem;
  padding-left: 24px;
`
const LinkButton = styled(Link)`
  align-self: center;
  justify-self: flex-end;
  padding: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.$B6};
  color: ${({ theme }) => theme.colors.$textBright};
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2),
    inset 0px 2px 10px rgba(255, 255, 255, 0.5);
  :hover,
  :active {
    color: ${({ theme }) => theme.colors.$B10};
    box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.3);
  }
`
const Img = styled.img`
  width: 120px;
`

const Tile = ({ text, destination, img }) => (
  <TileWraper>
    <TopWraper>
      <Img src={img} />
    </TopWraper>
    <BottomWraper>
      <BottomWraperContent>
        <Description>{text}</Description>
        <LinkButton to={`/zabiegi/${destination}`}>
          Dowiedz się więcej
        </LinkButton>
      </BottomWraperContent>
    </BottomWraper>
  </TileWraper>
)

Tile.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Tile
