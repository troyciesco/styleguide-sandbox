import styled, { css } from "styled-components"

import theme from '../../Theme'

const { typography, colors, fonts, spacingSizes } = theme

export const navSizes = {
  fine: typography.finePrint,
  small: typography.bodySmall,
  medium: typography.body,
  large: typography.bodyLarge,
}

export const navColors = {
  ...colors
}

export const navHoverColors = navColors

export const navBgColors = navColors

export const NavbarStyles = styled.header`
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${props => navColors[props.bg]};
  ${spacingSizes};
  z-index: 1;
  transition: all 0.3s ease-out;

  ${props => props.fixed && css`
    position: fixed;
    top: 0;
    width: 100%;
  `}
`

export const NavbarItemStyles = styled.li`
  text-align: center;
  cursor: pointer;
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  position: relative;
  ${fonts.primaryRegular};
  ${spacingSizes};

  &:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: -5px;
  left: 0;
  background-color: ${colors.primary};
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out 0s;
}

  &:hover {
    color: ${p => navHoverColors[p.hover]};

    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  .active {
    color: ${p => navHoverColors[p.hover]};
    &:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: -5px;
  left: 0;
  background-color: ${colors.secondary};
  transition: all 0.2s ease-in-out 0s;
}
  }


`

export const NavbarLogoStyles = styled.div`
  width: 12%;
  cursor: pointer;
`

export const NavbarListStyles = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex: 0 1 30%;
  justify-content: space-between;
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  ${spacingSizes};

  @media (max-width: 768px) {
    display: none;
  }

  ${props =>
    props.subList === true &&
    css`
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      left: 0;
      margin-top: 0;
      visibility: hidden;
      display: none;

      ${NavbarItemStyles}:hover & {
        visibility: visible;
        opacity: 1;
        display: flex;
        color: black;
        background-color: ${navColors.light};
      }
    `}
`

export const NavbarToggleStyles = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`

export const SideDrawerStyles = styled.nav`
    
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;

${props => props.show && css`
    transform: translateX(0);
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
`}

& ul {
    height: 80%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

& li {
    margin-left: 3rem;
}

& a {
    color: purple;
    text-decoration: none;
    font-size: 1.6rem;
}

& a:hover,
& a:active {
    color: blue;
}

@media (min-width: 769px) {
        display: none;
}
`
