import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cabinet } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

const intrebari = [
  ['Cât costă o consultație?', `Dacă sunteți asigurat și înscris la mine, nimic. Consultațiile sunt plătite de ${cabinet.casa}. Plătiți doar unele adeverințe care nu intră în contract (de exemplu pentru permis auto sau port-armă).`],
  ['Pot veni fără programare?', 'Da, dar s-ar putea să așteptați. Copiii cu febră și cazurile acute au prioritate. Cu o programare la telefon intrați la ora stabilită.'],
  ['Cum îmi reînnoiesc rețeta pentru tratamentul cronic?', 'Sunați cu câteva zile înainte să vi se termine medicamentele. Pentru boli cronice vă văd la control o dată la câteva luni, iar rețeta o fac atunci.'],
  ['Cum mă mut de la alt medic de familie?', 'Veniți cu buletinul și cardul de sănătate și completați cererea la mine. Trebuie să fi trecut cel puțin 6 luni de la ultima înscriere. Transferul fișei îl fac eu.'],
  ['Primiți și copii?', 'Da, de la naștere. Fac bilanțurile de sănătate, vaccinurile din schema națională și consultațiile când copilul e bolnav.'],
  ['Faceți vizite la domiciliu?', 'Da, pentru pacienții înscriși care nu se pot deplasa, de exemplu vârstnici imobilizați. Sunați și stabilim ziua.'],
]

export default function Intrebari() {
  const ref = useReveal()
  const [deschis, setDeschis] = useState(0)
  return (
    <section id="intrebari" ref={ref} className="bg-panel py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p data-reveal className="eyebrow text-center">Întrebări frecvente</p>
        <h2 data-reveal className="h2 mt-3 text-center">Ce mă întreabă pacienții des</h2>
        <ul className="mt-10 space-y-3">
          {intrebari.map(([q, r], i) => {
            const e = deschis === i
            return (
              <li data-reveal key={q} className={`rounded-2xl border transition ${e ? 'border-accent bg-base' : 'border-ink/10 bg-base/60'}`}>
                <button onClick={() => setDeschis(e ? -1 : i)} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans font-semibold" aria-expanded={e}>
                  {q}
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full ${e ? 'bg-accent text-white' : 'bg-mint text-accent'}`}>{e ? <Minus className="size-4" /> : <Plus className="size-4" />}</span>
                </button>
                {e && <p className="px-5 pb-5 leading-relaxed text-ink/70">{r}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
