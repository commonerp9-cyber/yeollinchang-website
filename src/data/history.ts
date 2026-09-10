export interface HistoryEntry {
  date: string
  description: string
}

export interface HistoryEra {
  id: string
  years: string
  navLabel: string
  title: string
  entries: Array<HistoryEntry>
}

export const historyEras: Array<HistoryEra> = [
  {
    id: 'era-2021',
    years: '2021 – 현재',
    navLabel: '커튼 전문기업 도약',
    title: '커튼 전문기업 도약 및 물류 인프라 확장',
    entries: [
      { date: '2024.10', description: '국내 최대 규모 커튼 전용 물류창고 준공 및 가동' },
      { date: '2023.05', description: '본사 및 통합 물류센터 이전 (경기도 광주시 중대동)' },
      { date: '2022.08', description: '커튼 부자재(심지, 핀 등) 자체 기술 개발 및 생산 체계 구축' },
      { date: '2021.03', description: '통산 11번째 종합 카탈로그 발행 및 커튼 전문 브랜드 재확립' },
    ],
  },
  {
    id: 'era-2016',
    years: '2016 – 2020',
    navLabel: '글로벌 생산기지 확충',
    title: '글로벌 생산기지 확충 및 미디어 마케팅',
    entries: [
      { date: '2019.11', description: '중국 제3생산공장 설립 (생산 능력 대폭 확충)' },
      { date: '2018.06', description: '공중파 주요 방송 프로그램 및 드라마 다수 협찬 진행' },
      { date: '2017.04', description: '중국 제2생산공장 설립 (해외 법인 생산 인프라 강화)' },
      { date: '2016.01', description: '커튼 원단 유통 및 제조 중심 사업 구조 대대적 전환' },
    ],
  },
  {
    id: 'era-2010',
    years: '2010 – 2015',
    navLabel: '글로벌 시장 진출',
    title: '글로벌 시장 진출 및 제품 다변화',
    entries: [
      { date: '2014.08', description: '가죽·우드 블라인드 및 허니콤 쉐이드 라인업 대대적 리뉴얼' },
      { date: '2012.12', description: 'HQ 신사옥 완공 및 통합 생산라인 가동' },
      { date: '2010.08', description: '중국 국제 인테리어 박람회 참가 및 해외 유통망 확대' },
      { date: '2010.05', description: '플리티드 허니콤 중국 공장 이전 생산 개시' },
    ],
  },
  {
    id: 'era-2005',
    years: '2005 – 2009',
    navLabel: '기술 혁신 · 브랜드 강화',
    title: '기술 혁신 및 브랜드 경쟁력 강화',
    entries: [
      { date: '2008.11', description: '차세대 전사적 자원관리(ERP) 시스템 구축' },
      { date: '2008.07', description: "청와대 공식 납품업체 지정 및 친환경 쉐이드 '에코럭스' 출시" },
      { date: '2008.05', description: '기술벤처기업 인증, INNO-BIZ 지정 및 기업부설 디자인연구소 설립' },
      { date: '2006.01', description: '전국 A/S 서비스 센터 네트워크 구축' },
    ],
  },
  {
    id: 'era-2000',
    years: '2000 – 2004',
    navLabel: '생산 시설 확충',
    title: '생산 시설 확충 및 해외 법인 설립',
    entries: [
      { date: '2004.12', description: '동종업계 최초 중국 현지 생산 법인 설립 ($100만 투자)' },
      { date: '2004.03', description: '업계 최초 블라인드 자동 타공·조립 설비 도입' },
      { date: '2002.10', description: 'ISO 9001 품질경영시스템 인증 획득' },
      { date: '2002.04', description: "자체 브랜드 'Winilex' 출시" },
      { date: '2001.04', description: '우드 블라인드 전 라인업(25~50mm) 출시' },
    ],
  },
  {
    id: 'era-1989',
    years: '1989 – 1999',
    navLabel: '창업과 기반 다지기',
    title: '창업 및 기반 다지기',
    entries: [
      { date: '1999.11', description: '롤스크린 장치 특허 출원 및 전국 50여 개 공급망 확보' },
      { date: '1999.05', description: '(주)열린창 상호 변경 및 경기도 광주 본사 이전' },
      { date: '1993.11', description: "'그랜드버티칼' 브랜드 출시" },
      { date: '1991.11', description: "'코오롱 인테리어' 상호 변경" },
      { date: '1989.10', description: "커튼 전문점 '예원' 창업" },
    ],
  },
]

export interface InfrastructureSite {
  flagCode: string
  country: string
  subtitle: string
  facilities: Array<string>
}

export const infrastructureSites: Array<InfrastructureSite> = [
  {
    flagCode: 'kr',
    country: 'South Korea',
    subtitle: '본사 · 물류센터 (HQ & Logistics)',
    facilities: [
      '경기도 광주시 중대동 본사',
      '국내 최대 규모 커튼 전용 물류센터',
      '기업부설 디자인연구소',
    ],
  },
  {
    flagCode: 'cn',
    country: 'China',
    subtitle: '생산공장 네트워크 (Manufacturing Plants)',
    facilities: ['제1생산공장', '제2생산공장 (2017 설립)', '제3생산공장 (2019 설립)'],
  },
]
