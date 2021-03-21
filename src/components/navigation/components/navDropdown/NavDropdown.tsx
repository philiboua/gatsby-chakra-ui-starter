/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { css, jsx } from "@emotion/react"
import { toggleContext } from "@src/contexts"

export const NavDropdown: React.FC<BoxProps> = ({ children, ...props }) => {
  const [toggle, setToggle] = useState(false)
  const [dropdown, setDropdown] = useState("")
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const handleFocusin = (e: Event) => {
      e.stopPropagation()
      if (toggle) {
        const { target } = e
        if (!(target as Element).classList.contains("subNavigationLink")) {
          setToggle(!toggle)
        }
      }
    }

    const getMainNavigation = document.querySelector(".main-menubar")
      ? document.querySelector(".main-menubar")
      : undefined

    getMainNavigation?.addEventListener("focusin", handleFocusin)

    return () => {
      getMainNavigation?.removeEventListener("focusin", handleFocusin)
    }
  }, [toggle, dropdown])

  const handleKeyDown = (e: React.KeyboardEvent<EventTarget>) => {
    const keyboardEventCode = e.nativeEvent.code

    if (keyboardEventCode === "Enter" || keyboardEventCode === "Space") {
      setToggle(!toggle)
      setDropdown((e.nativeEvent.target as Element).className)
    }
  }

  const handleMouseEnter = () => {
    if (toggle) {
      return
    }
    setToggle(!toggle)
  }

  const handleMouseLeave = () => {
    if (!toggle) {
      return
    }

    setToggle(!toggle)
  }

  return (
    <toggleContext.Provider value={toggle}>
      <Box
        ref={dropdownRef}
        className="dropdown"
        onKeyDown={e => handleKeyDown(e)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        as="li"
        css={css`
          list-style: none;
        `}
        role="menuitem"
        {...props}
      >
        {children}
      </Box>
    </toggleContext.Provider>
  )
}
