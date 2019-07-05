import { css } from "styled-components"

export const bg = css`
	@media (max-width: 667px) {
		background: ${props =>
			props.bg &&
			props.bg.includes("m:") &&
			props.bg.substring(props.bg.indexOf("m:") + 2, props.bg.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background: ${props =>
			props.bg &&
			props.bg.includes("t:") &&
			props.bg.substring(props.bg.indexOf("t:") + 2, props.bg.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background: ${props =>
			props.bg &&
			props.bg.includes("l:") &&
			props.bg.substring(props.bg.indexOf("l:") + 2, props.bg.indexOf(":l"))};
	}

	background: ${props => props.bg};
`

export const bgColor = css`
	@media (max-width: 667px) {
		background-color: ${props =>
			props.bgColor &&
			props.bgColor.includes("m:") &&
			props.bgColor.substring(props.bgColor.indexOf("m:") + 2, props.bgColor.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-color: ${props =>
			props.bgColor &&
			props.bgColor.includes("t:") &&
			props.bgColor.substring(props.bgColor.indexOf("t:") + 2, props.bgColor.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-color: ${props =>
			props.bgColor &&
			props.bgColor.includes("l:") &&
			props.bgColor.substring(props.bgColor.indexOf("l:") + 2, props.bgColor.indexOf(":l"))};
	}

	background-color: ${props => props.bgColor};
`

export const bgAttachment = css`
	@media (max-width: 667px) {
		background-attachment: ${props =>
			props.bgAttachment &&
			props.bgAttachment.includes("m:") &&
			props.bgAttachment.substring(
				props.bgAttachment.indexOf("m:") + 2,
				props.bgAttachment.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		background-attachment: ${props =>
			props.bgAttachment &&
			props.bgAttachment.includes("t:") &&
			props.bgAttachment.substring(
				props.bgAttachment.indexOf("t:") + 2,
				props.bgAttachment.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		background-attachment: ${props =>
			props.bgAttachment &&
			props.bgAttachment.includes("l:") &&
			props.bgAttachment.substring(
				props.bgAttachment.indexOf("l:") + 2,
				props.bgAttachment.indexOf(":l"),
			)};
	}

	background-attachment: ${props => props.bgAttachment};
`

export const bgBlendMode = css`
	@media (max-width: 667px) {
		background-blend-mode: ${props =>
			props.bgBlendMode &&
			props.bgBlendMode.includes("m:") &&
			props.bgBlendMode.substring(
				props.bgBlendMode.indexOf("m:") + 2,
				props.bgBlendMode.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		background-blend-mode: ${props =>
			props.bgBlendMode &&
			props.bgBlendMode.includes("t:") &&
			props.bgBlendMode.substring(
				props.bgBlendMode.indexOf("t:") + 2,
				props.bgBlendMode.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		background-blend-mode: ${props =>
			props.bgBlendMode &&
			props.bgBlendMode.includes("l:") &&
			props.bgBlendMode.substring(
				props.bgBlendMode.indexOf("l:") + 2,
				props.bgBlendMode.indexOf(":l"),
			)};
	}

	background-blend-mode: ${props => props.bgBlendMode};
`

export const bgClip = css`
	@media (max-width: 667px) {
		background-clip: ${props =>
			props.bgClip &&
			props.bgClip.includes("m:") &&
			props.bgClip.substring(props.bgClip.indexOf("m:") + 2, props.bgClip.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-clip: ${props =>
			props.bgClip &&
			props.bgClip.includes("t:") &&
			props.bgClip.substring(props.bgClip.indexOf("t:") + 2, props.bgClip.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-clip: ${props =>
			props.bgClip &&
			props.bgClip.includes("l:") &&
			props.bgClip.substring(props.bgClip.indexOf("l:") + 2, props.bgClip.indexOf(":l"))};
	}

	background-clip: ${props => props.bgClip};
`

export const bgImg = css`
	@media (max-width: 667px) {
		background-image: ${props =>
			props.bgImg &&
			props.bgImg.includes("m:") &&
			props.bgImg.substring(props.bgImg.indexOf("m:") + 2, props.bgImg.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-image: ${props =>
			props.bgImg &&
			props.bgImg.includes("t:") &&
			props.bgImg.substring(props.bgImg.indexOf("t:") + 2, props.bgImg.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-image: ${props =>
			props.bgImg &&
			props.bgImg.includes("l:") &&
			props.bgImg.substring(props.bgImg.indexOf("l:") + 2, props.bgImg.indexOf(":l"))};
	}

	background-image: ${props => props.bgImg};
`

export const bgOrigin = css`
	@media (max-width: 667px) {
		background-origin: ${props =>
			props.bgOrigin &&
			props.bgOrigin.includes("m:") &&
			props.bgOrigin.substring(props.bgOrigin.indexOf("m:") + 2, props.bgOrigin.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-origin: ${props =>
			props.bgOrigin &&
			props.bgOrigin.includes("t:") &&
			props.bgOrigin.substring(props.bgOrigin.indexOf("t:") + 2, props.bgOrigin.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-origin: ${props =>
			props.bgOrigin &&
			props.bgOrigin.includes("l:") &&
			props.bgOrigin.substring(props.bgOrigin.indexOf("l:") + 2, props.bgOrigin.indexOf(":l"))};
	}

	background-origin: ${props => props.bgOrigin};
`

export const bgPosition = css`
	@media (max-width: 667px) {
		background-position: ${props =>
			props.bgPosition &&
			props.bgPosition.includes("m:") &&
			props.bgPosition.substring(
				props.bgPosition.indexOf("m:") + 2,
				props.bgPosition.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		background-position: ${props =>
			props.bgPosition &&
			props.bgPosition.includes("t:") &&
			props.bgPosition.substring(
				props.bgPosition.indexOf("t:") + 2,
				props.bgPosition.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		background-position: ${props =>
			props.bgPosition &&
			props.bgPosition.includes("l:") &&
			props.bgPosition.substring(
				props.bgPosition.indexOf("l:") + 2,
				props.bgPosition.indexOf(":l"),
			)};
	}

	background-position: ${props => props.bgPosition};
`

export const bgRepeat = css`
	@media (max-width: 667px) {
		background-repeat: ${props =>
			props.bgRepeat &&
			props.bgRepeat.includes("m:") &&
			props.bgRepeat.substring(props.bgRepeat.indexOf("m:") + 2, props.bgRepeat.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-repeat: ${props =>
			props.bgRepeat &&
			props.bgRepeat.includes("t:") &&
			props.bgRepeat.substring(props.bgRepeat.indexOf("t:") + 2, props.bgRepeat.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-repeat: ${props =>
			props.bgRepeat &&
			props.bgRepeat.includes("l:") &&
			props.bgRepeat.substring(props.bgRepeat.indexOf("l:") + 2, props.bgRepeat.indexOf(":l"))};
	}

	background-repeat: ${props => props.bgRepeat};
`

export const bgSize = css`
	@media (max-width: 667px) {
		background-size: ${props =>
			props.bgSize &&
			props.bgSize.includes("m:") &&
			props.bgSize.substring(props.bgSize.indexOf("m:") + 2, props.bgSize.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		background-size: ${props =>
			props.bgSize &&
			props.bgSize.includes("t:") &&
			props.bgSize.substring(props.bgSize.indexOf("t:") + 2, props.bgSize.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		background-size: ${props =>
			props.bgSize &&
			props.bgSize.includes("l:") &&
			props.bgSize.substring(props.bgSize.indexOf("l:") + 2, props.bgSize.indexOf(":l"))};
	}

	background-size: ${props => props.bgSize};
`

export const alignContent = css`
	@media (max-width: 667px) {
		align-content: ${props =>
			props.alignContent &&
			props.alignContent.includes("m:") &&
			props.alignContent.substring(
				props.alignContent.indexOf("m:") + 2,
				props.alignContent.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		align-content: ${props =>
			props.alignContent &&
			props.alignContent.includes("t:") &&
			props.alignContent.substring(
				props.alignContent.indexOf("t:") + 2,
				props.alignContent.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		align-content: ${props =>
			props.alignContent &&
			props.alignContent.includes("l:") &&
			props.alignContent.substring(
				props.alignContent.indexOf("l:") + 2,
				props.alignContent.indexOf(":l"),
			)};
	}

	align-content: ${props => props.alignContent};
`

export const alignItems = css`
	@media (max-width: 667px) {
		align-items: ${props =>
			props.alignItems &&
			props.alignItems.includes("m:") &&
			props.alignItems.substring(
				props.alignItems.indexOf("m:") + 2,
				props.alignItems.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		align-items: ${props =>
			props.alignItems &&
			props.alignItems.includes("t:") &&
			props.alignItems.substring(
				props.alignItems.indexOf("t:") + 2,
				props.alignItems.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		align-items: ${props =>
			props.alignItems &&
			props.alignItems.includes("l:") &&
			props.alignItems.substring(
				props.alignItems.indexOf("l:") + 2,
				props.alignItems.indexOf(":l"),
			)};
	}

	align-items: ${props => props.alignItems};
`

export const alignSelf = css`
	@media (max-width: 667px) {
		align-self: ${props =>
			props.alignSelf &&
			props.alignSelf.includes("m:") &&
			props.alignSelf.substring(props.alignSelf.indexOf("m:") + 2, props.alignSelf.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		align-self: ${props =>
			props.alignSelf &&
			props.alignSelf.includes("t:") &&
			props.alignSelf.substring(props.alignSelf.indexOf("t:") + 2, props.alignSelf.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		align-self: ${props =>
			props.alignSelf &&
			props.alignSelf.includes("l:") &&
			props.alignSelf.substring(props.alignSelf.indexOf("l:") + 2, props.alignSelf.indexOf(":l"))};
	}

	align-self: ${props => props.alignSelf};
`

export const color = css`
	@media (max-width: 667px) {
		color: ${props =>
			props.color &&
			props.color.includes("m:") &&
			props.color.substring(props.color.indexOf("m:") + 2, props.color.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		color: ${props =>
			props.color &&
			props.color.includes("t:") &&
			props.color.substring(props.color.indexOf("t:") + 2, props.color.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		color: ${props =>
			props.color &&
			props.color.includes("l:") &&
			props.color.substring(props.color.indexOf("l:") + 2, props.color.indexOf(":l"))};
	}

	color: ${props => props.color};
`

export const display = css`
	@media (max-width: 667px) {
		display: ${props =>
			props.display &&
			props.display.includes("m:") &&
			props.display.substring(props.display.indexOf("m:") + 2, props.display.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		display: ${props =>
			props.display &&
			props.display.includes("t:") &&
			props.display.substring(props.display.indexOf("t:") + 2, props.display.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		display: ${props =>
			props.display &&
			props.display.includes("l:") &&
			props.display.substring(props.display.indexOf("l:") + 2, props.display.indexOf(":l"))};
	}

	display: ${props => props.display};
`

export const height = css`
	@media (max-width: 667px) {
		height: ${props =>
			props.height &&
			props.height.includes("m:") &&
			props.height.substring(props.height.indexOf("m:") + 2, props.height.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		height: ${props =>
			props.height &&
			props.height.includes("t:") &&
			props.height.substring(props.height.indexOf("t:") + 2, props.height.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		height: ${props =>
			props.height &&
			props.height.includes("l:") &&
			props.height.substring(props.height.indexOf("l:") + 2, props.height.indexOf(":l"))};
	}

	height: ${props => props.height};
`

export const minHeight = css`
	@media (max-width: 667px) {
		min-height: ${props =>
			props.minHeight &&
			props.minHeight.includes("m:") &&
			props.minHeight.substring(props.minHeight.indexOf("m:") + 2, props.minHeight.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		min-height: ${props =>
			props.minHeight &&
			props.minHeight.includes("t:") &&
			props.minHeight.substring(props.minHeight.indexOf("t:") + 2, props.minHeight.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		min-height: ${props =>
			props.minHeight &&
			props.minHeight.includes("l:") &&
			props.minHeight.substring(props.minHeight.indexOf("l:") + 2, props.minHeight.indexOf(":l"))};
	}

	min-height: ${props => props.minHeight};
`

export const overflow = css`
	@media (max-width: 667px) {
		overflow: ${props =>
			props.overflow &&
			props.overflow.includes("m:") &&
			props.overflow.substring(props.overflow.indexOf("m:") + 2, props.overflow.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		overflow: ${props =>
			props.overflow &&
			props.overflow.includes("t:") &&
			props.overflow.substring(props.overflow.indexOf("t:") + 2, props.overflow.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		overflow: ${props =>
			props.overflow &&
			props.overflow.includes("l:") &&
			props.overflow.substring(props.overflow.indexOf("l:") + 2, props.overflow.indexOf(":l"))};
	}

	overflow: ${props => props.overflow};
`

export const justifyContent = css`
	@media (max-width: 667px) {
		justify-content: ${props =>
			props.justifyContent &&
			props.justifyContent.includes("m:") &&
			props.justifyContent.substring(
				props.justifyContent.indexOf("m:") + 2,
				props.justifyContent.indexOf(":m"),
			)};
	}
	@media (min-width: 668px) {
		justify-content: ${props =>
			props.justifyContent &&
			props.justifyContent.includes("t:") &&
			props.justifyContent.substring(
				props.justifyContent.indexOf("t:") + 2,
				props.justifyContent.indexOf(":t"),
			)};
	}

	@media (min-width: 1025px) {
		justify-content: ${props =>
			props.justifyContent &&
			props.justifyContent.includes("l:") &&
			props.justifyContent.substring(
				props.justifyContent.indexOf("l:") + 2,
				props.justifyContent.indexOf(":l"),
			)};
	}

	justify-content: ${props => props.justifyContent};
`

export const position = css`
	@media (max-width: 667px) {
		position: ${props =>
			props.position &&
			props.position.includes("m:") &&
			props.position.substring(props.position.indexOf("m:") + 2, props.position.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		position: ${props =>
			props.position &&
			props.position.includes("t:") &&
			props.position.substring(props.position.indexOf("t:") + 2, props.position.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		position: ${props =>
			props.position &&
			props.position.includes("l:") &&
			props.position.substring(props.position.indexOf("l:") + 2, props.position.indexOf(":l"))};
	}

	position: ${props => props.position};
`

export const textAlign = css`
	@media (max-width: 667px) {
		text-align: ${props =>
			props.textAlign &&
			props.textAlign.includes("m:") &&
			props.textAlign.substring(props.textAlign.indexOf("m:") + 2, props.textAlign.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		text-align: ${props =>
			props.textAlign &&
			props.textAlign.includes("t:") &&
			props.textAlign.substring(props.textAlign.indexOf("t:") + 2, props.textAlign.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		text-align: ${props =>
			props.textAlign &&
			props.textAlign.includes("l:") &&
			props.textAlign.substring(props.textAlign.indexOf("l:") + 2, props.textAlign.indexOf(":l"))};
	}

	text-align: ${props => props.textAlign};
`

export const width = css`
	@media (max-width: 667px) {
		width: ${props =>
			props.width &&
			props.width.includes("m:") &&
			props.width.substring(props.width.indexOf("m:") + 2, props.width.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		width: ${props =>
			props.width &&
			props.width.includes("t:") &&
			props.width.substring(props.width.indexOf("t:") + 2, props.width.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		width: ${props =>
			props.width &&
			props.width.includes("l:") &&
			props.width.substring(props.width.indexOf("l:") + 2, props.width.indexOf(":l"))};
	}

	width: ${props => props.width};
`

export const zIndex = css`
	@media (max-width: 667px) {
		z-index: ${props =>
			props.zIndex &&
			props.zIndex.includes("m:") &&
			props.zIndex.substring(props.zIndex.indexOf("m:") + 2, props.zIndex.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		z-index: ${props =>
			props.zIndex &&
			props.zIndex.includes("t:") &&
			props.zIndex.substring(props.zIndex.indexOf("t:") + 2, props.zIndex.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		z-index: ${props =>
			props.zIndex &&
			props.zIndex.includes("l:") &&
			props.zIndex.substring(props.zIndex.indexOf("l:") + 2, props.zIndex.indexOf(":l"))};
	}

	z-index: ${props => props.zIndex};
`

export const top = css`
	@media (max-width: 667px) {
		top: ${props =>
			props.top &&
			props.top.includes("m:") &&
			props.top.substring(props.top.indexOf("m:") + 2, props.top.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		top: ${props =>
			props.top &&
			props.top.includes("t:") &&
			props.top.substring(props.top.indexOf("t:") + 2, props.top.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		top: ${props =>
			props.top &&
			props.top.includes("l:") &&
			props.top.substring(props.top.indexOf("l:") + 2, props.top.indexOf(":l"))};
	}

	top: ${props => props.top};
`

export const right = css`
	@media (max-width: 667px) {
		right: ${props =>
			props.right &&
			props.right.includes("m:") &&
			props.right.substring(props.right.indexOf("m:") + 2, props.right.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		right: ${props =>
			props.right &&
			props.right.includes("t:") &&
			props.right.substring(props.right.indexOf("t:") + 2, props.right.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		right: ${props =>
			props.right &&
			props.right.includes("l:") &&
			props.right.substring(props.right.indexOf("l:") + 2, props.right.indexOf(":l"))};
	}

	right: ${props => props.right};
`

export const bottom = css`
	@media (max-width: 667px) {
		bottom: ${props =>
			props.bottom &&
			props.bottom.includes("m:") &&
			props.bottom.substring(props.bottom.indexOf("m:") + 2, props.bottom.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		bottom: ${props =>
			props.bottom &&
			props.bottom.includes("t:") &&
			props.bottom.substring(props.bottom.indexOf("t:") + 2, props.bottom.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		bottom: ${props =>
			props.bottom &&
			props.bottom.includes("l:") &&
			props.bottom.substring(props.bottom.indexOf("l:") + 2, props.bottom.indexOf(":l"))};
	}

	bottom: ${props => props.bottom};
`

export const left = css`
	@media (max-width: 667px) {
		left: ${props =>
			props.left &&
			props.left.includes("m:") &&
			props.left.substring(props.left.indexOf("m:") + 2, props.left.indexOf(":m"))};
	}
	@media (min-width: 668px) {
		left: ${props =>
			props.left &&
			props.left.includes("t:") &&
			props.left.substring(props.left.indexOf("t:") + 2, props.left.indexOf(":t"))};
	}

	@media (min-width: 1025px) {
		left: ${props =>
			props.left &&
			props.left.includes("l:") &&
			props.left.substring(props.left.indexOf("l:") + 2, props.left.indexOf(":l"))};
	}

	left: ${props => props.left};
`
