import { Activity, Baby, ClipboardList, FileText, HeartPulse, Pill, Stethoscope, Syringe, Phone } from 'lucide-react'
import { cabinet } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

const servicii = [
  [Stethoscope, 'Consultații pentru boli acute', 'Febră, tuse, dureri de gât, răceli, viroze, dureri de burtă. Vă consult și vă spun ce tratament urmați.'],
  [HeartPulse, 'Boli cronice', 'Urmăresc tensiunea, diabetul, colesterolul și tiroida, cu controale regulate și rețete la zi.'],
  [Baby, 'Copii și bebeluși', 'Bilanțuri de sănătate, creștere și dezvoltare, sfaturi pentru părinți, consultații când copilul e bolnav.'],
  [Syringe, 'Vaccinări', 'Vaccinurile din schema națională pentru copii, plus vaccinul antigripal în sezon.'],
  [Activity, 'Control anual de prevenție', 'Analize de rutină și evaluarea riscului cardiovascular, ca să prindem din timp ce se poate preveni.'],
  [Pill, 'Rețete compensate și gratuite', 'Prescriu medicamentele compensate de CAS și vă reînnoiesc rețetele pentru tratamentul cronic.'],
  [ClipboardList, 'Trimiteri și analize', 'Bilete de trimitere la specialist și pentru analize de laborator în clinicile cu contract CAS.'],
  [FileText, 'Adeverințe și concedii medicale', 'Adeverințe pentru școală, grădiniță, sport, permis auto, angajare, plus certificate de concediu medical.'],
]

export default function Servicii() {
  const ref = useReveal()
  return (
    <section id="servicii" ref={ref} className="bg-panel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">Servicii</p>
          <h2 data-reveal className="h2 mt-3">Cu ce vă pot ajuta la cabinet</h2>
          <p data-reveal className="mt-4 text-lg text-ink/70">Pentru pacienții asigurați înscriși la mine, serviciile de mai jos sunt acoperite de {cabinet.casa}.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicii.map(([I, t, d]) => (
            <article data-reveal key={t} className="group rounded-3xl border border-ink/10 bg-base p-6 transition duration-300 hover:scale-[1.02] hover:border-accent">
              <span className="grid size-12 place-items-center rounded-2xl bg-mint text-accent transition group-hover:bg-accent group-hover:text-white"><I className="size-6" /></span>
              <h3 className="mt-5 font-sans text-lg font-bold leading-snug">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d}</p>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-mint p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="font-sans text-xl font-bold">Nu știți dacă e nevoie să veniți? Sunați și vă spun.</p>
          <a href={cabinet.telefonHref} className="btn-primary"><Phone className="size-5" /> {cabinet.telefon}</a>
        </div>
      </div>
    </section>
  )
}
