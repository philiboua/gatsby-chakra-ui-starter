import React from "react"
import { navigate } from "gatsby"
import { Button } from "@chakra-ui/react"
import { useAuth, ProvideAuthProps } from "@src/components/_app/_store"

interface ProfileProps {
  path: string
}

export const Profile: React.FC<ProfileProps> = () => {
  const { signout } = useAuth() as ProvideAuthProps

  const handleSignOut = async () => {
    await signout()
    navigate("/")
  }
  return <Button onClick={handleSignOut}>signout</Button>
}
