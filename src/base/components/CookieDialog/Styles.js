import styled, { css } from "styled-components"
import theme from '../../Theme'

const { colors } = theme

export const cookieDialogColors = {
    ...colors
}

export const CookieDialogStyles = styled.div`
    z-index: 200;
    position: fixed;
    bottom: 20px;
    right: 15px;
    margin: 0 auto;
    width: 250px;
/* 
${props => props.show && css`
    transform: translateY(0); 
    top: 15%;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
`} */
`

export const CookieDialogHeader = styled.div`
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${props => cookieDialogColors[props.bgHeader]};
`
export const CookieDialogBody = styled.div`
    background: ${props => cookieDialogColors[props.bg]};
    position: relative;
    width: 100%;
    min-height: 50px;
`

export const CookieDialogFooter = styled.div`
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${props => cookieDialogColors[props.bgFooter]};
`

export const CookieDialogClose = styled.span`
    color: ${colors.gray70};
    position: absolute;
    top: 1px;
    right: 15px;
    font-size: 28px;
    font-weight: bold;
    transition: all 0.3s ease-out;

    &:hover, :focus {
        color: ${colors.gray90};
        text-decoration: none;
        cursor: pointer;
    }
`