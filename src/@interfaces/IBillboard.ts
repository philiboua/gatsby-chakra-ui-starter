import { BoxProps } from "@chakra-ui/react"
import { ILink } from "./ILink"
import { IChildImageSharp } from "./IChildImageSharp"

export interface IBillboard extends BoxProps {
  caption?: string
  headline: string
  content: string
  callToAction: ILink[]
  image?: IChildImageSharp
  /**
   * impact the text color inside the pattern
   * if set to true, text color will be white
   * otherwise the color will the one define in the text component
   */
  bgColorWithHighSaturation?: boolean
}
