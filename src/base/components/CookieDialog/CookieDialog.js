import React, { Component } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import styled from 'styled-components'
import { withCookies, Cookies } from 'react-cookie'
import { CookieDialogStyles, CookieDialogClose, CookieDialogHeader, CookieDialogFooter, CookieDialogBody, cookieDialogColors } from './Styles'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

const CookieDialogTrigger = styled.div`
`

class Dialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PrivacyAgreement: props.cookies.get('agreement'),
            showCookieDialog: true,

        }

        this.PrivacyAgreementHandler = this.PrivacyAgreementHandler.bind(this)
    }

    cookieDialogToggleClickHandler = () => {
        this.setState((prevState) => {
			return {showCookieDialog: !prevState.showCookieDialog}
		})
    }

    PrivacyAgreementHandler = (PrivacyAgreement) => {
      this.props.cookies.set('agreement', true, { path: '/'})
      this.setState({
        PrivacyAgreement,
        showCornerDialog: false
      })
    }

    render() {
    
        let header, footer

        if (this.props.header) {
        header = (this.props.header)
        }

        if (this.props.footer) {
            footer = (<CookieDialogFooter bgFooter={this.props.bgFooter}><Button onClick={this.PrivacyAgreementHandler} center>Accept</Button></CookieDialogFooter>)
        }

    return (
      <>
      { !this.state.PrivacyAgreement &&
        <>
        
        <CookieDialogTrigger onClick={this.CornerDialogToggleClickHandler}>
        {this.props.trigger}
        </CookieDialogTrigger>
        <CookieDialogStyles show={this.state.showCookieDialog}>
        <CookieDialogHeader bgHeader={this.props.bgHeader}>
        {header}
        <CookieDialogClose onClick={this.CookieDialogToggleClickHandler}>&times;</CookieDialogClose>
        </CookieDialogHeader>
        <CookieDialogBody bg={this.props.bg}>
          <Paragraph size="sm" pb="xs" center>This site uses cookies.</Paragraph>
          <Paragraph size="sm" pb="xs" color="info" center><a href={this.props.cookiePolicy}>Learn more here.</a></Paragraph>
        </CookieDialogBody>
        {footer}
        </CookieDialogStyles>
        </>
    }
    </>
    )
  }
}

export const CookieDialogColors = Object.keys(cookieDialogColors)

Dialog.propTypes = {
    /** @ignore */
    children: PropTypes.node,
    /** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
    bg: PropTypes.oneOf(CookieDialogColors),
    bgHeader: PropTypes.oneOf(CookieDialogColors),
    bgFooter: PropTypes.oneOf(CookieDialogColors),
    cookies: instanceOf(Cookies).isRequired
  }
  
  Dialog.defaultProps = {
    bg: 'white',
    bgHeader: 'white',
    bgFooter: 'white'
  }

export const CookieDialog = withCookies(Dialog)