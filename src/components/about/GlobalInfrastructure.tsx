import { infrastructureSites } from '@/data/history'

export function GlobalInfrastructure() {
  const [korea, china] = infrastructureSites

  return (
    <section className="infra-section">
      <div className="wrap">
        <h2 className="section-title">글로벌 인프라</h2>
        <p className="section-intro">
          대한민국 본사·물류 인프라와 중국 3개 생산공장을 기반으로 안정적인
          생산·공급 체계를 갖추고 있습니다.
        </p>
        <div className="infra-grid">
          <InfraCard site={korea} />
          <div className="infra-connector">
            <svg viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeDasharray="4 4">
              <line x1="0" y1="12" x2="60" y2="12" />
            </svg>
          </div>
          <InfraCard site={china} />
        </div>
      </div>
    </section>
  )
}

function InfraCard({ site }: { site: (typeof infrastructureSites)[number] }) {
  return (
    <div className="infra-card">
      <img
        className="flag-img"
        src={`https://flagcdn.com/${site.flagCode}.svg`}
        alt={`${site.country} 국기`}
      />
      <h3>{site.country}</h3>
      <p className="sub">{site.subtitle}</p>
      <ul>
        {site.facilities.map((facility) => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
    </div>
  )
}
