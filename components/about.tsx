import React from "react"

import SectionHeading from "./ui/section-heading"

interface ExperienceItem {
  company: string
  role: string
  period: string
  logo: string
  link: string
}

const AboutMeAndExperience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Eternal Web",
      role: "Backend Engineer",
      period: "July 22 – Sept 22",
      logo: "https://avatars.githubusercontent.com/elevenlabs",
      link: "https://www.eternalsoftsolutions.com/",
    },
    {
      company: "eInfochip",
      role: "Full Stack Developer",
      period: "Jul 24 – Aug 24",
      logo: "https://avatars.githubusercontent.com/razorpay",
      link: "https://www.einfochips.com/",
    },
    {
      company: "Qiro",
      role: "Smart Contract Developer",
      period: "Jul 24 – Aug 24",
      logo: "https://cdn.prod.website-files.com/65d731fd76f2fa3e6aeb7b41/65e0ee9c15309bfead70f78f_Group%209.svg",
      link: "https://www.qiro.fi/",
    },
    {
      company: "Pixel Gaming",
      role: "Founder",
      period: "Jul 24 – Aug 24",
      logo: "https://avatars.githubusercontent.com/razorpay",
      link: "https://pixelgaming.us/",
    },
  ]

  return (
    <>
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col gap-8 mb-20 lg:flex-row">
        <div className="relative flex-1 p-8 transition-colors rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-800/40 dark:ring-gray-700/30">
          <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              About me
            </h2>
            <div className="mt-6 space-y-4 font-medium leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400">
              <p>
                Hey! I'm Nisarg, a creative 20-year-old who loves building Web3
                products.
              </p>
              <p>
                I have always been curious about how things work since my
                childhood. This curiosity led me to the world of programming and
                computer science. When I was 14 years old, I found myself
                completely immersed in the world of video games. My love for
                gaming sparked a curiosity about how these digital experiences
                were crafted. This curiosity led me to discover Python and
                Pygame, tools that opened up a new realm of possibilities for
                me.
              </p>
              <p className="md:block">
                Since then, I have been working on improving my skills in Web
                development and Smart Contract. I decided to dip my feet in web
                development because I wanted to build products that were easily
                accessible to anyone on any device. It always motivates me when
                I hear how my project has helped someone solve their problem.
                And then I got into the realm of the Web3.
              </p>
              <p className="lg:block">
                I completed my undergrad in Information Technology from Charusat
                University. Most of the things I build or learn is still driven
                by curiosity even today. My most recent obsession has been
                building design system, rust compiler and I'm always open to
                talk about smart contract and web development, user interface
                design and hackathons!
              </p>
            </div>
          </div>
        </div>

        <div className="relative p-8 transition-colors rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-800/40 dark:ring-gray-700/30 xl:w-4/12">
          <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Experience
            </h2>
            <div className="mt-7">
              <ol className="space-y-7">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 mt-6 overflow-hidden transition-colors rounded-full h-9 w-9 ring-4 ring-gray-100 dark:ring-gray-800 sm:mt-0 sm:h-10 sm:w-10">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        loading="lazy"
                        className="object-cover w-full h-full"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="relative w-full">
                      <div className="ml-5">
                        <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-4">
                          <a
                            className="-my-0.5 -ml-2 rounded-full px-2 py-0.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company}
                          </a>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {exp.period}
                          </div>
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                          {exp.role}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMeAndExperience
