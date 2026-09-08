export function Hero() {
  return (
    <section className="hero-split" style={{ padding: 0 }}>
      <div className="hero-left">
        <img
          className="hero-photo"
          src="/images/hero-room.jpg"
          alt="린넨 암막 커튼이 설치된 거실 인테리어"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-copy">
          <h1>
            유서 깊은 정통성,
            <br />
            공간에 가치를 더하는 커튼 솔루션
          </h1>
          <p>
            30년의 노하우를 투자한 프리미엄 원단과 정밀 가공 설비로 만드는
            규격맞춤창. 다양한 기업과 고객이 신뢰하는 열린창입니다.
          </p>
          <a href="#contact" className="btn-pill">
            사업자 문의 및 견적 요청
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img
          className="hero-photo"
          src="/images/hero-machine.jpg"
          alt="커튼 원단 재단 자동화 설비"
        />
        <div className="hero-overlay-dark" aria-hidden="true" />
      </div>
    </section>
  )
}
