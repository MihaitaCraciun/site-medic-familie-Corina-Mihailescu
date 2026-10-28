import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Baby, CalendarCheck, Clock, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { cabinet, stareAzi, waLink } from '../lib/cabinet'
import '../lib/anim'

export default function Hero() {
  const ref = useRef(null)
  const stare = stareAzi()

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('[data-hero]', { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1 })
      gsap.from('[data-card]', { y: 40, opacity: 0, duration: 1, delay: 0.35, ease: 'power3.out' })
      gsap.to('[data-blob]', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative flex min-h-dvh items-end lg:items-center overflow-hidden pb-14 pt-32 sm:pb-20">
      {/* fundal: forme moi în nuanțe de verde-mentă */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div data-blob className="absolute -right-40 -top-40 size-[640px] rounded-full bg-mint" />
        <div data-blob className="absolute -left-32 bottom-0 size-[380px] rounded-full bg-accent/10 blur-2xl" />
        <svg className="absolute right-[6%] top-[22%] hidden w-[340px] text-accent/15 lg:block" viewBox="0 0 400 120" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 60h120l20-40 30 85 28-70 18 25h184" />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <div>
          <p data-hero className="eyebrow">Cabinet de medicină de familie · {cabinet.oras}</p>
          <h1 data-hero className="mt-4 font-sans text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Medicul de familie <span className="text-accent">al întregii familii</span>, în {cabinet.oras}
          </h1>
          <p data-hero className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Consultații pentru copii și adulți, control pentru tensiune și diabet, rețete compensate, trimiteri și adeverințe. Sunt în contract cu {cabinet.casa}, așa că pentru asigurați consultațiile sunt gratuite.
          </p>
          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={cabinet.telefonHref} className="btn-primary text-lg">
              <Phone className="size-5" /> Sună pentru programare
            </a>
            {cabinet.whatsapp ? (
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost text-lg">
                <MessageCircle className="size-5" /> Scrie pe WhatsApp
              </a>
            ) : (
              <a href="#program" className="btn-ghost text-lg">
                <Clock className="size-5" /> Vezi programul
              </a>
            )}
          </div>
          <ul data-hero className="mt-8 flex flex-wrap gap-2 text-sm font-medium">
            {[
              [ShieldCheck, `Contract ${cabinet.casa}`],
              [Baby, 'Copii, adulți, vârstnici'],
              [CalendarCheck, 'Programări în aceeași săptămână'],
            ].map(([I, t]) => (
              <li key={t} className="flex items-center gap-2 rounded-full border border-accent/20 bg-panel/70 px-3.5 py-2 text-ink/80">
                <I className="size-4 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div data-card className="rounded-3xl border border-ink/10 bg-panel p-6 shadow-xl shadow-ink/5">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={`relative flex size-2.5 ${stare.deschis ? '' : 'opacity-60'}`}>
              {stare.deschis && <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />}
              <span className={`relative inline-flex size-2.5 rounded-full ${stare.deschis ? 'bg-accent' : 'bg-ink/40'}`} />
            </span>
            {stare.text}
          </div>
          <div className="mt-5 flex items-center gap-4">
            {/* ÎNLOCUIEȘTE: pune poza medicului în public/ și folosește <img src="/medic.jpg" ... /> în locul inițialelor */}
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-mint font-sans text-xl font-bold text-accent">CM</div>
            <div>
              <p className="font-sans text-lg font-bold">{cabinet.medic}</p>
              <p className="text-sm text-ink/60">{cabinet.titlu}</p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl bg-base p-4">
              <dt className="text-xs text-ink/55">ani de practică</dt>
              <dd className="font-sans text-2xl font-bold text-accent">{cabinet.aniExperienta}</dd>
            </div>
            <div className="rounded-2xl bg-base p-4">
              <dt className="text-xs text-ink/55">pacienți înscriși</dt>
              <dd className="font-sans text-2xl font-bold text-accent">{cabinet.pacienti}</dd>
            </div>
          </dl>
          <p className="mt-5 rounded-2xl bg-mint/60 p-4 text-sm leading-relaxed text-ink/75">
            <strong className="text-ink">Urgență?</strong> Sunați imediat la <a href="tel:112" className="font-semibold text-accent underline">112</a>. Cabinetul nu tratează urgențe medicale majore.
          </p>
        </div>
      </div>
    </section>
  )
}
