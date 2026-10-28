import { ArrowRightLeft, BadgeCheck, CreditCard, IdCard, UserPlus, Baby } from 'lucide-react'
import { cabinet } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

const pasi = [
  ['Sunați sau treceți pe la cabinet', 'Vă spun dacă mai am locuri și stabilim când veniți.'],
  ['Aduceți actele', 'Completați la cabinet cererea de înscriere. Durează câteva minute.'],
  ['Mă ocup eu de restul', 'Dacă veniți de la alt medic, fac eu transferul fișei. Nu trebuie să mergeți la medicul vechi.'],
]

const acte = [
  [IdCard, 'Cartea de identitate'],
  [CreditCard, 'Cardul național de sănătate'],
  [Baby, 'Pentru copii: certificatul de naștere și buletinul unui părinte'],
  [BadgeCheck, 'Dovada că sunteți asigurat, doar dacă nu apăreți în sistemul CAS'],
]

export default function Inscriere() {
  const ref = useReveal()
  return (
    <section id="inscriere" ref={ref} className="bg-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p data-reveal className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#7FD8CC]">Înscriere și asigurare {cabinet.casa}</p>
          <h2 data-reveal className="mt-3 font-sans text-3xl font-bold tracking-tight sm:text-4xl">Cum vă înscrieți pe lista mea</h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-white/70">
            Cabinetul are contract cu {cabinet.casa}. Dacă sunteți asigurat, consultațiile, rețetele compensate și trimiterile sunt gratuite. Puteți schimba medicul de familie după cel puțin 6 luni de la ultima înscriere.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ol className="grid gap-4">
            {pasi.map(([t, d], i) => (
              <li data-reveal key={t} className="flex gap-5 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <span className="font-mono text-3xl font-medium text-[#7FD8CC]">0{i + 1}</span>
                <div>
                  <h3 className="font-sans text-lg font-bold">{t}</h3>
                  <p className="mt-1 text-white/70">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div data-reveal className="rounded-3xl bg-panel p-6 text-ink sm:p-8">
            <h3 className="flex items-center gap-2 font-sans text-xl font-bold"><UserPlus className="size-6 text-accent" /> Ce acte aduceți</h3>
            <ul className="mt-5 space-y-4">
              {acte.map(([I, t]) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug"><I className="size-5 shrink-0 text-accent" /> {t}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3 rounded-2xl bg-mint p-4 text-sm leading-relaxed text-ink/75">
              <ArrowRightLeft className="size-5 shrink-0 text-accent" />
              <p><strong className="text-ink">Nu sunteți asigurat?</strong> Vă primesc oricum. Aveți dreptul la consultații pentru urgențe, boli contagioase și sarcină, iar restul serviciilor se plătesc. Vă spun prețul dinainte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
