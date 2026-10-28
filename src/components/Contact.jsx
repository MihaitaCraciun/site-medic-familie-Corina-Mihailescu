import { MapPin, Navigation, Phone } from 'lucide-react'
import { cabinet } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

export default function Contact() {
  const ref = useReveal()
  const q = encodeURIComponent(`${cabinet.adresa}, ${cabinet.oras}`)
  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p data-reveal className="eyebrow">Unde mă găsiți</p>
          <h2 data-reveal className="h2 mt-3">Cabinetul</h2>
          <div data-reveal className="mt-6 rounded-3xl border border-ink/10 bg-panel p-6">
            <p className="flex gap-3 text-lg"><MapPin className="mt-1 size-5 shrink-0 text-accent" /><span><strong className="font-sans">{cabinet.adresa}</strong><br />{cabinet.oras}, jud. {cabinet.judet}</span></p>
            {cabinet.reper && <p className="mt-3 pl-8 text-ink/60">{cabinet.reper}</p>}
            <p className="mt-3 pl-8 text-sm text-ink/50">{cabinet.formaOrganizare}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={cabinet.telefonHref} className="btn-primary"><Phone className="size-5" /> Sună</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer" className="btn-ghost"><Navigation className="size-5" /> Traseu</a>
            </div>
          </div>
        </div>
        <div data-reveal className="relative min-h-80 overflow-hidden rounded-3xl border border-ink/10 bg-mint">
          {/* rezervă: se vede dacă harta nu se poate încărca (de ex. fără internet) */}
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <div>
              <MapPin className="mx-auto size-10 text-accent" />
              <p className="mt-3 font-sans text-lg font-bold">{cabinet.adresa}, {cabinet.oras}</p>
              <p className="mt-1 text-sm text-ink/60">Harta se încarcă atunci când există conexiune la internet.</p>
            </div>
          </div>
          {typeof navigator !== 'undefined' && navigator.onLine && <iframe title="Hartă cabinet" src={`https://www.google.com/maps?q=${q}&output=embed`} className="relative h-full min-h-80 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />}
        </div>
      </div>
    </section>
  )
}
