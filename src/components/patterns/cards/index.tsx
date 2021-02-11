import React from "react"

import { Card, CardProps, Container, Column, Row } from "@src/components"
import { isEven } from "@src/utils"

interface CardsArray extends CardProps {
  /**
   * Identifies the card when we loop through the array
   */
  id?: string
}

export interface CardContainerProps {
  /**
   * Array of Card props
   */
  content: CardsArray[]
}

export const CardContainer: React.FC<CardContainerProps> = ({ content }) => {
  const numberOfCards: number = content.length

  return (
    <Container>
      <Row wrap="wrap">
        {content.map(card => {
          return (
            <Column
              col={
                isEven(numberOfCards)
                  ? ["sm4", "md3", "lg6"]
                  : ["sm4", "md3", "lg4"]
              }
              key={card.id}
            >
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
