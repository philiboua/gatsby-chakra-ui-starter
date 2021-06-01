import React from "react"
import { User } from "@firebase/auth-types"

export interface ProvideAuthProps {
  user: User | null
  signin: (email: string, password: string) => Promise<User | null>
  signup: (email: string, password: string) => Promise<User | null>
  signout: () => Promise<boolean>
  sendPasswordResetEmail: (email: string) => Promise<boolean>
  confirmPasswordReset: (code: string, password: string) => Promise<boolean>
}

export const authContext = React.createContext<ProvideAuthProps | null>(null)
