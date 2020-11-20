import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { colSizes } from "./colSizes"

interface IColumn extends BoxProps {
  col: string[]
}

export const Column = ({ children, col, ...props }: IColumn) => {
  // in case the prop col is not provided by developer
  // display the column with 100%

  if (col?.length === undefined)
    return (
      <Box size="100%" {...props}>
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
      size={{
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
