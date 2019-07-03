import { css } from "styled-components"
import theme from "../../Theme"

const { fontSizes, colors, fonts, spacingSizes } = theme

export const buttonModes = {
	primary: css`
		background-color: ${colors.primary};
		border: 1px solid ${colors.primary};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.primaryS20};
			border: 1px solid ${colors.primaryS20};
		}
	`,

	secondary: css`
		background-color: ${colors.secondary};
		border: 1px solid ${colors.secondary};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.secondaryS20};
			border: 1px solid ${colors.secondaryS20};
		}
	`,

	success: css`
		background-color: ${colors.success};
		border: 1px solid ${colors.success};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.successS20};
			border: 1px solid ${colors.successS20};
		}
	`,

	warning: css`
		background-color: ${colors.warning};
		border: 1px solid ${colors.warning};
		color: ${colors.dark};

		&:hover {
			background-color: ${colors.warningS20};
			border: 1px solid ${colors.warningS20};
		}
	`,

	danger: css`
		background-color: ${colors.danger};
		border: 1px solid ${colors.danger};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.dangerS20};
			border: 1px solid ${colors.dangerS20};
		}
	`,

	info: css`
		background-color: ${colors.info};
		border: 1px solid ${colors.info};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.infoS20};
			border: 1px solid ${colors.infoS20};
		}
	`,
}

export const buttonSizes = {
	small: css`
		${fontSizes.size0};
		padding: 0.5rem 1rem;
	`,
	medium: css`
		${fontSizes.size1};
		padding: 1rem 1.5rem;
	`,
	large: css`
		${fontSizes.size2};
		padding: 1rem 1.5rem;
	`,
}

export const buttonStyles = css`
	${props => buttonModes[props.mode]};
	${props => buttonSizes[props.size]};
	color: ${props => colors[props.color]};
	${spacingSizes};
	cursor: pointer;
	outline: none;
	text-transform: uppercase;
	position: relative;
	border-radius: 2px;
	${fonts.primaryRegular};
	transition: all 0.2s ease-out;
	${props =>
		props.empty &&
		css`
			background-color: transparent;
		`}
	${props =>
		props.center &&
		css`
			display: block;
			margin: 0 auto;
		`}

  &:active {
		top: 0.3rem;
	}

	&:hover {
		color: ${props => colors[props.hoverColor]};
	}

	&:disabled {
		background-color: ${colors.gray20};
		border: 1px solid ${colors.gray20};
		color: ${colors.gray60};
		cursor: not-allowed;
	}
`
