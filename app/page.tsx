'use client';

import { Button } from "@/components/ui/button"
import { signOut } from "@/actions/auth"

export default function Page() {
  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleRedirectToHabits = () => {
    window.location.href = "/habits"
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <Button variant="link" onClick={handleSignOut}>
          Sign Out
        </Button>

        <div>
          <Button onClick={handleRedirectToHabits}>Redirect to habits</Button>
        </div>
      </div>
    </div>
  )
}
