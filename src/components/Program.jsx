import { Clock, Siren, Phone } from 'lucide-react'
import { cabinet, ora, program } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

export default function Program() {
  const ref = useReveal()
  const azi = new Date().getDay()
  return (
    <section id="program" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p data-reveal className="eyebrow">Program</p>
          <h2 data-reveal className="h2 mt-3">Când mă găsiți la cabinet</h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink/70">
            Lucrez alternativ, dimineața și după-amiaza, ca să puteți veni și înainte, și după serviciu. Vă rog să vă programați la telefon, așa nu așteptați pe hol.
          </p>
          <div data-reveal className="mt-8 space-y-3">
            <div className="flex gap-4 rounded-2xl border border-ink/10 bg-panel p-5">
              <Siren className="size-6 shrink-0 text-[#D9480F]" />
              <p className="text-[15px] leading-relaxed text-ink/75"><strong className="text-ink">Urgență medicală:</strong> sunați la <a href="tel:112" className="font-semibold text-accent underline">112</a>, oricând.</p>
            </div>
            <div className="flex gap-4 rounded-2xl border border-ink/10 bg-panel p-5">
              <Clock className="size-6 shrink-0 text-accent" />
              <p className="text-[15px] leading-relaxed text-ink/75"><strong className="text-ink">În afara programului</strong> (seara, în weekend, de sărbători): mergeți la centrul de permanență sau la Unitatea de Primiri Urgențe din {cabinet.oras}.</p>
            </div>
          </div>
        </div>

        <div data-reveal className="overflow-hidden rounded-3xl border border-ink/10 bg-panel shadow-xl shadow-ink/5">
          <ul className="divide-y divide-ink/8">
            {program.map((p) => {
              const eAzi = p.idx === azi
              return (
                <li key={p.zi} className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-7 ${eAzi ? 'bg-mint' : ''}`}>
                  <div>
                    <p className="font-sans font-bold">
                      {p.zi} {eAzi && <span className="ml-2 rounded-full bg-accent px-2 py-0.5 align-middle text-xs font-semibold text-white">azi</span>}
                    </p>
                    <p className="text-sm text-ink/55">{p.nota}</p>
                  </div>
                  <p className={`font-mono text-base sm:text-lg ${p.ore ? 'text-ink' : 'text-ink/40'}`}>
                    {p.ore ? `${ora(p.ore[0])} – ${ora(p.ore[1])}` : 'închis'}
                  </p>
                </li>
              )
            })}
          </ul>
          <div className="flex flex-col gap-3 border-t border-ink/10 bg-base p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="text-sm text-ink/65">Programările se fac la telefon, în timpul programului.</p>
            <a href={cabinet.telefonHref} className="btn-primary !min-h-11 text-sm"><Phone className="size-4" /> Sună</a>
          </div>
        </div>
      </div>
    </section>
  )
}
