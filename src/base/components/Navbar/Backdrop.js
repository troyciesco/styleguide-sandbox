import React from 'react'
import styled from 'styled-components'

const BackdropStyles = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 100;

    @media (min-width: 769px) {
        display: none;
    }
`
export const Backdrop = props => { 
    return (
        <BackdropStyles onClick={props.click} />
        )
}