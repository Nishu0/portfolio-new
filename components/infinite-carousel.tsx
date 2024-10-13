"use client"

import React, { useEffect, useState } from "react"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % (images.length * 100))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dots fade-y"></div>
      <div className="relative inline-flex min-w-full py-16 w-max">
        <div
          className="inline-flex justify-around flex-shrink-0 min-w-full"
          style={{
            transform: `translateX(-${offset}%)`,
            transition: "transform 5000ms linear",
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0 px-6">
              <div className="relative overflow-hidden transition duration-300 shadow-lg group rotate-1 rounded-xl shadow-black/30 hover:-rotate-1 hover:scale-110 hover:shadow-xl hover:shadow-black/30">
                <div className="aspect-[8/10] h-80 scale-110 transition-transform duration-300 group-hover:scale-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-noise opacity-20"></div>
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
