import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarList, NavbarItem, Sidebar } from '../base'


const Layout = () => {
  return (
    <Sidebar>
      <NavbarList>
        <Link to="/"><NavbarItem>Section One</NavbarItem></Link>
        <Link to="/colors/"><NavbarItem>Section Two</NavbarItem></Link>
        <Link to="/typography/"><NavbarItem>Section Three</NavbarItem></Link>
        <Link to="/elements/"><NavbarItem>Section Four</NavbarItem></Link>
        <Link to="/layout/"><NavbarItem>Section Five</NavbarItem></Link>
      </NavbarList>
    </Sidebar>
  )
}

export { Layout }
