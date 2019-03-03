import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import house from '../../images/HouseHeart.svg'

const TopHeaderContainer = styled.div`
  display: flex;
  font-size: 28px;
  padding: 10px 20px 0 20px;
  justify-content: space-between;
  background-color: #fff;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.$B6};
    transition: color 0.2s;
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.$B7};
  }
  & p {
    font-size: 18px;
  }
  ion-icon {
    font-size: 24px;
    margin-right: 5px;
    color: #${({ theme }) => theme.colors.$B6};
  }
`
const NutrikonLogo = styled.div`
  flex: 1;
`
const TopHeaderMobile = styled.p`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`
const House = styled.img`
  width: 3rem;
  height: 3rem;
`

const TopHeader = () => (
  <TopHeaderContainer>
    <NutrikonLogo>
      <Link to="/" className="main">
        Nutrikon
      </Link>
      <p>Przychodnia medyczna</p>
    </NutrikonLogo>
    <TopHeaderMobile>
      <House src={house} />
      Opole 45-075 ul. Krakowska 32A
    </TopHeaderMobile>
  </TopHeaderContainer>
)

export default TopHeader
