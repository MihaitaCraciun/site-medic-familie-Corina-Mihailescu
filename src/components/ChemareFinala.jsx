import { MessageCircle, Phone } from 'lucide-react'
import { cabinet, waLink } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

export default function ChemareFinala() {
  const ref = useReveal()
  return (
    <section ref={ref} className="px-4 pb-20 sm:px-6">
      <div data-reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-white/10" />
        <div aria-hidden className="absolute -bottom-32 -left-20 size-80 rounded-full bg-deep/20" />
        <h2 className="relative font-sans text-3xl font-extrabold tracking-tight sm:text-5xl">Vă simțiți rău sau aveți nevoie de o rețetă?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">Sunați și vă dau o oră. Dacă sunteți asigurat, consultația e gratuită.</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={cabinet.telefonHref} className="btn bg-white text-lg text-accent shadow-xl"><Phone className="size-5" /> {cabinet.telefon}</a>
          {cabinet.whatsapp && <a href={waLink()} target="_blank" rel="noreferrer" className="btn border border-white/40 text-lg text-white hover:bg-white/10"><MessageCircle className="size-5" /> WhatsApp</a>}
        </div>
      </div>
    </section>
  )
}
