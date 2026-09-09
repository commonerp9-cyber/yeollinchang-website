import { useState } from 'react'

export function ProductGallery({
  images,
  alt,
}: {
  images: Array<string>
  alt: string
}) {
  const [active, setActive] = useState(0)
  const hasMultiple = images.length > 1

  return (
    <div className={hasMultiple ? 'flex flex-col-reverse md:flex-row gap-3' : ''}>
      {hasMultiple && (
        <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto md:max-h-[420px] md:w-20 shrink-0">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${alt} 이미지 ${i + 1}`}
              className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 bg-[var(--color-linen)] transition-colors ${
                i === active ? 'border-[var(--color-clay)]' : 'border-transparent'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
      <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-linen)]">
        <img
          src={images[active]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
