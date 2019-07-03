import { keyframes, css } from "styled-components"

const rotateKeyframe = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const rotate = css`
	animation: ${rotateKeyframe} 4s linear infinite;
`

const animations = {
	rotate,
}

export default animations
