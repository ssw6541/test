export type Status = '처리 완료' | '검토 필요'

export interface RecordRow {
  id: number
  name: string
  date: string
  status: Status
}

export interface Stat {
  label: string
  value: string
  note: string
  icon: 'database' | 'check' | 'alert'
}

export const stats: Stat[] = [
  { label: '전체 데이터', value: '12,480', note: '지난달 대비 12.8% 증가', icon: 'database' },
  { label: '처리 완료', value: '11,892', note: '전체 데이터의 95.3%', icon: 'check' },
  { label: '검토 필요', value: '588', note: '담당자의 확인이 필요합니다', icon: 'alert' },
]

export const rows: RecordRow[] = [
  { id: 1, name: '고객 이용 현황 데이터', date: '2026.11.02', status: '처리 완료' },
  { id: 2, name: '11월 서비스 운영 리포트', date: '2026.11.02', status: '검토 필요' },
  { id: 3, name: '사용자 피드백 목록', date: '2026.11.01', status: '처리 완료' },
  { id: 4, name: '신규 가입자 통계', date: '2026.11.01', status: '처리 완료' },
  { id: 5, name: '결제 내역 정합성 검사', date: '2026.10.31', status: '검토 필요' },
]

export const navItems = ['대시보드', '데이터 관리', '분석 보고서', '설정'] as const
