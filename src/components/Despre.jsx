import { GraduationCap, HeartHandshake, Languages, Stethoscope } from 'lucide-react'
import { cabinet } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

// ÎNLOCUIEȘTE textele de mai jos cu parcursul real al medicului.
const repere = [
  [GraduationCap, 'Absolventă a UMF Carol Davila, București'], // ÎNLOCUIEȘTE
  [Stethoscope, 'Rezidențiat în medicină de familie, apoi cabinet propriu din 2012'],
  [Languages, 'Consultații în română și engleză'],
]

export default function Despre() {
  const ref = useReveal()
  return (
    <section id="despre" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-reveal className="relative">
          {/* ÎNLOCUIEȘTE: pune poza medicului în public/medic.jpg și înlocuiește tot blocul de mai jos cu
              <img src="/medic.jpg" alt={cabinet.medic} className="aspect-[4/5] w-full rounded-3xl object-cover" /> */}
          <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-mint via-[#CDE9E4] to-accent/30">
            <svg viewBox="0 0 200 200" className="w-2/3 text-accent/70" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
              <circle cx="100" cy="68" r="34" />
              <path d="M40 180c6-40 30-62 60-62s54 22 60 62" />
              <path d="M78 128v18a22 22 0 0 0 44 0v-18" />
              <circle cx="122" cy="164" r="7" />
            </svg>
            <span className="absolute bottom-5 left-5 rounded-full bg-panel/80 px-3 py-1.5 font-mono text-xs text-ink/60 backdrop-blur">loc pentru poza medicului</span>
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl border border-ink/10 bg-panel px-5 py-4 shadow-xl sm:-right-6">
            <p className="font-sans text-3xl font-bold text-accent">{cabinet.aniExperienta} ani</p>
            <p className="text-sm text-ink/60">de medicină de familie</p>
          </div>
        </div>

        <div>
          <p data-reveal className="eyebrow">Despre mine</p>
          <h2 data-reveal className="h2 mt-3">Bună ziua, sunt {cabinet.medic}.</h2>
          <div data-reveal className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              Sunt medic de familie în {cabinet.oras} și am grijă de familii întregi, de la bebeluși la bunici. Pe mulți dintre pacienții mei îi știu de ani buni, și asta mă ajută să văd repede când ceva nu e în regulă.
            </p>
            <p>
              La mine în cabinet aveți timp să povestiți ce vă supără. Vă explic pe înțeles ce aveți, ce analize trebuie făcute și de ce, și vă spun clar când e nevoie de un specialist.
            </p>
          </div>
          <a data-reveal href={cabinet.afiliereLink} target="_blank" rel="noreferrer" className="mt-8 flex items-center gap-4 rounded-2xl border border-accent/30 bg-mint/60 p-5 transition hover:border-accent">
            <HeartHandshake className="size-7 shrink-0 text-accent" />
            <span>
              <span className="block font-sans font-bold">{cabinet.afiliereMembru}</span>
              <span className="text-sm text-ink/60">Medicii de familie din Brașov, organizați profesional · snmf.ro</span>
            </span>
          </a>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {repere.map(([I, t]) => (
              <li data-reveal key={t} className="flex gap-3 rounded-2xl border border-ink/10 bg-panel p-4 text-sm leading-snug">
                <I className="size-5 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
