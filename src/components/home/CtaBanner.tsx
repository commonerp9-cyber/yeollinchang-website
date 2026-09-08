export function CtaBanner() {
  return (
    <section id="cta" className="cta-banner">
      <div className="wrap cta-grid">
        <div>
          <h2>B2C 맞춤형 서비스, 곧 만나보실 수 있습니다</h2>
          <p>
            고객님을 위한 맞춤 상담 서비스를 준비하고 있습니다. 오픈 소식을
            가장 먼저 받아보세요.
          </p>
          <a href="#contact" className="btn-outline">
            오픈 소식 받아보기 &gt;
          </a>
        </div>
        <div className="cta-visual">
          <img
            className="cta-photo"
            src="https://images.unsplash.com/photo-1701656626593-9bd552f4ceb2?fm=jpg&q=80&w=800&h=500&fit=crop&auto=format"
            alt="더미 이미지: 추후 실제 거실/쇼룸 사진으로 교체 예정"
          />
        </div>
      </div>
    </section>
  )
}
