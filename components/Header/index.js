import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Navigation/navbar'
import MobileNavbar from '../Navigation/mobile-navbar'
import PoradnieDropMenu from '../Navigation/poradnie-drop-menu'
import OnasDropMenu from '../Navigation/onas-drop-menu'
import TopHeader from './top-header'

const ButtonWraper = styled.div`
  display: none;
  height: 3rem;
  @media (max-width: 768px) {
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
      isDropMobileActive: '',
      isOpen: false,
      isOnasActive: false,
      isPoradnieActive: false,
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideNavigationClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideNavigationClick)
  }

  showToggleOnas = () => {
    this.setState({
      isOnasActive: true,
    })
  }

  showTogglePoradnie = () => {
    this.setState({
      isPoradnieActive: true,
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
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  handleOutsideNavigationClick = event => {
    if (
      this.state.isOnasActive === true &&
      !this.toggleOnasActive.current.contains(event.target)
    ) {
      this.setState({
        isOnasActive: false,
      })
    } else if (
      this.state.isPoradnieActive === true &&
      !this.togglePoradnieActive.current.contains(event.target)
    ) {
      this.setState({
        isPoradnieActive: false,
      })
    }
  }

  render() {
    const {
      isOpen,
      isDropMobileActive,
      isPoradnieActive,
      isOnasActive,
    } = this.state
    return (
      <React.Fragment>
        <TopHeader />
        <nav>
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
            isOpen={isOpen}
            isDropMobileActive={isDropMobileActive}
            showToggleDropMobileNav={this.showToggleDropMobileNav}
          />

          <PoradnieDropMenu isPoradnieActive={isPoradnieActive} />

          <OnasDropMenu isOnasActive={isOnasActive} />
        </nav>
      </React.Fragment>
    )
  }
}

export default Index
