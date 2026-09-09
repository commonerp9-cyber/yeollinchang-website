import { useEffect, useState } from 'react'

interface Slide {
  src: string
  alt: string
}

const HOLD_MS = 3000
const TRANSITION_MS = 700

export function HeroSlideshow({ slides }: { slides: Array<Slide> }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, HOLD_MS + TRANSITION_MS)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div
      className="hero-slideshow-track"
      style={{
        width: `${slides.length * 100}%`,
        transform: `translateX(-${index * (100 / slides.length)}%)`,
        transitionDuration: `${TRANSITION_MS}ms`,
      }}
    >
      {slides.map((slide) => (
        <img
          key={slide.src}
          className="hero-photo"
          src={slide.src}
          alt={slide.alt}
          style={{ width: `${100 / slides.length}%` }}
        />
      ))}
    </div>
  )
}
