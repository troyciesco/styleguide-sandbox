import styled from "styled-components"

import theme from "../../Theme"

import { buttonStyles } from "../Button/Styles"

const { spacingSizes, borderOptions, elevations } = theme

export const boxElevations = {
	...elevations,
}
// Everything related to specific element styles has to come first, otherwise editing stuff later won't work
const boxBase = styled.span`
	${props => props.as === "button" && buttonStyles};
	align-content: ${props => props.alignContent};
	align-items: ${props => props.alignItems};
	align-self: ${props => props.alignSelf};
	background: ${props => props.bg};
	background-attachment: ${props => props.bgAttachment};
	background-blend-mode: ${props => props.bgBlendMode};
	background-clip: ${props => props.bgClip};
	background-color: ${props => props.bgColor};
	background-image: ${props => props.bgImg};
	background-origin: ${props => props.bgOrigin};
	background-position: ${props => props.bgPosition};
	background-repeat: ${props => props.bgRepeat};
	background-size: ${props => props.bgSize};
	background: ${props => props.bg};
	background: ${props => props.bg};
	background: ${props => props.bg};
	height: ${props => props.height};
	width: ${props => props.width};
	box-shadow: ${props => boxElevations[props.elevation]};
	z-index: ${props => props.zIndex};
	${spacingSizes};
	${borderOptions};
`

export const elements = {
	span: boxBase.withComponent("span"),
	div: boxBase.withComponent("div"),
	img: boxBase.withComponent("img"),
	vid: boxBase.withComponent("video"),
	section: boxBase.withComponent("section"),
	button: boxBase.withComponent("button"),
}
