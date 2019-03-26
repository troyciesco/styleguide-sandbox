import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Meta from "./Meta"
import GlobalStyle from './GlobalStyle'
import theme from './Theme'
import SiteNavbar from "../components-site/SiteNavbar";
import SiteFooter from "../components-site/SiteFooter";
import { Backdrop } from "../components-site/Backdrop";
import { SideDrawer } from "../components-site/SideDrawer";

const StyledPage = styled.div`
	/* background: #E2EAF0; */
`

const Inner = styled.div`
`

class Page extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sideDrawerOpen: false
		}
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
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<SiteNavbar drawerClickHandler={this.drawerToggleClickHandler} />
					<SideDrawer show={this.state.sideDrawerOpen} />
					{backdrop}
					<Inner>{this.props.children}</Inner>
					<SiteFooter />
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page
