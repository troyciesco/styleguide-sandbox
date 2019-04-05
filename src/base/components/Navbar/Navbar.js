import React, { Component } from 'react'
import { NavbarStyles, NavbarListStyles, NavbarItemStyles, NavbarLogoStyles, NavbarToggleStyles, SideDrawerStyles } from "./Styles"
import { Backdrop } from './Backdrop'
import { DrawerToggleButton } from './DrawerToggleButton'

export const NavbarLogo = ({ children, ...props }) => {
  return <NavbarLogoStyles {...props}>{children}</NavbarLogoStyles>
}

export const NavbarList = ({ children, ...props }) => {
  return <NavbarListStyles {...props}>{children}</NavbarListStyles>
}

export const NavbarItem = ({ children, ...props }) => {
  return <NavbarItemStyles {...props}>{children}</NavbarItemStyles>
}

export const Dropdown = ({ children, ...props }) => {
  return <NavbarItemStyles {...props}>{children}</NavbarItemStyles>
}

export const NavbarToggle = ({ children, ...props }) => {
  return <NavbarToggleStyles {...props}>{children}</NavbarToggleStyles>
}

class Navbar extends Component {
  constructor(props) {
		super(props)
		this.state = {
      sideDrawerOpen: false,
      isFixed: this.props.fixed,
      isTop: true,
      bg: this.props.topBg || this.props.bg,
      scrollBg: this.props.scrollBg,
      boxShadow: false
		}
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (this.props.fixed && this.state.scrollBg) {

        const isTop = window.scrollY < 100
        if (isTop !== this.state.isTop) {
          this.setState({ isTop })
        }
        if (!isTop) {
          this.setState({bg: this.state.scrollBg})
          this.setState({ boxShadow: true })
        } else {
          this.setState({bg: this.props.topBg || this.props.bg})
          this.setState({ boxShadow: false })
        }
      }
    })
  }
  
  drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		})
	}

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false})
  }
  
  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <>
      <NavbarStyles drawerClickHandler={this.drawerToggleClickHandler} {...this.props} bg={this.state.bg} scrollBg={this.props.scrollBg} boxShadow={this.state.boxShadow}>
              <NavbarToggle>
                <DrawerToggleButton click={this.drawerToggleClickHandler} />
              </NavbarToggle>
              {this.props.children}
            </NavbarStyles>
            <SideDrawerStyles show={this.state.sideDrawerOpen} onClick={this.drawerToggleClickHandler}>
            {this.props.children}
            </SideDrawerStyles>
            {backdrop}
      </>
    )

  }
}

export { Navbar }

Navbar.defaultProps = {
  bg: "transparent",
  color: "dark",
  size: "medium"
}

NavbarItem.defaultProps = {
  color: "dark",
  size: "medium",
  hover: "accent"
}

Dropdown.defaultProps = {
	color: 'dark',
	size: 'large',
	hover: "accent"
}

NavbarList.defaultProps = {
	color: 'dark',
	size: 'medium',
}
