import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Navigation/navbar'
import MobileNavbar from '../Navigation/mobile-navbar'
import PoradnieDropMenu from '../Navigation/poradnie-drop-menu'
import OnasDropMenu from '../Navigation/onas-drop-menu'
import TopHeader from './top-header'

const Nav = styled.nav`
  @media (max-width: 1088px) {
    position: sticky !important;
    top: 0;
    z-index: 3;
    background-color: ${({ theme }) => theme.colors.$white};
    & > .hamburger {
      position: sticky !important;
      top: 0;
      z-index: 3;
    }
  }
`
const ButtonWraper = styled.div`
  display: none;
  height: 3rem;
  @media (max-width: 1088px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
const Button = styled.button`
  border: transparent;
  background: transparent;
  font-size: 1.5rem;
  margin-right: 1rem;
`

class Index extends Component {
  constructor(props) {
    super(props)
    this.togglePoradnieActive = React.createRef()
    this.toggleOnasActive = React.createRef()

    this.state = {
      isActive: '',
      dropActive: false,
      isMobileActive: '',
      isDropMobileActive: '',
      isOpen: false,
      isOnasActive: '',
      isPoradnieActive: '',
      hamburger: '',
    }
  }

  showToggleOnas = () => {
    this.setState({
      isOnasActive: 'active',
    })
  }

  showTogglePoradnie = () => {
    this.setState({
      isPoradnieActive: 'active',
    })
  }

  showToggleDropMobileNav = () => {
    this.setState({
      isDropMobileActive: 'active',
    })
    if (this.state.isDropMobileActive === 'active') {
      this.setState({ isDropMobileActive: '' })
    }
  }

  showToggleHamburger = () => {
    this.setState({
      isMobileActive: 'active',
      isOpen: true,
      hamburger: 'is-active',
    })
    if (this.state.isMobileActive === 'active') {
      this.setState({
        isMobileActive: '',
        isOpen: false,
        hamburger: '',
      })
    }
  }

  handleOutsideNavigationClick = event => {
    if (
      this.state.isOnasActive === 'active' &&
      !this.toggleOnasActive.current.contains(event.target)
    ) {
      this.setState({
        isOnasActive: '',
      })
    } else if (
      this.state.isPoradnieActive === 'active' &&
      !this.togglePoradnieActive.current.contains(event.target)
    ) {
      this.setState({
        isPoradnieActive: '',
      })
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideNavigationClick)
  }

  render() {
    return (
      <React.Fragment>
        <TopHeader />
        <Nav>
          <Navbar
            showTogglePoradnie={this.showTogglePoradnie}
            showToggleOnas={this.showToggleOnas}
            refPoradnie={this.togglePoradnieActive}
            refOnas={this.toggleOnasActive}
          />

          <ButtonWraper>
            <Button onClick={this.showToggleHamburger} type="button">
              <i className="fas fa-bars" />
            </Button>
          </ButtonWraper>

          <MobileNavbar
            isOpen={this.state.isOpen}
            isMobileActive={this.state.isMobileActive}
            isDropMobileActive={this.state.isDropMobileActive}
            showToggleDropMobileNav={this.showToggleDropMobileNav}
          />

          <PoradnieDropMenu isPoradnieActive={this.state.isPoradnieActive} />

          <OnasDropMenu isOnasActive={this.state.isOnasActive} />
        </Nav>
      </React.Fragment>
    )
  }
}

export default Index
