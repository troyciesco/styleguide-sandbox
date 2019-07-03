import styled from "styled-components"

import theme from "../../Theme"

const { spacingSizes, elevations } = theme

export const boxElevations = {
	...elevations,
}

const elementBase = styled.span`
	background: ${props => props.bg};
	height: ${props => props.height};
	width: ${props => props.width};
	box-shadow: ${props => boxElevations[props.elevation]};
	${spacingSizes};
`

export const elements = {
	span: elementBase.withComponent("span"),
	div: elementBase.withComponent("div"),
	img: elementBase.withComponent("img"),
	section: elementBase.withComponent("section"),
}
