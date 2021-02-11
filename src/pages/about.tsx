import React from "react"
import { Container, Row, Column, Text } from "@src/components"

const About = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4"]}>
          <Text type="headline.large">About us</Text>
        </Column>
      </Row>
    </Container>
  )
}

export default About
