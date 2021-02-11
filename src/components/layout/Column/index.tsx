import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

import { colSizes } from "./colSizes"

type SmallDeviceColumnSizes = "sm1" | "sm2" | "sm3" | "sm4"

type MediumDeviceColumnSizes = "md1" | "md2" | "md3" | "md4" | "md5" | "md6"

type LargeDeviceColumnSizes =
  | "lg1"
  | "lg2"
  | "lg3"
  | "lg4"
  | "lg5"
  | "lg6"
  | "lg7"
  | "lg8"
  | "lg9"
  | "lg10"
  | "lg11"
  | "lg12"

export interface ColumnProps extends BoxProps {
  /**
   * define the width of the column
   */
  col?: (
    | LargeDeviceColumnSizes
    | MediumDeviceColumnSizes
    | SmallDeviceColumnSizes
  )[]
}

export const Column: React.FC<ColumnProps> = ({ children, col, ...props }) => {
  // in case the prop col is not provided by developer
  // display the column with 100%

  if (col?.length === undefined)
    return (
      <Box px="15px" w="100%" className="column" {...props}>
        {children}
      </Box>
    )
  // in case the prop is present
  // display the column based on the size choosen
  const [mobile, tablet, desktop] = col

  const columnWidthForMobile =
    typeof mobile === "undefined" ? "100%" : colSizes.sm[mobile]
  const columnWidthForIpad =
    typeof tablet === "undefined" ? columnWidthForMobile : colSizes.md[tablet]
  const columnWidthForDesktop =
    typeof desktop === "undefined" ? columnWidthForIpad : colSizes.lg[desktop]

  return (
    <Box
      className="column"
      px="15px"
      w={{
        sm: columnWidthForMobile,
        md: columnWidthForIpad,
        lg: columnWidthForDesktop,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
