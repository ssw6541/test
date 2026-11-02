import { useEffect, useRef, useState } from 'react'
import { navItems, rows, stats, type Stat, type Status } from './data'
import {
  AlertCircleIcon,
  BellIcon,
  ChartIcon,
  CheckCircleIcon,
  DatabaseIcon,
  FileIcon,
  GridIcon,
  MenuIcon,
  SettingsIcon,
} from './icons'

const navIcons = [GridIcon, DatabaseIcon, ChartIcon, SettingsIcon]

const statIcons: Record<Stat['icon'], { Icon: typeof DatabaseIcon; color: string }> = {
  database: { Icon: DatabaseIcon, color: 'text-brand' },
  check: { Icon: CheckCircleIcon, color: 'text-ok' },
  alert: { Icon: AlertCircleIcon, color: 'text-warn-icon' },
}

const pill: Record<Status, string> = {
  '처리 완료': 'bg-ok-soft text-ok',
  '검토 필요': 'bg-warn-soft text-warn',
}

const neutralBtn =
  'border border-btn-neutral-line bg-btn-neutral text-btn-neutral-ink text-[14px] leading-none font-medium hover:brightness-95'

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black/30 lg:hidden ${open ? '' : 'hidden'}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[232px] shrink-0 flex-col gap-3 bg-white p-6 max-lg:transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center gap-3">
          <div className="grid size-9 place-items-center rounded-[10px] bg-brand text-[22px] leading-[33px] font-bold text-white">
            H
          </div>
          <span className="text-[18px] leading-[27px] font-bold">HACKFLOW</span>
        </div>
        <p className="text-[10px] leading-[15px] font-bold text-muted">WORKSPACE</p>
        <nav className="flex flex-col gap-3">
          {navItems.map((label, i) => {
            const Icon = navIcons[i]
            const active = i === 0
            return (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`flex h-12 items-center gap-3 rounded-[9px] p-3 text-[14px] leading-[21px] ${
                  active ? 'bg-brand-soft font-bold text-brand' : 'text-muted hover:bg-page'
                }`}
              >
                <Icon width={20} height={20} />
                {label}
              </a>
            )
          })}
        </nav>
        <div className="absolute inset-x-6 bottom-6 h-[82px] rounded-[10px] bg-page p-3">
          <p className="text-[12px] leading-[18px] font-bold">해커톤 워크스페이스</p>
          <p className="mt-1 truncate text-[11px] leading-[17px] text-muted">팀의 데이터를 한곳에서</p>
        </div>
      </aside>
    </>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  const { Icon, color } = statIcons[stat.icon]
  return (
    <div className="relative flex h-[158px] flex-col gap-1.5 rounded-xl border border-line bg-white px-6 py-5">
      <span className="text-[14px] leading-[21px] text-muted">{stat.label}</span>
      <span className="text-[32px] leading-[48px] font-bold">{stat.value}</span>
      <span className="text-[12px] leading-[18px] text-ok">{stat.note}</span>
      <Icon width={20} height={20} className={`absolute top-[21px] right-8 ${color}`} />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const timer = useRef<number>(undefined)

  const notify = (msg: string) => {
    setToast(msg)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToast(null), 3000)
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) notify(`[테스트] "${file.name}" 파일이 선택되었습니다 (서버 전송 없음)`)
    e.target.value = ''
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[88px] shrink-0 items-center justify-between gap-4 bg-white px-4 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="메뉴 열기"
              className="grid size-10 place-items-center rounded-lg text-muted hover:bg-page lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
            <span className="text-[13px] leading-5 text-muted">워크스페이스 / 대시보드</span>
          </div>
          <div className="flex items-center gap-4">
            <BellIcon width={22} height={22} className="text-muted" />
            <div className="flex items-center gap-4">
              <span className="grid size-9 place-items-center rounded-full bg-brand-soft text-[13px] leading-5 font-bold text-brand">
                김
              </span>
              <span className="text-[13px] leading-5 font-bold">김관리 님</span>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-7 bg-page px-4 py-6 sm:p-10">
          <div className="flex flex-col gap-4 md:h-[72px] md:flex-row md:items-center md:justify-between md:gap-5">
            <div className="flex flex-col gap-1.5 md:h-[72px]">
              <h1 className="text-[28px] leading-[42px] font-bold">운영 대시보드</h1>
              <p className="text-[14px] leading-[21px] text-muted">
                데이터 현황을 확인하고 주요 업무를 빠르게 관리하세요.
              </p>
            </div>
            <div className="flex gap-5">
              <button
                type="button"
                className={`h-11 w-[132px] rounded-lg ${neutralBtn}`}
                onClick={() => notify('[테스트] 보고서 생성 완료 (샘플 보고서 · 실제 파일 없음)')}
              >
                보고서 생성
              </button>
              <button
                type="button"
                className="h-11 w-[146px] rounded-lg border border-btn-upload-line bg-btn-upload text-[14px] leading-none font-medium text-btn-upload-ink hover:brightness-110"
                onClick={() => fileRef.current?.click()}
              >
                데이터 업로드
              </button>
              <input ref={fileRef} type="file" className="hidden" onChange={onFile} />
            </div>
          </div>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </section>

          <section className="overflow-hidden rounded-xl border border-line bg-white">
            <div className="flex h-[74px] items-center justify-between gap-2.5 px-6">
              <h2 className="text-[18px] leading-[27px] font-bold">최근 등록 데이터</h2>
              <span className="text-[13px] leading-5 text-muted">총 {rows.length}개 항목</span>
            </div>
            <div className="overflow-x-auto lg:overflow-x-hidden">
              <table className="w-[calc(100%+2px)] min-w-[600px] table-fixed border-collapse text-left">
                <colgroup>
                  <col style={{ width: '45.39%' }} />
                  <col style={{ width: '19.5%' }} />
                  <col style={{ width: '19.5%' }} />
                  <col style={{ width: '15.61%' }} />
                </colgroup>
                <thead>
                  <tr className="h-12 bg-thead text-[13px] leading-5 text-muted">
                    <th className="pl-6 font-bold">항목명</th>
                    <th className="font-bold">등록일</th>
                    <th className="font-bold">처리 상태</th>
                    <th className="pr-6 font-bold">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="h-[54px] text-[13px] leading-5">
                      <td className="pl-6">
                        <span className="flex items-center gap-3 font-bold">
                          <FileIcon width={18} height={18} className="shrink-0 text-muted" />
                          {r.name}
                        </span>
                      </td>
                      <td className="text-muted">{r.date}</td>
                      <td>
                        <span
                          className={`flex h-7 w-20 items-center justify-center rounded-[14px] text-[11px] leading-[17px] font-bold ${pill[r.status]}`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="pr-6">
                        <button
                          type="button"
                          className={`h-8 w-[88px] rounded-lg ${neutralBtn}`}
                          onClick={() => notify(`[테스트] "${r.name}" 상세 보기`)}
                        >
                          상세 보기
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer className="flex min-h-6 flex-wrap items-start justify-between gap-2 text-[12px] leading-[18px]">
            <span className="text-muted">마지막 업데이트: 2026.11.02 09:00</span>
            <span className="text-ok">모든 시스템 정상 운영 중</span>
          </footer>
        </main>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-40 max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-lg bg-ink px-5 py-3 text-[13px] text-white shadow-lg"
        >
          {toast}
        </div>
      )}
    </div>
  )
}
