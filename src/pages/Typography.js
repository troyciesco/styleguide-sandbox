import React from 'react'
import { Heading, Paragraph } from '../base'

const Typography = () => {
  return (
    <div>
        <Heading level={1} size="xxl" center pt="md" pb="lg">Typography</Heading>
        <Heading level={1} size="xxl" center pt="sm" pb="sm">H1 - H6: Poppins</Heading>
        <Heading level={2} size="xxl" center pt="sm" pb="sm">xxlarge is 5.6rem</Heading>
        <Heading level={2} size="xl" center pt="sm" pb="sm">xlarge is 4.8rem</Heading>
        <Heading level={3} size="lg" center pt="sm" pb="sm">large is 4rem</Heading>
        <Heading level={4} size="md" center pt="sm" pb="sm">medium is 3.2rem</Heading>
        <Heading level={5} size="sm" center pt="sm" pb="sm">small is 2.4rem</Heading>
        <Heading level={6} size="xs" center pt="sm" pb="sm">xsmall is 1.8rem</Heading>
        <Paragraph size="lg" center pt="sm" pb="sm">Level and size will not always correspond perfectly to each other. Level is a matter of semantics; size is a matter of style/design.</Paragraph>

        <Paragraph size="lg" color="success" center>p: Roboto size: large</Paragraph>
        <Paragraph size="md" center>p: Roboto size: medium</Paragraph>
        <Paragraph size="sm" center>p: Roboto size: small</Paragraph>

    </div>
  )
}

export { Typography }
