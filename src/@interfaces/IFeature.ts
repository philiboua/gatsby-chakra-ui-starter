import { IText } from "./IText"
import { ILink } from "./ILink"
import { IChildImageSharp } from "./IChildImageSharp"

export interface IFeature {
  /**
   * Used in the Features Component when we iterate through an array of features
   */
  id?: string
  /**
   * Image or illustration
   */
  featureImage: IChildImageSharp
  headline: IText
  content: IText
  caption?: IText
  link?: ILink
  reverseGridItemsOrder?: boolean
  bgColorWithHighSaturation?: boolean
}
