import { createFileRoute } from '@tanstack/react-router'
import { HomeHeader } from '@/components/home/HomeHeader'
import { Hero } from '@/components/home/Hero'
import { StatsCard } from '@/components/home/StatsCard'
import { BusinessSection } from '@/components/home/BusinessSection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { CtaBanner } from '@/components/home/CtaBanner'
import { HomeFooter } from '@/components/home/HomeFooter'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: '열린창 | 공간에 빛을 더하는 커튼 솔루션',
      },
      {
        name: 'description',
        content:
          '열린창은 프리미엄 원단과 정밀 가공 설비로 완성하는 커튼 전문 기업입니다.',
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HomeHeader />
      <main id="top">
        <Hero />
        <StatsCard />
        <BusinessSection />
        <PartnersSection />
        <CtaBanner />
      </main>
      <HomeFooter />
    </>
  )
}
