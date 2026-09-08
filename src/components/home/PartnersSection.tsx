const partners: Array<string> = [
  '이지스 블라인드',
  '한솔IMB',
  '에스엠(SM)',
  '커튼뱅크',
  '모두온타일',
  '주식회사 온플랫',
  '아라크네',
  '남도실업',
  '주식회사 해동',
  '한샘',
]

export function PartnersSection() {
  return (
    <section id="partners" className="partners-section">
      <div className="wrap">
        <h2 className="section-title">파트너십 &amp; 신뢰</h2>
        <div className="partner-grid">
          {partners.map((name) => (
            <div key={name} className="partner-cell">
              {name}
            </div>
          ))}
        </div>
        <p className="partner-quote">오랜 시간 쌓아온 신뢰, 일관된 품질과 기능</p>
      </div>
    </section>
  )
}
