"use client"

import { useSignInModal } from "@/hooks/use-sign-in-modal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
} from "@/components/ui/responsive-dialog"
import SocialSignInButton from "@/components/auth/social-sign-in-button"

export default function SignInModal() {
  const { open, setOpen } = useSignInModal()

  return (
    <ResponsiveDialog open={open} onOpenChange={setOpen}>
      <ResponsiveDialogContent>
        <ResponsiveDialogHeader>
          <DialogTitle className="text-2xl text-left">Sign in</DialogTitle>
          <DialogDescription className="text-left">
            to continue to Nisarg Thakkar's blog
          </DialogDescription>
        </ResponsiveDialogHeader>

        <ResponsiveDialogBody>
          <SocialSignInButton />
        </ResponsiveDialogBody>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  )
}
