import { Fragment } from 'react'

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
}

const stats: Array<Stat> = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 14l-5 3 1.2-5.6L4 7.6 9.6 7 12 2z" />
      </svg>
    ),
    value: '30+ 년',
    label: '업계 경력',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M22 20c0-2.6-2-4.8-5-5.4" />
      </svg>
    ),
    value: '1,000+ 개',
    label: 'B2B 거래처',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
    value: '국내 최대 규모',
    label: '보유 설비',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.6.5.9 1.2.9 2.2h5.4c0-1 .3-1.7.9-2.2A6 6 0 0012 3z" />
      </svg>
    ),
    value: '150+',
    label: '특허 및 설비',
  },
]

export function StatsCard() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats-card">
          <div className="stats-label">주요 성과</div>
          {stats.map((stat) => (
            <Fragment key={stat.label}>
              <div className="stats-divider" />
              <div className="stat">
                {stat.icon}
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
