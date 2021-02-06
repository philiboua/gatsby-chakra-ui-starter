import React from "react"

import { Container, Row, Column, Text } from "@src/components"

const Contact = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4"]}>
          <Text type="headline.large">Contact</Text>
        </Column>
      </Row>
    </Container>
  )
}

export default Contact
