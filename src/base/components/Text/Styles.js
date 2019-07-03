import styled, { css } from "styled-components"

import theme from "../../Theme"

const { typography, spacingSizes, colors } = theme

// export const paragraphSizes = {
//   sm: typography.bodySmall,
//   md: typography.body,
//   lg: typography.bodyLarge,
// }

const fontSizes = {
	xs: "1.2rem",
	sm: "1.6rem",
	md: "2.0rem",
	lg: "2.4rem",
	xl: "2.8rem",
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
	font-size: ${props =>
		(props.font.length <= 3) & !props.font.endsWith("px")
			? fontSizes[props.font.substr(0, 2)]
			: props.font};
	font-weight: ${props =>
		(props.font.length > 2) & !props.font.endsWith("px")
			? `${props.font.substr(2)}00`
			: props.fontWeight};
	${props => props.noMargin && "margin: 0"};
	${props => props.noMaxWidth && "max-width: none"};
	${spacingSizes};
	${props =>
		props.center &&
		css`
			text-align: center;
		`}
`
