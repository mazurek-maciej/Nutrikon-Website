import React, { Component } from 'react'
import Navbar from '../Navigation/navbar'
import MobileNavbar from '../Navigation/mobile-navbar'
import PoradnieDropMenu from '../Navigation/poradnie-drop-menu'
import OnasDropMenu from '../Navigation/onas-drop-menu'
import styled from 'styled-components'
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
  display: flex;
  .hamburger {
    margin-right: 1.5rem;
  }
`

class Index extends Component {
  constructor(props) {
    super(props)

    this.toggleOutsideClick = this.toggleOutsideClick.bind(this)
    this.showToggleDropMobileNav = this.showToggleDropMobileNav.bind(this)
    this.showToggleHamburger = this.showToggleHamburger.bind(this)
    this.showToggleOnas = this.showToggleOnas.bind(this)
    this.showTogglePoradnie = this.showTogglePoradnie.bind(this)

    this.togglePoradnieActive = React.createRef()
    this.toggleOnasActive = React.createRef()

    this.state = {
      isActive: '',
      dropActive: false,
      isMobileActive: '',
      isDropMobileActive: '',
      isOpen: false,
      oNasIsActive: '',
      isPoradnieActive: '',
      hamburger: '',
    }
  }

  showToggleOnas() {
    this.setState({
      oNasIsActive: 'active',
    })
  }
  showTogglePoradnie() {
    this.setState({
      isPoradnieActive: 'active',
    })
  }
  showToggleDropMobileNav() {
    this.setState({
      isDropMobileActive: 'active',
    })
    if (this.state.isDropMobileActive === 'active') {
      this.setState({ isDropMobileActive: '' })
    }
  }
  showToggleHamburger() {
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
  // Ukrywanie nawigacji poradnie-top/onas-drop po kliknięciu poza nawigacją
  toggleOutsideClick(event) {
    if (
      this.state.oNasIsActive === 'active' &&
      !this.toggleOnasActive.current.contains(event.target)
    ) {
      this.setState({
        oNasIsActive: '',
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
    window.addEventListener('click', this.toggleOutsideClick)
  }

  render() {
    return (
      <>
        <TopHeader />
        <Nav>
          <Navbar
            showTogglePoradnie={this.showTogglePoradnie}
            showToggleOnas={this.showToggleOnas}
            refPoradnie={this.togglePoradnieActive}
            refOnas={this.toggleOnasActive}
          />

          <ButtonWraper>
            <button
              onClick={this.showToggleHamburger}
              className={`hamburger hamburger--spring ${this.state.hamburger}`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </ButtonWraper>

          <MobileNavbar
            isOpen={this.state.isOpen}
            isMobileActive={this.state.isMobileActive}
            isDropMobileActive={this.state.isDropMobileActive}
            showToggleDropMobileNav={this.showToggleDropMobileNav}
          />

          <PoradnieDropMenu isPoradnieActive={this.state.isPoradnieActive} />

          <OnasDropMenu oNasIsActive={this.state.oNasIsActive} />
        </Nav>
      </>
    )
  }
}

export default Index
