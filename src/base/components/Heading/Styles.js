import styled, { css } from 'styled-components'

import theme from '../../Theme'

const { typography, spacingSizes, colors } = theme

export const headingSizes = {
  xxl: typography.headingXXLarge,
  xl: typography.headingXLarge,
  lg: typography.headingLarge,
  md: typography.headingMedium,
  sm: typography.headingSmall,
  xs: typography.headingXSmall,
  xxs: typography.headingXXSmall,
}

export const headingColors = {
  ...colors
}

const HeadingBase = styled.span`
  color: ${p => headingColors[p.color]};
  ${p => headingSizes[p.size]};
  ${spacingSizes};
  ${props => props.center && css`
    text-align: center;
`}
`

export const headingElements = {
  h1: HeadingBase.withComponent('h1'),
  h2: HeadingBase.withComponent('h2'),
  h3: HeadingBase.withComponent('h3'),
  h4: HeadingBase.withComponent('h4'),
  h5: HeadingBase.withComponent('h5'),
  h6: HeadingBase.withComponent('h6'),
}
