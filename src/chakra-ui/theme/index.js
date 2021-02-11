import { extendTheme } from "@chakra-ui/react"
import {
  breakpoints,
  fonts,
  fontSizes,
  lineHeights,
  colors,
} from "./foundations"
import { Button } from "./components/button"

const siteTheme = extendTheme({
  breakpoints,
  fonts,
  fontSizes,
  lineHeights,
  colors,
  components: {
    Button,
  },
})

export default siteTheme
