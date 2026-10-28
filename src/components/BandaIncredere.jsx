import { FileHeart, HeartPulse, Pill, ShieldCheck } from 'lucide-react'
import { cabinet } from '../lib/cabinet'

const puncte = [
  [ShieldCheck, `În contract cu ${cabinet.casa}`],
  [HeartPulse, 'Consultații gratuite pentru asigurați'],
  [Pill, 'Rețete compensate și gratuite'],
  [FileHeart, 'Trimiteri, analize, adeverințe'],
]

export default function BandaIncredere() {
  return (
    <section className="bg-deep text-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {puncte.map(([I, t]) => (
          <li key={t} className="flex items-center gap-3 font-sans text-sm font-semibold sm:text-base">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><I className="size-5 text-[#7FD8CC]" /></span>
            {t}
          </li>
        ))}
      </ul>
    </section>
  )
}
