import styled, { css } from "styled-components"
import theme from '../../Theme'

const { colors } = theme

export const modalColors = {
    ...colors
}

export const ModalStyles = styled.div`
    z-index: 200;
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 50%;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease-out;

${props => props.show && css`
    transform: translateY(0); 
    opacity: 1;
    top: 15%;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
`}
`

export const ModalHeader = styled.div`
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${props => modalColors[props.bgHeader]};
`
export const ModalBody = styled.div`
    background: ${props => modalColors[props.bg]};
    position: relative;
    width: 100%;
    min-height: 50px;
`

export const ModalFooter = styled.div`
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${props => modalColors[props.bgFooter]};
`

export const ModalClose = styled.span`
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