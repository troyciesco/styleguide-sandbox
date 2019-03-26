import React from 'react'
import styled from 'styled-components'

const DrawerToggleButtonStyles = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`

const DrawerToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: black;
`

export const DrawerToggleButton = (props) => {
    return (

        <DrawerToggleButtonStyles onClick={props.click}>
        <DrawerToggleButtonLine />
        <DrawerToggleButtonLine />
        <DrawerToggleButtonLine />
    </DrawerToggleButtonStyles>
        )
}