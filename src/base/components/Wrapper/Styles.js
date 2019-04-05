import styled, { css } from 'styled-components'
import theme from '../../Theme'

const { contentContainer, mediaQueries, spacingSizes } = theme

const ContainerStyles = styled.div`
width: ${props => props.w}%;
${spacingSizes};
margin: 0 auto;

${props => props.contain && css`

    width: ${contentContainer.xs};
    
    ${mediaQueries.sm} {
        width: ${contentContainer.sm}
    }

    ${mediaQueries.md} {
        width: ${contentContainer.md}
    }
`}

${props => props.centerText && css`
    text-align: center;
`}
`

export default ContainerStyles