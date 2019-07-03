import { css } from "styled-components"

const borders = {
	default: "none",
	solid: "5px solid blue",
}
// const radius = {
// 	round: "50%",
// }
const borderOptions = css`
	border: ${props => borders[props.bor] || borders.default};
	border-top: ${props => borders[props.bt]};
	border-right: ${props => borders[props.br]};
	border-bottom: ${props => borders[props.bb]};
	border-left: ${props => borders[props.bl]};
	border-radius: ${props => props.rad};
	border-top-left-radius: ${props => props.radtl};
	border-top-right-radius: ${props => props.radtr};
	border-bottom-right-radius: ${props => props.radbr};
	border-bottom-left-radius: ${props => props.radbl};
`

export default borderOptions
