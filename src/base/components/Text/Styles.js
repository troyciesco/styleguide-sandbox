import styled, { css } from 'styled-components'

import theme from '../../Theme'

const { typography, spacingSizes, colors } = theme

export const paragraphSizes = {
  sm: typography.bodySmall,
  md: typography.body,
  lg: typography.bodyLarge,
}

export const paragraphColors = {
  ...colors,
  dark: colors.black,
  light: colors.gray10
}

export const StyledParagraph = styled.p`
  font-family: 'Roboto', Helvetica, sans-serif;
  color: ${p => paragraphColors[p.color]};
  ${p => paragraphSizes[p.size]};
  ${p => p.noMargin && 'margin: 0'};
  ${p => p.noMaxWidth && 'max-width: none'};
  ${spacingSizes};
  ${props => props.center && css`
    text-align: center;
`}
`
