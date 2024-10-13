"use client"

import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { AVATAR_URL } from "@/constants/author-data"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const Intro = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center">
      <div className="container flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex flex-col text-center gap-y-4 lg:w-1/2 lg:text-left">
          <motion.span
            className="text-2xl font-bold leading-[1.5] sm:text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {"Hey there, I'm"}
          </motion.span>
          <motion.span
            className="animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-2xl font-bold leading-[2.5] text-transparent sm:text-4xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {"Nisarg Thakkar"}
          </motion.span>
          <motion.span
            className="text-xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I'm passionate about building innovative products on the web keeping
            good design in mind. I like learning new technologies, and
            contributing to open source.
          </motion.span>
          <motion.div
            className="flex flex-col items-center justify-center gap-2 text-lg font-medium sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              href="#contact"
              className={cn(buttonVariants({ variant: "default" }), "group")}
            >
              Contact me
              <Icons.arrowRight className="w-4 h-4 ml-2 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/resume.pdf"
              aria-label="resume"
              download
              className={cn(buttonVariants({ variant: "outline" }), "group")}
            >
              My Resume
              <Icons.download className="w-4 h-4 ml-2 transition group-hover:translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
            delay: 1.2,
          }}
        >
          <div className="bg-dots absolute inset-0 rounded-full [mask-image:radial-gradient(black_55%,transparent_75%)]"></div>
          <Image
            src={AVATAR_URL}
            alt="Nisarg Thakkar"
            width="320"
            height="320"
            quality="95"
            priority={true}
            className="h-56 w-56 rounded-full border-[0.35rem] border-secondary object-cover shadow-xl saturate-0 filter sm:h-80 sm:w-80"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
