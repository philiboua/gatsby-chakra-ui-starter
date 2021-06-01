/* eslint unicorn/consistent-function-scoping: "off", "@typescript-eslint/explicit-module-boundary-types": "off"   */

import { useState, useEffect } from "react"
import { Firebase } from "@src/services"
import { User } from "@firebase/auth-types"

const { auth } = Firebase

export const useProvideAuth = () => {
  const [user, setUser] = useState<null | User>(null)

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password).then(response => {
      setUser(response.user)
      return response.user
    })
  }

  const signup = (email: string, password: string) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user)
        return response.user
      })
  }
  const signout = () => {
    return auth.signOut().then(() => {
      setUser(null)
      return true
    })
  }
  const sendPasswordResetEmail = (email: string) => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true
    })
  }
  const confirmPasswordReset = (code: string, password: string) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true
    })
  }
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}
