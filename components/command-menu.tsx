"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
import { CommandIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { navbarLinks } from "@/config/navbarLinks"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command"

export default function CommandMenu({ ...props }: AlertDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="px-0 size-8"
        onClick={() => setOpen(true)}
        {...props}
      >
        <CommandIcon className="size-5" strokeWidth="1.5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {navbarLinks.map((link) =>
              link.content ? (
                link.content.map((subLink) => (
                  <MenuCommandItem
                    key={subLink.href}
                    value={subLink.title}
                    onSelect={() => {
                      runCommand(() => router.push(subLink.href))
                    }}
                  />
                ))
              ) : (
                <MenuCommandItem
                  key={link.href}
                  value={link.title}
                  onSelect={() => {
                    runCommand(() => router.push(link?.href as string))
                  }}
                />
              )
            )}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Icons.sun className="w-4 h-4 mr-2" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Icons.moon className="w-4 h-4 mr-2" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Icons.laptop className="w-4 h-4 mr-2" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

interface MenuCommandProps {
  value: string
  onSelect?: (value: string) => void
}

const MenuCommandItem = ({ value, onSelect }: MenuCommandProps) => (
  <CommandItem value={value} onSelect={onSelect}>
    <Icons.file className="w-4 h-4 mr-2" />
    <span>{value}</span>
  </CommandItem>
)
