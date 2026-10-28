import { cabinet, ora, program, stareAzi } from '../lib/cabinet'

export default function Subsol() {
  const stare = stareAzi()
  return (
    <footer className="rounded-t-3xl bg-deep text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-sans text-xl font-bold text-white">{cabinet.medic}</p>
          <p className="mt-1 text-sm">{cabinet.titlu}</p>
          <p className="mt-4 text-sm">{cabinet.formaOrganizare}<br />În contract cu {cabinet.casa}</p>
          <p className="mt-3 text-sm"><a href={cabinet.afiliereLink} target="_blank" rel="noreferrer" className="underline hover:text-white">{cabinet.afiliereMembru}</a></p>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <span className={`size-2 rounded-full ${stare.deschis ? 'animate-pulse bg-[#7FD8CC]' : 'bg-white/30'}`} /> {stare.text}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7FD8CC]">Contact</p>
          <p className="mt-3"><a href={cabinet.telefonHref} className="text-lg font-semibold text-white">{cabinet.telefon}</a></p>
          {cabinet.whatsapp && <p className="mt-1"><a href={`https://wa.me/${cabinet.whatsapp}`} className="hover:text-white">WhatsApp</a></p>}
          {cabinet.email && <p className="mt-1"><a href={`mailto:${cabinet.email}`} className="hover:text-white">{cabinet.email}</a></p>}
          <p className="mt-3">{cabinet.adresa}<br />{cabinet.oras}, jud. {cabinet.judet}</p>
          <p className="mt-3">Urgențe: <a href="tel:112" className="font-semibold text-white">112</a></p>
        </div>
        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7FD8CC]">Program</p>
          <ul className="mt-3 space-y-1">
            {program.map((p) => (
              <li key={p.zi} className="flex justify-between gap-6"><span>{p.zi}</span><span className="font-mono">{p.ore ? `${ora(p.ore[0])}–${ora(p.ore[1])}` : 'închis'}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {cabinet.numeCabinet}. Informațiile de pe site nu înlocuiesc consultul medical.
      </div>
    </footer>
  )
}
