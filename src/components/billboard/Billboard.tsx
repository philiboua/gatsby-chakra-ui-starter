import React from "react"
import { BoxProps } from "@chakra-ui/react"
import { Text } from "@src/components"
import { getChildByType } from "@src/utils"
import { ProvideBillboardContext } from "./_context/components"

export interface ChildImageSharpProps {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      base64: string
      src: string
      srcSet: string
      sizes: string
    }
  }
}

export interface BillBoardBaseProps extends BoxProps {
  /**
   * background Image
   */
  backgroundImage?: string
  /**
   * background Video URL
   */
  backgroundVideo?: string
  /**
   * background Color
   */
  backgroundColor?: string
  /**
   * Caption to be use on top of the headline
   */
  caption?: string
  /**
   * Headline
   */
  headline: string
  /**
   * Stack the content and media grid
   */
  stackGridItemsOnDestkop?: boolean
}

export const Billboard: React.FC<BillBoardBaseProps> = ({
  caption,
  headline,
  children,
  backgroundColor,
  backgroundVideo,
  backgroundImage,
}) => {
  return (
    <ProvideBillboardContext
      headline={headline}
      caption={caption}
      backgroundColor={backgroundColor}
      backgroundVideo={backgroundVideo}
      backgroundImage={backgroundImage}
    >
      {children}
    </ProvideBillboardContext>
  )
}

export default Billboard
