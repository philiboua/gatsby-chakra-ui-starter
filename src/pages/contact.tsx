import React from "react"
import Text from "@components/Text"
import { Container, Row, Column } from "@src/components"

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
