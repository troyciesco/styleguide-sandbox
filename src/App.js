import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import theme from './base/Theme'
import GlobalStyle from './base/GlobalStyle'
import { Navbar, NavbarList, NavbarItem, CookieDialog } from './base'
import { Home, Colors, Typography, Elements, Layout } from './pages'

class App extends Component {
  
  render() {
    
    return (
      <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar pt="xs" pb="xs" fixed scrollBg="secondaryT20">
              <NavbarList>
              <Link to="/"><NavbarItem>Home</NavbarItem></Link>
              <Link to="/colors/"><NavbarItem>Colors</NavbarItem></Link>
              <Link to="/typography/"><NavbarItem>Typography</NavbarItem></Link>
              <Link to="/elements/"><NavbarItem>Elements</NavbarItem></Link>
              <Link to="/layout/"><NavbarItem>Layout</NavbarItem></Link>
              </NavbarList>
            </Navbar>
            <CookieDialog bgHeader="warningT50" bg="warningT50" bgFooter="warningT50" cookiePolicy="/" footer />
          <GlobalStyle />
              <Route path="/" exact component={Home} />
              <Route path="/colors/" component={Colors} />
              <Route path="/typography/" component={Typography} />
              <Route path="/elements/" component={Elements} />
              <Route path="/layout/" component={Layout} />
          </div>
        </Router>
      </ThemeProvider>
      </CookiesProvider>
    )
  }
}

export default App
