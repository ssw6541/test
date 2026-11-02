import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const GridIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </svg>
)

export const DatabaseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
    <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </svg>
)

export const ChartIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8.5 16v-4M13 16V8M17.5 16v-6" />
  </svg>
)

export const SettingsIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const BellIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z" />
    <path d="M10 21h4" />
  </svg>
)

export const CheckCircleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.7 2.7L16 9.5" />
  </svg>
)

export const AlertCircleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.5M12 16.4v.1" />
  </svg>
)

export const FileIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
    <path d="M14 3v4.5h4.5M9 12.5h6M9 16h6" />
  </svg>
)

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
