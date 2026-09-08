import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function HomeHeader() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header>
      <div className="wrap nav-row">
        <a href="#top" className="wordmark" onClick={close}>
          <img src="/images/logo.png" alt="열린창" className="wordmark-logo" />
        </a>
        <button
          className="nav-toggle"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <a href="#top" onClick={close}>
              홈
            </a>
          </li>
          <li>
            <a href="#about" onClick={close}>
              회사소개
            </a>
          </li>
          <li>
            <Link to="/products" onClick={close}>
              제품
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={close}>
              설비
            </Link>
          </li>
          <li>
            <a href="#partners" onClick={close}>
              포트폴리오
            </a>
          </li>
          <li>
            <a href="#contact" onClick={close}>
              문의
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="#cta" className="btn-pill">
            B2C 미리보기
          </a>
        </div>
      </div>
    </header>
  )
}
