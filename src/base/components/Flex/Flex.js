import React from "react"
import PropTypes from "prop-types"
import { Box } from "../Box"

import { FlexRowStyles, FlexColStyles, columnSizes } from "./Styles"

export const Flex = ({ children, ...props }) => {
	return (
		<Box flex {...props}>
			{children}
		</Box>
	)
}

export const FlexRow = ({ children, ...others }) => {
	return <FlexRowStyles {...others}>{children}</FlexRowStyles>
}

export const FlexCol = ({ children, xs, ...others }) => {
	return (
		<FlexColStyles xs={xs} {...others}>
			{children}
		</FlexColStyles>
	)
}

const ColumnSizes = Object.keys(columnSizes)

FlexCol.propTypes = {
	/** @ignore */
	/** Size of the Column on the xs screen size. Options are 1 through 12 */
	xs: PropTypes.oneOf(ColumnSizes),
	sm: PropTypes.oneOf(ColumnSizes),
	md: PropTypes.oneOf(ColumnSizes),
	lg: PropTypes.oneOf(ColumnSizes),
	xl: PropTypes.oneOf(ColumnSizes),
	xxl: PropTypes.oneOf(ColumnSizes),
}

Flex.defaultProps = {
	as: "div",
	dir: "row",
	justifyContent: "space-around",
}

FlexCol.defaultProps = {
	alignItems: "center",
}

FlexRow.defaultProps = {
	justifyContent: "space-around",
}
