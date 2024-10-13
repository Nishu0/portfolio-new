import { siteConfig } from "@/config/site"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-sm leading-loose text-center md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-2"
          >
            Nisarg Thakkar{" "}
          </a>{" "}
          with ☕and ❤️
        </p>
      </div>
    </footer>
  )
}

export default Footer
