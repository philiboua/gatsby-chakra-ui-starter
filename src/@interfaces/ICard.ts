import { IChildImageSharp } from "./IChildImageSharp"

export interface ICard {
  id?: string
  mediaType?: string
  media?: IChildImageSharp
  headline: string
  body: string
  link?: {
    text: string
    asButton?: boolean
    href: string
    isExternal?: boolean
  }
}
