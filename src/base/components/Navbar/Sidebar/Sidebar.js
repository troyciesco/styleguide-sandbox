import React, { Component } from 'react'
import { SidebarStyles, SidebarNavStyles, SidebarArrowStyles } from './Styles'

class Sidebar extends Component {
    constructor(props) {
          super(props)
          this.state = {
              sidebarOpen: true
          }
    }
    
    sidebarToggleClickHandler = () => {
          this.setState((prevState) => {
              return {sidebarOpen: !prevState.sidebarOpen}
          })
      }

    
    render() {
  
      return (
        <SidebarStyles sidebarClosed={!this.state.sidebarOpen}>
        <SidebarNavStyles show={this.state.sidebarOpen} bg={this.props.bg} {...this.props}>
            {this.props.children}
        </SidebarNavStyles>
        <SidebarArrowStyles sidebarClosed={!this.state.sidebarOpen} onClick={this.sidebarToggleClickHandler} />
        </SidebarStyles>
      )
  
    }
  }
  

  Sidebar.defaultProps = {
    bg: "gray60",
  };


  export { Sidebar }