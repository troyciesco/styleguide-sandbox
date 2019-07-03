import styled from "styled-components"

import theme from "../../Theme"

import { buttonStyles } from "../Button/Styles"
import { FlexStyles } from "../Flex/Styles"

const { spacingSizes, borderOptions, animations, elevations } = theme

export const boxElevations = {
	...elevations,
}
// Everything related to specific element styles has to come first, otherwise editing stuff later won't work
const boxBase = styled.span`
	${props => props.as === "button" && buttonStyles};
	${props => props.flex && FlexStyles};
	${props => animations[props.animation]};
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
	box-shadow: ${props => boxElevations[props.elevation]};
	color: ${props => props.color};
	display: ${props => props.display};
	height: ${props => props.height};
	justify-content: ${props => props.justifyContent};
	text-align: ${props => props.textAlign};
	width: ${props => props.width};
	z-index: ${props => props.zIndex};
	top: ${props => props.top};
	right: ${props => props.right};
	bottom: ${props => props.bottom};
	left: ${props => props.left};
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
