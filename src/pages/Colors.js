import React from 'react'
import styled from 'styled-components'
import theme from '../base/Theme'
import { Heading, Wrapper } from '../base'

const Swatch = styled.div`
  height: 100px;
  width: 10%;
  display: inline-block;
  background: ${props => props.bg};
`

const Colors = () => {
  return (
    <div>
      <Heading level={1} size="xxl" center pt="md" pb="lg">Brand Colors</Heading>
      <Heading level={2} size="lg" center pt="sm" pb="md">Primary</Heading>
        <Wrapper contain>
          <Swatch bg={theme.colors.primary}>
            {theme.colors.primary}
          </Swatch>
          <Swatch bg={theme.colors.primaryS10}>
            {theme.colors.primaryS10}
          </Swatch>
          <Swatch bg={theme.colors.primaryS20}>
            {theme.colors.primaryS20}
          </Swatch>
          <Swatch bg={theme.colors.primaryS30}>
            {theme.colors.primaryS30}
          </Swatch>
          <Swatch bg={theme.colors.primaryS40}>
            {theme.colors.primaryS40}
          </Swatch>
          <Swatch bg={theme.colors.primaryS50}>
            {theme.colors.primaryS50}
          </Swatch>
          <Swatch bg={theme.colors.primaryS60}>
            {theme.colors.primaryS60}
          </Swatch>
          <Swatch bg={theme.colors.primaryS70}>
            {theme.colors.primaryS70}
          </Swatch>
          <Swatch bg={theme.colors.primaryS80}>
            {theme.colors.primaryS80}
          </Swatch>
          <Swatch bg={theme.colors.primaryS90}>
            {theme.colors.primaryS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.primary}>
            {theme.colors.primary}
          </Swatch>
          <Swatch bg={theme.colors.primaryT10}>
            {theme.colors.primaryT10}
          </Swatch>
          <Swatch bg={theme.colors.primaryT20}>
            {theme.colors.primaryT20}
          </Swatch>
          <Swatch bg={theme.colors.primaryT30}>
            {theme.colors.primaryT30}
          </Swatch>
          <Swatch bg={theme.colors.primaryT40}>
            {theme.colors.primaryT40}
          </Swatch>
          <Swatch bg={theme.colors.primaryT50}>
            {theme.colors.primaryT50}
          </Swatch>
          <Swatch bg={theme.colors.primaryT60}>
            {theme.colors.primaryT60}
          </Swatch>
          <Swatch bg={theme.colors.primaryT70}>
            {theme.colors.primaryT70}
          </Swatch>
          <Swatch bg={theme.colors.primaryT80}>
            {theme.colors.primaryT80}
          </Swatch>
          <Swatch bg={theme.colors.primaryT90}>
            {theme.colors.primaryT90}
          </Swatch>
        </Wrapper>

      <Heading level={2} size="lg" center pt="sm" pb="md">Secondary</Heading>
      <Wrapper contain>
          <Swatch bg={theme.colors.secondary}>
            {theme.colors.secondary}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS10}>
            {theme.colors.secondaryS10}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS20}>
            {theme.colors.secondaryS20}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS30}>
            {theme.colors.secondaryS30}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS40}>
            {theme.colors.secondaryS40}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS50}>
            {theme.colors.secondaryS50}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS60}>
            {theme.colors.secondaryS60}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS70}>
            {theme.colors.secondaryS70}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS80}>
            {theme.colors.secondaryS80}
          </Swatch>
          <Swatch bg={theme.colors.secondaryS90}>
            {theme.colors.secondaryS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.secondary}>
            {theme.colors.secondary}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT10}>
            {theme.colors.secondaryT10}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT20}>
            {theme.colors.secondaryT20}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT30}>
            {theme.colors.secondaryT30}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT40}>
            {theme.colors.secondaryT40}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT50}>
            {theme.colors.secondaryT50}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT60}>
            {theme.colors.secondaryT60}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT70}>
            {theme.colors.secondaryT70}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT80}>
            {theme.colors.secondaryT80}
          </Swatch>
          <Swatch bg={theme.colors.secondaryT90}>
            {theme.colors.secondaryT90}
          </Swatch>
        </Wrapper>

        <Heading level={2} size="lg" center pt="sm" pb="md">Success</Heading>
      <Wrapper contain>
          <Swatch bg={theme.colors.success}>
            {theme.colors.success}
          </Swatch>
          <Swatch bg={theme.colors.successS10}>
            {theme.colors.successS10}
          </Swatch>
          <Swatch bg={theme.colors.successS20}>
            {theme.colors.successS20}
          </Swatch>
          <Swatch bg={theme.colors.successS30}>
            {theme.colors.successS30}
          </Swatch>
          <Swatch bg={theme.colors.successS40}>
            {theme.colors.successS40}
          </Swatch>
          <Swatch bg={theme.colors.successS50}>
            {theme.colors.successS50}
          </Swatch>
          <Swatch bg={theme.colors.successS60}>
            {theme.colors.successS60}
          </Swatch>
          <Swatch bg={theme.colors.successS70}>
            {theme.colors.successS70}
          </Swatch>
          <Swatch bg={theme.colors.successS80}>
            {theme.colors.successS80}
          </Swatch>
          <Swatch bg={theme.colors.successS90}>
            {theme.colors.successS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.success}>
            {theme.colors.success}
          </Swatch>
          <Swatch bg={theme.colors.successT10}>
            {theme.colors.successT10}
          </Swatch>
          <Swatch bg={theme.colors.successT20}>
            {theme.colors.successT20}
          </Swatch>
          <Swatch bg={theme.colors.successT30}>
            {theme.colors.successT30}
          </Swatch>
          <Swatch bg={theme.colors.successT40}>
            {theme.colors.successT40}
          </Swatch>
          <Swatch bg={theme.colors.successT50}>
            {theme.colors.successT50}
          </Swatch>
          <Swatch bg={theme.colors.successT60}>
            {theme.colors.successT60}
          </Swatch>
          <Swatch bg={theme.colors.successT70}>
            {theme.colors.successT70}
          </Swatch>
          <Swatch bg={theme.colors.successT80}>
            {theme.colors.successT80}
          </Swatch>
          <Swatch bg={theme.colors.successT90}>
            {theme.colors.successT90}
          </Swatch>
        </Wrapper>

      <Heading level={2} size="lg" center pt="sm" pb="md">Danger</Heading>
      <Wrapper contain>
          <Swatch bg={theme.colors.danger}>
            {theme.colors.danger}
          </Swatch>
          <Swatch bg={theme.colors.dangerS10}>
            {theme.colors.dangerS10}
          </Swatch>
          <Swatch bg={theme.colors.dangerS20}>
            {theme.colors.dangerS20}
          </Swatch>
          <Swatch bg={theme.colors.dangerS30}>
            {theme.colors.dangerS30}
          </Swatch>
          <Swatch bg={theme.colors.dangerS40}>
            {theme.colors.dangerS40}
          </Swatch>
          <Swatch bg={theme.colors.dangerS50}>
            {theme.colors.dangerS50}
          </Swatch>
          <Swatch bg={theme.colors.dangerS60}>
            {theme.colors.dangerS60}
          </Swatch>
          <Swatch bg={theme.colors.dangerS70}>
            {theme.colors.dangerS70}
          </Swatch>
          <Swatch bg={theme.colors.dangerS80}>
            {theme.colors.dangerS80}
          </Swatch>
          <Swatch bg={theme.colors.dangerS90}>
            {theme.colors.dangerS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.danger}>
            {theme.colors.danger}
          </Swatch>
          <Swatch bg={theme.colors.dangerT10}>
            {theme.colors.dangerT10}
          </Swatch>
          <Swatch bg={theme.colors.dangerT20}>
            {theme.colors.dangerT20}
          </Swatch>
          <Swatch bg={theme.colors.dangerT30}>
            {theme.colors.dangerT30}
          </Swatch>
          <Swatch bg={theme.colors.dangerT40}>
            {theme.colors.dangerT40}
          </Swatch>
          <Swatch bg={theme.colors.dangerT50}>
            {theme.colors.dangerT50}
          </Swatch>
          <Swatch bg={theme.colors.dangerT60}>
            {theme.colors.dangerT60}
          </Swatch>
          <Swatch bg={theme.colors.dangerT70}>
            {theme.colors.dangerT70}
          </Swatch>
          <Swatch bg={theme.colors.dangerT80}>
            {theme.colors.dangerT80}
          </Swatch>
          <Swatch bg={theme.colors.dangerT90}>
            {theme.colors.dangerT90}
          </Swatch>
        </Wrapper>

        <Heading level={2} size="lg" center pt="sm" pb="md">Warning</Heading>
      <Wrapper contain>
          <Swatch bg={theme.colors.warning}>
            {theme.colors.warning}
          </Swatch>
          <Swatch bg={theme.colors.warningS10}>
            {theme.colors.warningS10}
          </Swatch>
          <Swatch bg={theme.colors.warningS20}>
            {theme.colors.warningS20}
          </Swatch>
          <Swatch bg={theme.colors.warningS30}>
            {theme.colors.warningS30}
          </Swatch>
          <Swatch bg={theme.colors.warningS40}>
            {theme.colors.warningS40}
          </Swatch>
          <Swatch bg={theme.colors.warningS50}>
            {theme.colors.warningS50}
          </Swatch>
          <Swatch bg={theme.colors.warningS60}>
            {theme.colors.warningS60}
          </Swatch>
          <Swatch bg={theme.colors.warningS70}>
            {theme.colors.warningS70}
          </Swatch>
          <Swatch bg={theme.colors.warningS80}>
            {theme.colors.warningS80}
          </Swatch>
          <Swatch bg={theme.colors.warningS90}>
            {theme.colors.warningS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.warning}>
            {theme.colors.warning}
          </Swatch>
          <Swatch bg={theme.colors.warningT10}>
            {theme.colors.warningT10}
          </Swatch>
          <Swatch bg={theme.colors.warningT20}>
            {theme.colors.warningT20}
          </Swatch>
          <Swatch bg={theme.colors.warningT30}>
            {theme.colors.warningT30}
          </Swatch>
          <Swatch bg={theme.colors.warningT40}>
            {theme.colors.warningT40}
          </Swatch>
          <Swatch bg={theme.colors.warningT50}>
            {theme.colors.warningT50}
          </Swatch>
          <Swatch bg={theme.colors.warningT60}>
            {theme.colors.warningT60}
          </Swatch>
          <Swatch bg={theme.colors.warningT70}>
            {theme.colors.warningT70}
          </Swatch>
          <Swatch bg={theme.colors.warningT80}>
            {theme.colors.warningT80}
          </Swatch>
          <Swatch bg={theme.colors.warningT90}>
            {theme.colors.warningT90}
          </Swatch>
        </Wrapper>

        <Heading level={2} size="lg" center pt="sm" pb="md">Info</Heading>
      <Wrapper contain mb="sm">
          <Swatch bg={theme.colors.info}>
            {theme.colors.info}
          </Swatch>
          <Swatch bg={theme.colors.infoS10}>
            {theme.colors.infoS10}
          </Swatch>
          <Swatch bg={theme.colors.infoS20}>
            {theme.colors.infoS20}
          </Swatch>
          <Swatch bg={theme.colors.infoS30}>
            {theme.colors.infoS30}
          </Swatch>
          <Swatch bg={theme.colors.infoS40}>
            {theme.colors.infoS40}
          </Swatch>
          <Swatch bg={theme.colors.infoS50}>
            {theme.colors.infoS50}
          </Swatch>
          <Swatch bg={theme.colors.infoS60}>
            {theme.colors.infoS60}
          </Swatch>
          <Swatch bg={theme.colors.infoS70}>
            {theme.colors.infoS70}
          </Swatch>
          <Swatch bg={theme.colors.infoS80}>
            {theme.colors.infoS80}
          </Swatch>
          <Swatch bg={theme.colors.infoS90}>
            {theme.colors.infoS90}
          </Swatch>
        </Wrapper>

        <Wrapper contain>
          <Swatch bg={theme.colors.info}>
            {theme.colors.info}
          </Swatch>
          <Swatch bg={theme.colors.infoT10}>
            {theme.colors.infoT10}
          </Swatch>
          <Swatch bg={theme.colors.infoT20}>
            {theme.colors.infoT20}
          </Swatch>
          <Swatch bg={theme.colors.infoT30}>
            {theme.colors.infoT30}
          </Swatch>
          <Swatch bg={theme.colors.infoT40}>
            {theme.colors.infoT40}
          </Swatch>
          <Swatch bg={theme.colors.infoT50}>
            {theme.colors.infoT50}
          </Swatch>
          <Swatch bg={theme.colors.infoT60}>
            {theme.colors.infoT60}
          </Swatch>
          <Swatch bg={theme.colors.infoT70}>
            {theme.colors.infoT70}
          </Swatch>
          <Swatch bg={theme.colors.infoT80}>
            {theme.colors.infoT80}
          </Swatch>
          <Swatch bg={theme.colors.infoT90}>
            {theme.colors.infoT90}
          </Swatch>
        </Wrapper>
    </div>
  )
}

export { Colors }