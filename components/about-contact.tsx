import Image from "next/image"
import { Mail } from "lucide-react"

import { Icons } from "@/components/app-icons"

export default function AboutContact() {
  return (
    <div className="flex flex-col-reverse gap-12 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-3">
        <p>
          {`Please do not hesitate to contact me if you have any queries or are interested in working with me!`}
        </p>
        <span>{"There are several ways to contact it:"}</span>
        <div className="flex items-center gap-4 mt-3">
          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="mailto:itsnisargthakkar@gmail.com"
          >
            <Mail size={18} />
            <span>Mail</span>
          </a>

          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="https://github.com/Nishu0"
          >
            <Icons.GitHub className="size-5" />
            <span>Github</span>
          </a>

          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="https://twitter.com/itznishuu_"
          >
            <Icons.Twitter className="size-5" />
            <span>Twitter</span>
          </a>

          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="https://warpcast.com/itsnishu"
          >
            <Icons.Warpcast className="size-5" />
            <span>Warpcast</span>
          </a>
          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="https://devpost.com/Nishu0"
          >
            <Icons.Devpost className="size-5" />
            <span>Devpost</span>
          </a>
          <a
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700"
            target="_blank"
            href="https://devfolio.co/@NISHU02"
          >
            <Icons.Devfolio className="size-5" />
            <span>Devfolio</span>
          </a>
        </div>
      </div>
    </div>
  )
}
