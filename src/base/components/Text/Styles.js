import styled, { css } from "styled-components"

import theme from "../../Theme"

const { typography, spacingSizes, colors } = theme

// export const paragraphSizes = {
//   sm: typography.bodySmall,
//   md: typography.body,
//   lg: typography.bodyLarge,
// }

const fontSizes = {
	sm: "2.0rem",
	md: "4.0rem",
	lg: "6.0rem",
}

export const paragraphColors = {
	...colors,
	dark: colors.black,
	light: colors.gray10,
}
// ${p => paragraphSizes[p.size]};
export const StyledParagraph = styled.p`
	font-family: "Roboto", Helvetica, sans-serif;
	color: ${props => paragraphColors[props.color]};
	font-size: ${props => fontSizes[props.font.substr(0, 2)]};
	font-weight: ${props => (props.font.length > 2 ? `${props.font.substr(2)}00` : props.fontWeight)};
	${props => props.noMargin && "margin: 0"};
	${props => props.noMaxWidth && "max-width: none"};
	${spacingSizes};
	${props =>
		props.center &&
		css`
			text-align: center;
		`}
`
