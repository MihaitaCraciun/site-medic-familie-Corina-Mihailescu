import { useState } from 'react'
import { ClipboardList, CreditCard, FileText, IdCard, MessageCircle, Phone, Mail, Pill, Send } from 'lucide-react'
import { cabinet, waLink } from '../lib/cabinet'
import { useReveal } from '../lib/anim'

const motive = ['Consultație (sunt bolnav)', 'Control boală cronică', 'Rețetă', 'Copil (bilanț sau vaccin)', 'Adeverință', 'Înscriere la cabinet', 'Altceva']

export default function Programari() {
  const ref = useReveal()
  const [nume, setNume] = useState('')
  const [motiv, setMotiv] = useState(motive[0])
  const [cand, setCand] = useState('dimineața')

  const mesaj = `Bună ziua, sunt ${nume || '...'}. Aș dori o programare pentru: ${motiv.toLowerCase()}. Mi-ar conveni ${cand}.`

  return (
    <section id="programari" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p data-reveal className="eyebrow">Programări</p>
          <h2 data-reveal className="h2 mt-3">Cel mai repede, la telefon</h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink/70">
            {cabinet.whatsapp
              ? 'Sunați în timpul programului și vă dau o oră. Dacă nu răspund, sunt cu un pacient: lăsați un mesaj pe WhatsApp și vă sun eu înapoi în aceeași zi.'
              : 'Sunați la cabinet în timpul programului și vă dau o oră. Dacă e ocupat, sunt cu un pacient: mai încercați peste câteva minute.'}
          </p>
          <div data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={cabinet.telefonHref} className="btn-primary text-lg"><Phone className="size-5" /> {cabinet.telefon}</a>
            {cabinet.whatsapp && <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost text-lg"><MessageCircle className="size-5" /> WhatsApp</a>}
          </div>
          {cabinet.email && (
            <p data-reveal className="mt-5 flex items-center gap-2 text-sm text-ink/60">
              <Mail className="size-4" /> Pentru documente: <a href={`mailto:${cabinet.email}`} className="font-medium text-accent underline">{cabinet.email}</a>
            </p>
          )}
        </div>

        {cabinet.whatsapp ? (
        <form
          data-reveal
          onSubmit={(e) => { e.preventDefault(); window.open(waLink(mesaj), '_blank', 'noopener') }}
          className="rounded-3xl border border-ink/10 bg-panel p-6 shadow-xl shadow-ink/5 sm:p-8"
        >
          <h3 className="font-sans text-xl font-bold">Cerere de programare pe WhatsApp</h3>
          <p className="mt-1 text-sm text-ink/60">Completați, apăsați butonul, și mesajul se deschide gata scris în WhatsApp.</p>
          <label className="mt-6 block text-sm font-medium">Numele dumneavoastră
            <input value={nume} onChange={(e) => setNume(e.target.value)} required placeholder="ex: Ion Popescu" className="mt-1.5 block min-h-12 w-full rounded-xl border border-ink/15 bg-base px-4 text-base outline-none focus:border-accent" />
          </label>
          <label className="mt-4 block text-sm font-medium">Pentru ce veniți
            <select value={motiv} onChange={(e) => setMotiv(e.target.value)} className="mt-1.5 block min-h-12 w-full rounded-xl border border-ink/15 bg-base px-4 text-base outline-none focus:border-accent">
              {motive.map((m) => <option key={m}>{m}</option>)}
            </select>
          </label>
          <fieldset className="mt-4">
            <legend className="text-sm font-medium">Când v-ar conveni</legend>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {['dimineața', 'după-amiaza'].map((c) => (
                <button type="button" key={c} onClick={() => setCand(c)} className={`min-h-12 rounded-xl border text-base font-medium transition ${cand === c ? 'border-accent bg-mint text-accent' : 'border-ink/15 bg-base'}`}>{c}</button>
              ))}
            </div>
          </fieldset>
          <button type="submit" className="btn-primary mt-6 w-full"><Send className="size-5" /> Trimite pe WhatsApp</button>
          <p className="mt-3 text-xs text-ink/50">Nu scrieți aici detalii despre boală. Le discutăm la cabinet.</p>
        </form>
        ) : (
          <div data-reveal className="rounded-3xl border border-ink/10 bg-panel p-6 shadow-xl shadow-ink/5 sm:p-8">
            <h3 className="font-sans text-xl font-bold">Ce aduceți la consultație</h3>
            <ul className="mt-5 space-y-4">
              {[
                [IdCard, 'Buletinul (pentru copii, certificatul de naștere)'],
                [CreditCard, 'Cardul național de sănătate'],
                [FileText, 'Scrisori medicale și analize recente, dacă aveți'],
                [Pill, 'Lista medicamentelor pe care le luați acum'],
                [ClipboardList, 'Biletul de trimitere sau rețeta veche, dacă veniți pentru reînnoire'],
              ].map(([I, t]) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug"><I className="size-5 shrink-0 text-accent" /> {t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
