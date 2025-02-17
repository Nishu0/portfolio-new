import { Roboto_Mono as FontCode, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"

import { Metadata } from "next"
import { TRPCReactProvider } from "@/trpc/react"
import { Analytics } from "@vercel/analytics/react"
import { SessionProvider } from "next-auth/react"

import { env } from "@/env"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/layout/footer"
import MainNavbar from "@/components/layout/main-nav"
import Logo from "@/components/logo"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
})

// Font files can be colocate inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Nisarg Thakkar",
      url: "https://www.nisargthakkar.co/",
    },
  ],
  creator: "Nisarg Thakkar",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: siteConfig.ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.handle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = env.NODE_ENV === "production"

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontCode.variable,
          fontHeading.variable
        )}
      >
        <TRPCReactProvider>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/noise.png)] opacity-40 dark:opacity-60" />
              <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md bg-background/90">
                  <div className="container lg:max-w-4xl xl:max-w-6xl">
                    <div className="flex items-center py-6 space-x-8 h-20">
                      <Logo />
                      <MainNavbar />
                    </div>
                  </div>
                </header>
                <main className="container flex-1 py-6 md:py-10 lg:max-w-4xl xl:max-w-6xl">
                  {children}
                  <Analytics />
                </main>
                <Footer />
              </div>
              <Toaster position="bottom-right" className="!font-sans" />
              <ScrollToTopButton />
              <TailwindIndicator />
            </ThemeProvider>
          </SessionProvider>
        </TRPCReactProvider>

        {isProduction && (
          <script
            defer
            src="https://analytics.us.umami.is/script.js"
            data-website-id="6cc85752-c450-4ab2-933a-d216b91c0416"
          ></script>
        )}
      </body>
    </html>
  )
}
