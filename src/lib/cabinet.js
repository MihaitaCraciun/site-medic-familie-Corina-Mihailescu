// Toate datele cabinetului într-un singur loc.
// ÎNLOCUIEȘTE valorile marcate cu datele reale înainte de publicare.

export const cabinet = {
  medic: 'Dr. Mihăilescu Corina-Aurora',
  prenume: 'Corina-Aurora',
  titlu: 'Medic specialist medicină de familie', // ÎNLOCUIEȘTE (specialist / primar)
  numeCabinet: 'CMI de Medicină de Familie Dr. Mihăilescu Corina-Aurora',
  formaOrganizare: 'Cabinet Medical Individual (CMI) de Medicină de Familie',
  afiliere: 'Societatea Națională de Medicina Familiei, Filiala Brașov',
  afiliereMembru: 'Membră a Societății Naționale de Medicina Familiei, Filiala Brașov',
  afiliereLink: 'https://snmf.ro/membri/brasov/',
  oras: 'Brașov',
  judet: 'Brașov',
  adresa: 'Strada Prahova nr. 30',
  reper: '', // OPȚIONAL: un reper ușor de găsit (ex: intrarea, etajul)
  telefon: '0268 420 470',
  telefonHref: 'tel:+40268420470',
  // Numărul de mai sus e fix, deci fără WhatsApp. Dacă există un mobil cu WhatsApp, pune-l aici
  // (ex: '40712345678', fără + și fără spații) și apar singure butoanele și formularul de WhatsApp.
  whatsapp: '',
  email: '', // OPȚIONAL: adresa de email a cabinetului; goală = nu apare pe site
  casa: 'CAS Brașov', // VERIFICĂ
  aniExperienta: 14, // ÎNLOCUIEȘTE
  pacienti: '1.800', // ÎNLOCUIEȘTE (pacienți înscriși, aproximativ)
}

// 0 = duminică, 1 = luni ... 6 = sâmbătă
export const program = [
  { zi: 'Luni', idx: 1, ore: [8, 14], nota: 'consultații' },
  { zi: 'Marți', idx: 2, ore: [13, 19], nota: 'consultații' },
  { zi: 'Miercuri', idx: 3, ore: [8, 14], nota: 'consultații + copii sănătoși' },
  { zi: 'Joi', idx: 4, ore: [13, 19], nota: 'consultații' },
  { zi: 'Vineri', idx: 5, ore: [8, 14], nota: 'consultații + vaccinări' },
  { zi: 'Sâmbătă', idx: 6, ore: null, nota: 'închis' },
  { zi: 'Duminică', idx: 0, ore: null, nota: 'închis' },
]

export const ora = (h) => `${String(h).padStart(2, '0')}:00`

export function stareAzi(acum = new Date()) {
  const azi = program.find((p) => p.idx === acum.getDay())
  if (!azi.ore) return { deschis: false, text: `Azi, ${azi.zi.toLowerCase()}, cabinetul e închis` }
  const [de, pana] = azi.ore
  const h = acum.getHours() + acum.getMinutes() / 60
  if (h >= de && h < pana) return { deschis: true, text: `Deschis acum, până la ${ora(pana)}` }
  if (h < de) return { deschis: false, text: `Azi deschidem la ${ora(de)}` }
  return { deschis: false, text: `Azi am închis la ${ora(pana)}` }
}

export const waLink = (mesaj = 'Bună ziua, aș dori o programare la cabinet.') =>
  `https://wa.me/${cabinet.whatsapp}?text=${encodeURIComponent(mesaj)}`
