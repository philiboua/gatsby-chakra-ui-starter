import { ICard } from "./ICard"

interface ICardsArray extends ICard {
  /**
   * Identifies the card when we loop through the array
   */
  id?: string
}

export interface ICardsContainer {
  /**
   * Array of Card props
   */
  content: ICardsArray[]
}
