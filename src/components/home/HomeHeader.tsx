import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function HomeHeader() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header>
      <div className="wrap nav-row">
        <Link to="/" className="wordmark" onClick={close}>
          <img src="/images/site/logo.png" alt="열린창" className="wordmark-logo" />
        </Link>
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
            <Link to="/" onClick={close}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={close}>
              회사소개
            </Link>
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
            <Link to="/" hash="contact" onClick={close}>
              문의
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          <Link to="/" hash="cta" className="btn-pill-outline">
            B2C 미리보기
          </Link>
        </div>
      </div>
    </header>
  )
}
