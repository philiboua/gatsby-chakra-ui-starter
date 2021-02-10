/** @jsx jsx */
import React from "react"

import { Link as GatsbyLink } from "gatsby-plugin-intl"
import { useTheme } from "@chakra-ui/react"
import { IGatsbyLinkAsButton } from "@src/@interfaces"

import { css, jsx } from "@emotion/react"

const GatsbyLinkAsButton: React.FC<IGatsbyLinkAsButton> = ({
  sizeButton,
  href,
  children,
}) => {
  // Get chakra ui theme object
  const { colors, radii, lineHeights, fontWeights, fontSizes } = useTheme()

  const getPaddingValue = () => {
    switch (sizeButton) {
      case "sm":
        return "6px 8px"
      case "md":
        return "12px 16px"
      case "lg":
        return "16px 32px"
      default:
        return "12px 16px"
    }
  }

  const getFontSize = sizeButton === "sm" ? fontSizes.sm : fontSizes.md
  return (
    <GatsbyLink
      to={href}
      css={css`
        text-decoration: none;
        color: ${colors.white};
        background: ${colors.gamma.alertDark};
        font-weight: ${fontWeights.bold};
        padding: ${getPaddingValue()};
        border-radius: ${radii.sm};
        line-height: ${lineHeights[4]};
        font-size: ${getFontSize};
        transition: all 250ms;
        display: inline-flex;
        align-items: center;
        &:hover {
          text-decocation: none;
          background: ${colors.gamma.alertLight};
        }
      `}
    >
      {children}
    </GatsbyLink>
  )
}

export default GatsbyLinkAsButton
