import React from 'react'
import { CardStyles, CardHeaderStyles, CardContentStyles, CardFooterStyles } from './Styles'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'

export const Card = ({children, title, subtitle, content, ...props}) => {
    let header, footer

    if (props.header) {
        header = (props.header)
    }

    if (props.footer) {
        footer = (props.footer)
    }

    return <CardStyles {...props}>
        <CardHeaderStyles>
            {header}
        </CardHeaderStyles>
        <CardContentStyles>
            <Heading size="sm" pad="xxs">{title}</Heading>
            <Heading size="xs" pad="xxs">{subtitle}</Heading>
            <Paragraph pad="xxs">{content}</Paragraph>
        </CardContentStyles>
        <CardFooterStyles>
            {footer}
        </CardFooterStyles>
    </CardStyles>
}

