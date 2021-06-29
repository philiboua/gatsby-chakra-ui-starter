import React from "react"
import { Grid, GridItem, VStack, Box } from "@chakra-ui/react"
import { Text, Slice } from "@src/components"
import { useBillboardContext } from "../../_context"

export const BillboardAlpha: React.FC<{
  slices?: typeof Slice[]
}> = ({ slices }) => {
  const contextProps = useBillboardContext()

  const caption = contextProps?.caption
  const headline = contextProps?.headline

  const gridStyles = {
    py: 8,
    justifyItems: {
      sm: "center",
      lg: "center",
    },
    gridTemplateColumns: {
      sm: "1fr",
      lg: "1fr",
    },
    gridTemplateRows: {
      sm: "auto auto",
      md: "auto auto",
      lg: "auto",
    },
    columnGap: { lg: "15px" },
  }

  const flexStyles = {
    justify: "center",
    height: "100%",
    alignItems: {
      sm: "center",
      lg: "center",
    },
    width: {
      sm: "100%",
    },
    maxWidth: "30rem",
  }

  return (
    <>
      <Grid {...gridStyles}>
        <GridItem>
          <VStack {...flexStyles} textAlign="center">
            {caption && <Text type="caption">{caption}</Text>}
            <Text type="headline.large" mt={0}>
              {headline}
            </Text>
            {slices?.find((slice: any) => slice.props.__TYPE === "body")}
          </VStack>
        </GridItem>
      </Grid>
      <Box width="100%">
        {slices?.find((slice: any) => slice.props.__TYPE === "footer")}
      </Box>
    </>
  )
}
