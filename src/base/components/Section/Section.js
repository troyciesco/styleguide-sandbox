import React from "react"
import { Box } from "../Box"

export const Section = ({ children, id, ...props }) => {
	return (
		<Box as="section" id={id} {...props}>
			{children}
		</Box>
	)
}
