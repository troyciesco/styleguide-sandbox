import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { CookiesProvider } from "react-cookie"
import theme from "./base/Theme"
import GlobalStyle from "./base/GlobalStyle"
import { Navbar, NavbarList, NavbarItem, CookieDialog, Sidebar } from "./base"
import { Home, Colors, Typography, Elements, Layout } from "./pages"

const StyledApp = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-areas:
		"side main"
		"side main"
		"side main";
	grid-template-columns: 250px 1fr;

	.side {
		grid-area: side;
		background: lightblue;
	}
	.main {
		grid-area: main;
		background: wheat;
	}
`
class App extends Component {
	render() {
		return (
			<CookiesProvider>
				<ThemeProvider theme={theme}>
					<Router>
						<StyledApp>
							<Sidebar className="side">
								<NavbarList>
									<Link to="/">
										<NavbarItem>Home</NavbarItem>
									</Link>
									<Link to="/colors/">
										<NavbarItem>Colors</NavbarItem>
									</Link>
									<Link to="/typography/">
										<NavbarItem>Typography</NavbarItem>
									</Link>
									<Link to="/elements/">
										<NavbarItem>Elements</NavbarItem>
									</Link>
									<Link to="/layout/">
										<NavbarItem>Layout</NavbarItem>
									</Link>
								</NavbarList>
							</Sidebar>
							<div className="main">
								<Navbar pt="xs" pb="xs" fixed scrollBg="secondaryT20">
									<NavbarList>
										<Link to="/">
											<NavbarItem>Home</NavbarItem>
										</Link>
										<Link to="/colors/">
											<NavbarItem>Colors</NavbarItem>
										</Link>
										<Link to="/typography/">
											<NavbarItem>Typography</NavbarItem>
										</Link>
										<Link to="/elements/">
											<NavbarItem>Elements</NavbarItem>
										</Link>
										<Link to="/layout/">
											<NavbarItem>Layout</NavbarItem>
										</Link>
									</NavbarList>
								</Navbar>
								<CookieDialog
									bgHeader="warningT50"
									bg="warningT50"
									bgFooter="warningT50"
									cookiePolicy="/"
									footer
								/>
								<GlobalStyle />
								<Route path="/" exact component={Home} />
								<Route path="/colors/" component={Colors} />
								<Route path="/typography/" component={Typography} />
								<Route path="/elements/" component={Elements} />
								<Route path="/layout/" component={Layout} />
							</div>
						</StyledApp>
					</Router>
				</ThemeProvider>
			</CookiesProvider>
		)
	}
}

export default App
