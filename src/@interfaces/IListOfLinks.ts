import { ListProps } from "@chakra-ui/react"
import { ILink } from "./ILink"

export interface IListOfLinks extends ListProps {
  /**
   * Array of Link components
   */
  content?: ILink[]
  bgColorWithHighSaturation?: boolean
}
