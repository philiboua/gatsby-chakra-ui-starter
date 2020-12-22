/** @jsx jsx */
import React, { useState } from "react"
import { Box, BoxProps, useMediaQuery } from "@chakra-ui/react"
import Text from "@components/Text"
import { css, jsx } from "@emotion/react"
import { motion } from "framer-motion"

interface IHamburgerButton extends BoxProps {
  data: {
    ariaLabel: string
    menuLabel: string
  }
}
const HamburgerButton: React.FC<IHamburgerButton> = ({ data }) => {
  const [toggle, setToggle] = useState(false)
  const [isTablet] = useMediaQuery("(min-width: 768px)")

  const { ariaLabel, menuLabel } = data

  // We use variants in order to animate the component,
  // based on the state of the hamburger button
  const firstHamburgerMenuBarVariant = {
    close: { y: 4, rotate: 0 },
    open: { rotate: 45, y: 0 },
  }
  const secondtHamburgerMenuBarVariant = {
    close: { y: -4, rotate: 0 },
    open: { rotate: -45, y: 0 },
  }

  const labelVariant = {
    close: { x: 0, opacity: 1, display: "block" },
    open: {
      x: -5,
      opacity: 0,
      transitionEnd: {
        display: "none",
        x: 0,
      },
    },
  }

  return (
    <button
      css={css`
          display: inline-flex;
          align-items: center;
          padding: 1rem;
          }
        `}
      type="button"
      aria-label={`${ariaLabel} is ${toggle ? "open" : "close"}`}
      aria-expanded={toggle}
      title={`${ariaLabel} toggle`}
      onClick={() => setToggle(!toggle)}
    >
      {isTablet ? (
        <Text
          pr={4}
          fontWeight="bold"
          type="caption"
          animate={toggle ? "open" : "close"}
          variants={labelVariant}
          display="none"
        >
          {menuLabel.toUpperCase()}
        </Text>
      ) : (
        ""
      )}
      <Box
        className="Hamburger"
        position="relative"
        width="1.5rem"
        height="1.5rem"
      >
        <motion.div
          css={css`
          position: absolute;
          height: 2px;
          width: 100%;
          background: black;
          transform-origin: 50% 50%;
          top:50%
          }
        `}
          animate={toggle ? "open" : "close"}
          variants={firstHamburgerMenuBarVariant}
        />
        <motion.div
          css={css`
          position: absolute;
          height: 2px;
          width: 100%;
          background: black;
          transform-origin: 50% 50%;
          top:50%
          }
        `}
          animate={toggle ? "open" : "close"}
          variants={secondtHamburgerMenuBarVariant}
        />
      </Box>
    </button>
  )
}

export default HamburgerButton
