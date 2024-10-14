"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  IMAGE_EIGHT,
  IMAGE_ELEVEN,
  IMAGE_FIVE,
  IMAGE_FORTNEEN,
  IMAGE_FOUR,
  IMAGE_NINE,
  IMAGE_ONE,
  IMAGE_SEVEN,
  IMAGE_SIX,
  IMAGE_TEN,
  IMAGE_THIRTNEEN,
  IMAGE_THREE,
  IMAGE_TWELEVE,
  IMAGE_TWO,
} from "@/constants/author-data"

interface CarouselImage {
  src: string
  alt: string
}

const images: CarouselImage[] = [
  { src: IMAGE_ELEVEN, alt: "Image 11" },
  { src: IMAGE_TWELEVE, alt: "Image 12" },
  { src: IMAGE_ONE, alt: "Image 1" },
  { src: IMAGE_TWO, alt: "Image 2" },
  { src: IMAGE_THREE, alt: "Image 3" },
  { src: IMAGE_FOUR, alt: "Image 4" },
  { src: IMAGE_FIVE, alt: "Image 5" },
  { src: IMAGE_SIX, alt: "Image 6" },
  { src: IMAGE_SEVEN, alt: "Image 7" },
  { src: IMAGE_EIGHT, alt: "Image 8" },
  { src: IMAGE_NINE, alt: "Image 9" },
  { src: IMAGE_TEN, alt: "Image 10" },
  { src: IMAGE_THIRTNEEN, alt: "Image 13" },
  { src: IMAGE_FORTNEEN, alt: "Image 14" },
]

const InfiniteImageCarousel: React.FC = () => {
  const [offset, setOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const totalWidth = container.scrollWidth
    const viewportWidth = container.offsetWidth
    const imageWidth = totalWidth / (images.length * 2)

    let animationFrameId: number

    const animate = () => {
      setOffset((prevOffset) => {
        const newOffset = (prevOffset + 1) % totalWidth
        if (newOffset >= totalWidth / 2) {
          return newOffset - totalWidth / 2
        }
        return newOffset
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="bg-dots fade-y absolute inset-0"></div>
      <div className="relative overflow-hidden py-16">
        <div
          ref={containerRef}
          className="inline-flex w-max min-w-full"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 50ms linear",
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0 px-6">
              <div className="group relative rotate-1 overflow-hidden rounded-xl shadow-lg shadow-black/30 transition duration-300 hover:-rotate-1 hover:scale-110 hover:shadow-xl hover:shadow-black/30">
                <div className="aspect-[8/10] h-80 scale-110 transition-transform duration-300 group-hover:scale-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="bg-noise pointer-events-none absolute inset-0 opacity-20"></div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 rounded-xl shadow-[0_1.5px_0_inset_rgba(255,255,255,0.3)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfiniteImageCarousel
