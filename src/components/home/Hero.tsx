import { HeroSlideshow } from './HeroSlideshow'

const roomSlides = [
  { src: '/images/site/hero-room.jpg', alt: '누베아 베이지 커튼이 설치된 거실 인테리어' },
  { src: '/images/curtain-room-beige.jpg', alt: '베이지 톤 커튼이 설치된 거실' },
  { src: '/images/curtain-room-blue.jpg', alt: '블루 톤 커튼이 설치된 거실' },
  { src: '/images/curtain-room-brown.jpg', alt: '브라운 톤 커튼이 설치된 거실' },
  { src: '/images/curtain-hero-livingroom.jpg', alt: '커튼이 설치된 거실 전경' },
]

const machineSlides = [
  { src: '/images/site/hero-machine.jpg', alt: '커튼 원단 재단 자동화 설비' },
  { src: '/images/site/hero-machine2.jpg', alt: '커튼 제작 설비 현장 사진 2' },
  { src: '/images/site/hero-machine3.jpg', alt: '커튼 제작 설비 현장 사진 3' },
  { src: '/images/site/hero-machine4.jpg', alt: '커튼 제작 설비 현장 사진 4' },
]

export function Hero() {
  return (
    <section className="hero-split" style={{ padding: 0 }}>
      <div className="hero-left">
        <HeroSlideshow slides={roomSlides} />
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
        <HeroSlideshow slides={machineSlides} />
        <div className="hero-overlay-dark" aria-hidden="true" />
      </div>
    </section>
  )
}
