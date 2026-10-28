import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cabinet } from '../lib/cabinet'

const legaturi = [
  ['Servicii', '#servicii'],
  ['Program', '#program'],
  ['Înscriere CAS', '#inscriere'],
  ['Contact', '#contact'],
]

export default function BaraSus() {
  const [derulat, setDerulat] = useState(false)
  const [deschis, setDeschis] = useState(false)

  useEffect(() => {
    const onScroll = () => setDerulat(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          derulat || deschis
            ? 'border-accent/20 bg-panel/80 shadow-lg shadow-ink/5 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-sans font-bold text-ink">
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5z" /></svg>
          </span>
          <span className="leading-tight">
            {cabinet.medic}
            <span className="block text-xs font-medium text-ink/55">medic de familie</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 font-sans text-sm font-medium text-ink/75 md:flex">
          {legaturi.map(([t, h]) => (
            <li key={h}><a href={h} className="transition hover:text-accent">{t}</a></li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={cabinet.telefonHref} className="btn-primary !min-h-11 !px-4 text-sm">
            <Phone className="size-4" /> <span className="hidden sm:inline">Programare</span><span className="sm:hidden">Sună</span>
          </a>
          <button
            onClick={() => setDeschis((d) => !d)}
            className="grid size-11 place-items-center rounded-xl text-ink md:hidden"
            aria-label="Meniu"
          >
            {deschis ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {deschis && (
        <ul className="mx-auto mt-2 max-w-6xl rounded-2xl border border-accent/20 bg-panel/95 p-2 font-sans font-medium shadow-lg backdrop-blur-xl md:hidden">
          {legaturi.map(([t, h]) => (
            <li key={h}>
              <a href={h} onClick={() => setDeschis(false)} className="block rounded-xl px-4 py-3 hover:bg-mint">{t}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
