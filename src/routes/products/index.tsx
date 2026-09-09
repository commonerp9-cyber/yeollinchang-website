import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import products, { categories } from '@/data/products'
import type { Category } from '@/data/products'
import { ProductControls, SearchBox, NavPanel, MobileNavOverlay } from '@/components/SiteNav'
import { HomeHeader } from '@/components/home/HomeHeader'
import { HomeFooter } from '@/components/home/HomeFooter'

interface ProductsSearch {
  category?: string
  subcategory?: string
  mini?: string
  q?: string
}

export const Route = createFileRoute('/products/')({
  head: () => ({
    meta: [
      {
        title: '열린창 커튼 | 커튼 · 부자재 · 제작 기계',
      },
      {
        name: 'description',
        content:
          '커튼, 커튼 제작 부자재, 커튼 제작 기계를 한눈에 살펴보는 제품 소개 사이트입니다.',
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    category: search.category as string | undefined,
    subcategory: search.subcategory as string | undefined,
    mini: search.mini as string | undefined,
    q: search.q as string | undefined,
  }),
  component: ProductsIndex,
})

const heroSlides = [
  {
    title: '암막커튼 컬렉션',
    subtitle: '완벽한 빛 차단과 편안한 휴식',
    image: '/images/curtain-hero-livingroom.jpg',
  },
  {
    title: '쉬어커튼 컬렉션',
    subtitle: '자연광을 담는 부드러운 감성',
    image: '/images/curtain-room-beige.jpg',
  },
  {
    title: '생활암막커튼 컬렉션',
    subtitle: '내추럴한 텍스처의 완성',
    image: '/images/curtain-room-brown.jpg',
  },
  {
    title: '커튼 부자재 & 제작 기계',
    subtitle: '전문가의 손길을 더하는 도구',
    image: '/images/curtain-room-blue.jpg',
  },
]

function ProductsIndex() {
  const search = Route.useSearch()
  const navigate = Route.useNavigate()
  const [navOpen, setNavOpen] = useState(false)

  // The search text lives in local state so typing is never interrupted —
  // routing on every keystroke breaks Korean/Japanese/Chinese IME composition.
  const [query, setQuery] = useState(search.q ?? '')

  // The actual filtering/URL-sync value only updates after the user pauses
  // typing for a moment, so results don't flicker on every keystroke.
  const [debouncedQuery, setDebouncedQuery] = useState(search.q ?? '')

  const activeCategory = (search.category as Category | undefined) ?? 'all'
  const activeSubcategory = search.subcategory ?? null
  const activeMinicategory = search.mini ?? null

  // Keep local state in sync if the URL's q changes from elsewhere
  // (e.g. browser back/forward).
  useEffect(() => {
    setQuery(search.q ?? '')
    setDebouncedQuery(search.q ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.q])

  // Wait for a pause in typing before updating results and syncing the URL,
  // so search results stay bookmarkable/shareable without disrupting IME
  // input or re-filtering mid-word.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
      navigate({
        search: (prev) => ({ ...prev, q: query || undefined }),
        replace: true,
        resetScroll: false,
      })
    }, 600)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const handleSelect = (
    category: Category | 'all',
    subcategory: string | null = null,
    mini: string | null = null,
  ) => {
    navigate({
      search: (prev) => ({
        ...prev,
        category: category === 'all' ? undefined : category,
        subcategory: subcategory ?? undefined,
        mini: mini ?? undefined,
      }),
    })
  }

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory
      const matchesSubcategory =
        !activeSubcategory || product.subcategory === activeSubcategory
      const matchesMinicategory =
        !activeMinicategory || product.minicategory === activeMinicategory
      const matchesQuery =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q)
      return (
        matchesCategory && matchesSubcategory && matchesMinicategory && matchesQuery
      )
    })
  }, [debouncedQuery, activeCategory, activeSubcategory, activeMinicategory])

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <HeroCarousel />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 lg:flex lg:gap-12 lg:flex-row-reverse">
        {/* Right-side navigation / filter panel */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="lg:sticky lg:top-24">
            <NavPanel
              activeCategory={activeCategory}
              activeSubcategory={activeSubcategory}
              activeMinicategory={activeMinicategory}
              onSelect={handleSelect}
              variant="flyout"
            />
            <SearchBox query={query} onQueryChange={setQuery} />
          </div>
        </aside>

        <MobileNavOverlay
          open={navOpen}
          onClose={() => setNavOpen(false)}
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
          activeMinicategory={activeMinicategory}
          onSelect={handleSelect}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <ProductControls
            query={query}
            onQueryChange={setQuery}
            onMenuOpen={() => setNavOpen(true)}
          />

          <div className="mb-10 md:mb-14">
            <p className="text-sm text-[var(--color-clay-dark)] font-medium mb-2">
              PRODUCT CATALOG
            </p>
            <h1 className="font-display text-3xl md:text-4xl leading-snug mb-3">
              커튼 한 폭에 담긴,
              <br />
              편안하고 정갈한 공간
            </h1>
            <p className="text-[var(--color-taupe)] leading-relaxed max-w-xl">
              커튼, 커튼 제작 부자재, 제작 기계까지. 우리가 만드는 모든
              제품을 소개합니다. 오른쪽 메뉴에서 카테고리를 선택하거나
              검색창에서 원하는 제품을 찾아보세요.
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[var(--color-taupe)]">
              검색 결과가 없습니다. 다른 검색어를 입력해보세요.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to="/products/$productId"
                  params={{ productId: product.id.toString() }}
                  search={{
                    category: activeCategory === 'all' ? undefined : activeCategory,
                    subcategory: activeSubcategory ?? undefined,
                    mini: activeMinicategory ?? undefined,
                  }}
                  className="group block rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:border-[var(--color-clay)] transition-all bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--color-linen)]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-[var(--color-clay-dark)]">
                      {
                        categories.find((c) => c.id === product.category)
                          ?.label
                      }{' '}
                      · {product.subcategory}
                      {product.minicategory ? ` · ${product.minicategory}` : ''}
                    </span>
                    <h2 className="text-lg font-semibold mt-1 mb-1.5">
                      {product.name}
                    </h2>
                    <p className="text-sm text-[var(--color-taupe)] leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
      <HomeFooter />
    </div>
  )
}

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-64 md:h-96 overflow-hidden bg-[var(--color-linen)]">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-display text-2xl md:text-4xl text-white mb-2">
              {slide.title}
            </h2>
            <p className="text-white/90 text-sm md:text-base">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => setIndex(i)}
            aria-label={`${slide.title} 슬라이드로 이동`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
