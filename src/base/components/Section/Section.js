import React from 'react'
import SectionStyles from './Styles'

export const Section = ({ children, id, ...others}) => {
  return (
    <SectionStyles id={id} {...others}>
      {children}
    </SectionStyles>
  )
}
