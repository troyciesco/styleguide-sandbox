import styled, { css } from 'styled-components'
import theme from '../../../Theme'

const { colors } = theme

export const navColors = {
    ...colors
  };

export const SidebarStyles = styled.div`
  width: 350px;
`

export const SidebarNavStyles = styled.nav`
    
    height: 100vh;
    display: inline-block;
    background: ${props => navColors[props.bg]};
    top: 0;
    left: 0;
    width: 280px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;

${props => props.show && css`
    transform: translateX(0);
`}

& ul {
    height: 50%;
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
}
`

export const SidebarArrowStyles = styled.i`
  cursor: pointer;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  margin-left: 15px;
  padding: 5px;
  transform: rotate(135deg);
  transition: transform 0.3s ease-out;

  ${props => props.sidebarClosed && css`
    transform: rotate(-45deg);
  `}
`



/* @media (min-width: 769px) {
        display: none;
} */