import { BoxProps } from "@chakra-ui/react"

export interface IHamburgerButton extends BoxProps {
  /**
   *  Provides information to screen readers, if value is menu => (menu open | menu close) will be read
   */
  ariaLabel: string
  /**
   * Menu Label. Visible only on desktop
   */
  menuLabel: string
}
