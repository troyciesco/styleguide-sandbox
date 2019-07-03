import React from "react"
import { Heading, Wrapper, FlexRow, Button, Modal, Text, Card, Box } from "../base"

const TeamInfos = [
	{
		title: "Troy Ciesco",
		subtitle: "Front-End Developer",
		content:
			"Troy is an established developer whose experience is based around using React and associated technologies to build and deploy scalable web apps within the Amazon Web Services framework. He has lead teams in building product launches that consistently procured six-figure revenues. While serving six years as a team leader in the US Army Reserves, Troy helped introduce more efficient processes for the entire company by using a number of technological solutions. ",
	},
	{ title: "test 2", subtitle: "subtest 2", content: "content 2" },
	{ title: "test 3", subtitle: "subtest 3", content: "content 3" },
]

const Cards = () => {
	return TeamInfos.map(teamInfo => (
		<Modal
			trigger={
				<Card title={teamInfo.title} subtitle={teamInfo.subtitle} style={{ cursor: "pointer" }} />
			}
			header={<Heading>{teamInfo.title}</Heading>}
			footer={<Heading>{teamInfo.subtitle}</Heading>}
		>
			<Text>{teamInfo.content}</Text>
		</Modal>
	))
}

const Elements = () => {
	let trigger = <Button size="medium">Modal Button</Button>
	let header = <Heading center>This is the Cool Header.</Heading>
	let footer = (
		<Heading center color="info">
			This is the Cool Footer.
		</Heading>
	)

	return (
		<Wrapper contain>
			<Heading size="lg" center pt="md">
				Buttons
			</Heading>
			<FlexRow pt="md">
				<Button mode="primary" bor="solid" elevation="4">
					Primary
				</Button>
				<Button mode="secondary">Secondary</Button>
				<Button mode="success">Success</Button>
				<Button mode="warning">Warning</Button>
				<Button mode="danger">Danger</Button>
				<Button mode="info">Info</Button>
				<Button disabled>Disabled</Button>
			</FlexRow>
			<FlexRow pt="md">
				<Button mode="primary" color="black" hoverColor="white" empty>
					Empty
				</Button>
				<Button size="small">Small</Button>
				<Button size="medium">Medium</Button>
				<Button size="large">Large</Button>
			</FlexRow>
			<FlexRow pt="md">
				<Modal
					trigger={trigger}
					header={header}
					footer={footer}
					bg="warning"
					bgHeader="warning"
					bgFooter="warning"
				>
					<Text pl="md">this is a test of the trigger.</Text>
				</Modal>
			</FlexRow>
			<Heading size="lg" center pt="md">
				Card
			</Heading>
			<FlexRow pt="md">
				<Card
					title="Test Title"
					subtitle="Test Subtitle"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in neque, facere blanditiis hic consectetur expedita fuga ipsum ut! Corporis!"
				/>
				<Card
					header={header}
					footer={footer}
					title="This card has a header"
					subtitle="It also has a footer"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in neque, facere blanditiis hic consectetur expedita fuga ipsum ut! Corporis!"
				/>
			</FlexRow>
			<FlexRow pt="md">
				<Cards />
			</FlexRow>
			<Heading size="lg" center pt="md">
				Box
			</Heading>
			<FlexRow pt="md" pb="lg">
				<Box
					as="div"
					radius="50%"
					elevation="3"
					bor="solid"
					height="100px"
					width="100px"
					bg="lightblue"
				/>
			</FlexRow>
		</Wrapper>
	)
}

export { Elements }
