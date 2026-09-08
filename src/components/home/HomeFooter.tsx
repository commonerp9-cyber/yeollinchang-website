export function HomeFooter() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-contact">
            <h4>고객 문의 안내</h4>
            <p>경기도 광주시 순암로 367-48 (중대동) A, B동</p>
            <p>Tel: (031)797-0208</p>
            <p>Email: yeollinchang@naver.com</p>
          </div>
          <div>
            <h4>ABOUT US</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">회사소개</a>
              </li>
              <li>
                <a href="#business">사업분야</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>B2B</h4>
            <ul className="footer-links">
              <li>
                <a href="#contact">거래 문의</a>
              </li>
              <li>
                <a href="#contact">견적 요청</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} 열린창. All Rights Reserved.</span>
          <span>
            <a href="#">이용약관</a> | <a href="#">개인정보처리방침</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
