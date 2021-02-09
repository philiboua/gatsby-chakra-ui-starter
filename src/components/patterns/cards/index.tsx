import React from "react"
import { ICardsContainer } from "@src/@interfaces"
import { Card, Container, Column, Row } from "@src/components"
import { isEven } from "@src/utils"

export const CardContainer: React.FC<ICardsContainer> = ({ content }) => {
  function getColumnStyles(): string[] {
    const numberOfCards: number = content.length
    if (isEven(numberOfCards)) {
      return ["sm4", "md3", "lg6"]
    }
    return ["sm4", "md3", "lg4"]
  }

  return (
    <Container>
      <Row wrap="wrap">
        {content.map(card => {
          return (
            <Column col={getColumnStyles()} key={card.id}>
              <Card
                headline={card.headline}
                body={card.body}
                link={card.link}
                mediaType={card.mediaType}
                media={card.media}
              />
            </Column>
          )
        })}
      </Row>
    </Container>
  )
}

export default CardContainer
