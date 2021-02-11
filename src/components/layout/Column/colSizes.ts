/* Inspired from Bootstrap the grid system has been elaborated for three media breakpoint
  - Mobile : the grid contains 4 columns
  - tablet : the grid contains 6 columns
  - desktop : the grid contains 12 columns
*/

export interface GridProps {
  /**
   * small device, dimension can be found => src/chakra-ui/theme/foundations/breakpoints.js
   * possible values sm1 = 25% ; sm2 = 50% ; sm3 = 75% ; sm4 = 100%
   */
  sm: {
    [key: string]: string
  }
  /**
   * medium device, dimension can be found => src/chakra-ui/theme/foundations/breakpoints.js
   * possible values md1 = 16.67% ; md2 = 33.33% ; md3 = 50% ; md4 = 66.67% ; md5 = 83.33%  ; md6 = 100%
   */
  md: {
    [key: string]: string
  }
  /**
   * large device, dimension can be found => src/chakra-ui/theme/foundations/breakpoints.js
   * possible values lg1 = 08.33% ; lg2 = 16.67% ; lg3 = 25% ; lg4 = 33.33% ; lg5 = 41.67% ; lg6 = 50% ; lg7 = 58.33% ; lg8 = 66.67% ; lg9 = 75%  ; lg10 = 83% ; lg11 = 91.67% ; lg12 = 100%
   */
  lg: {
    [key: string]: string
  }
}

export const colSizes: GridProps = {
  sm: {
    sm1: "25%",
    sm2: "50%",
    sm3: "75%",
    sm4: "100%",
  },
  md: {
    md1: "16.666666667%",
    md2: "33.333333333%",
    md3: "50%",
    md4: "66.666666667%",
    md5: "83.333333333%",
    md6: "100%",
  },
  lg: {
    lg1: "08.333333333%",
    lg2: "16.666666667%",
    lg3: "25%",
    lg4: "33.333333333%",
    lg5: "41.666666667%",
    lg6: "50%",
    lg7: "58.333333333%",
    lg8: "66.666666667%",
    lg9: "75%",
    lg10: "83.333333333%",
    lg11: "91.666666667%",
    lg12: "100%",
  },
}
