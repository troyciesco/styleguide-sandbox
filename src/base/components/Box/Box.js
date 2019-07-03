import React from "react"
import PropTypes from "prop-types"

import { elements, boxElevations } from "./Styles"

export const Box = ({ children, bg, height, width, as, src, elevation, ...props }) => {
	const Element = elements[`${as}`]
	return (
		<Element
			bg={bg}
			height={height}
			width={width}
			src={src}
			as={as}
			elevation={elevation}
			{...props}
		>
			{children}
		</Element>
	)
}

export const BoxElevations = Object.keys(boxElevations)

Box.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	elevation: PropTypes.oneOf(BoxElevations),
}

Box.defaultProps = {
	as: "span",
	elevation: "0",
}
