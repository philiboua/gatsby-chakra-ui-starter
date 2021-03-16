export const Button = {
  baseStyle: {
    lineHeight: "1",
    borderRadius: "sm",
    height: "auto",
    fontSize: "16px",
  },
  sizes: {
    lg: {
      fontSize: "md",
    },
  },
  variants: {
    tranparent: () => ({
      bg: "transparent",
      color: "white",
      _hover: {
        bg: "transparent",
        color: "white",
      },
    }),
    solid: () => ({
      bg: "alpha.alertLight",
      color: "white",
      _hover: {
        bg: "alpha.activeLight",
        color: "white",
      },
    }),
    outline: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "alpha.alertLight",
      _hover: {
        bg: "alert.neutralLight",
        color: "alpha.alertLight",
      },
    }),
    ghost: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "none",
      _hover: {
        bg: "alert.neutralLight",
        color: "alpha.alertLight",
      },
    }),
    link: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "none",
      _hover: {
        bg: "white",
        color: "alpha.alertLight",
      },
    }),
  },
}
