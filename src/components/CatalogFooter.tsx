import { Blinds, Mail, MapPin, Phone } from 'lucide-react'

export function CatalogFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-linen)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex items-center gap-2">
          <Blinds size={22} className="text-[var(--color-clay-dark)]" />
          <span className="font-display text-xl text-[var(--color-clay-dark)]">
            열린창 커튼
          </span>
        </div>

        <div className="flex flex-col gap-2.5 text-sm text-[var(--color-taupe)]">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[var(--color-clay)] shrink-0" />
            <span>경기도 광주시 순암로 367-48 (중대동) A, B동</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[var(--color-clay)] shrink-0" />
            <span>(031)797-0208</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[var(--color-clay)] shrink-0" />
            <span>yeollinchang@naver.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <p className="max-w-7xl mx-auto px-5 md:px-8 py-4 text-xs text-[var(--color-taupe)]">
          © {new Date().getFullYear()} 열린창 커튼. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
