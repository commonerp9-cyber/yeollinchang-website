import { useEffect, useRef, useState } from 'react'
import { historyEras } from '@/data/history'

export function Timeline() {
  const [activeEra, setActiveEra] = useState(historyEras[0].id)
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveEra(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -70% 0px' },
    )

    Object.values(blockRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="history">
      <div className="wrap">
        <h2 className="section-title">기업 연혁</h2>
        <p className="section-intro">
          1989년 커튼 전문점 &apos;예원&apos;으로 시작해, 오늘날 국내외 생산
          인프라를 갖춘 종합 커튼·블라인드 기업으로 성장해왔습니다.
        </p>

        <div className="era-tabs">
          {historyEras.map((era) => (
            <a
              key={era.id}
              href={`#${era.id}`}
              className={era.id === activeEra ? 'active' : undefined}
            >
              {era.years}
            </a>
          ))}
        </div>

        <div className="timeline-layout">
          <nav className="era-rail">
            {historyEras.map((era) => (
              <a
                key={era.id}
                href={`#${era.id}`}
                className={era.id === activeEra ? 'active' : undefined}
              >
                <span className="yr">{era.years}</span>
                {era.navLabel}
              </a>
            ))}
          </nav>

          <div className="timeline">
            {historyEras.map((era) => (
              <div
                key={era.id}
                id={era.id}
                className="era-block"
                ref={(el) => {
                  blockRefs.current[era.id] = el
                }}
              >
                <div className="era-head">
                  <span className="era-years">{era.years}</span>
                  <h3>{era.title}</h3>
                </div>
                {era.entries.map((entry) => (
                  <div className="entry" key={entry.date + entry.description}>
                    <span className="date">{entry.date}</span>
                    <span className="desc">{entry.description}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
