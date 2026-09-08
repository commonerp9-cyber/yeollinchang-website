import { createFileRoute } from '@tanstack/react-router'
import { HomeHeader } from '@/components/home/HomeHeader'
import { HomeFooter } from '@/components/home/HomeFooter'
import { AboutBanner } from '@/components/about/AboutBanner'
import { Timeline } from '@/components/about/Timeline'
import { GlobalInfrastructure } from '@/components/about/GlobalInfrastructure'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: '회사소개 | 열린창',
      },
      {
        name: 'description',
        content:
          '1989년부터 이어온 (주)열린창의 연혁과 글로벌 생산 인프라를 소개합니다.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <AboutBanner />
        <Timeline />
        <GlobalInfrastructure />
      </main>
      <HomeFooter />
    </>
  )
}
