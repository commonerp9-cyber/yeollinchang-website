interface BusinessItem {
  className: string
  title: string
  description: string
  icon: React.ReactNode
}

const items: Array<BusinessItem> = [
  {
    className: 'c1',
    title: '커튼 제작 기계',
    description: '생산 효율과 완벽한 핏을 완성하는 독자적 자동화 설비 공급',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6}>
        <rect x="4" y="4" width="16" height="16" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
  {
    className: 'c2',
    title: '프리미엄 소재',
    description: '높은 내구성과 완성도를 자랑하는 커튼 하드웨어 & 부자재',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6}>
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
        <path d="M4 6.5L12 11l8-4.5" />
        <line x1="12" y1="11" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    className: 'c3',
    title: '로얄 형상 가공',
    description: '일상에 가치와 아름다움을 더하는 형상 작업기 판매',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6}>
        <path d="M14 3l7 7-9 9H5v-7l9-9z" />
      </svg>
    ),
  },
]

export function BusinessSection() {
  return (
    <section id="business">
      <div className="wrap">
        <h2 className="section-title">3대 핵심 사업</h2>
        <div className="business-grid">
          {items.map((item, i) => (
            <div key={item.title} className={`business-card ${item.className}`}>
              <span className="num">{i + 1}.</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
