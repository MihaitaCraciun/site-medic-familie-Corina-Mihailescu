# Site Dr. Mihăilescu Corina-Aurora, medic de familie

Site de prezentare de o singură pagină pentru un cabinet de medicină de familie din Brașov (Strada Prahova nr. 30), în contract cu CAS Brașov (React + Vite + Tailwind + GSAP).

## Ce trebuie să înlocuiești

Numele medicului, adresa (Strada Prahova nr. 30, Brașov), telefonul (0268 420 470), forma de organizare (CMI) și afilierea la SNMF Filiala Brașov sunt reale. Restul datelor sunt de exemplu și stau aproape toate în `src/lib/cabinet.js`, marcate cu `// ÎNLOCUIEȘTE`, `// VERIFICĂ` sau `// OPȚIONAL`:

- titlul (specialist / primar)
- reperul (opțional)
- **WhatsApp** (`whatsapp`): telefonul e fix, deci WhatsApp e oprit. Dacă există un mobil cu WhatsApp, scrie-l aici (fără + și fără spații) și apar singure butoanele și formularul de programare pe WhatsApp
- emailul (gol acum, deci nu apare pe site; completează-l dacă vrei)
- casa de asigurări (`casa`, acum „CAS Brașov”)
- anii de practică și numărul de pacienți înscriși
- programul, în lista `program` (orele de început și sfârșit pentru fiecare zi)

Mai sunt texte inventate în:

- `src/components/Despre.jsx`: facultatea, anul deschiderii cabinetului, limbile (lista `repere`) și cele două paragrafe de prezentare
- `src/components/Hero.jsx`: inițialele „CM” din cardul din dreapta
- `src/components/Intrebari.jsx`: verifică răspunsurile (de exemplu dacă faci vizite la domiciliu)
- `src/components/Inscriere.jsx`: verifică regulile de înscriere și ce primesc neasigurații, după contractul tău cu CAS

## Cum adaugi poza ta

1. Pune poza în folderul `public/`, cu numele `medic.jpg`.
2. În `src/components/Despre.jsx`, înlocuiește blocul care începe cu `<div className="relative grid aspect-[4/5]` (până la `</div>`-ul lui) cu:
   `<img src="./medic.jpg" alt={cabinet.medic} className="aspect-[4/5] w-full rounded-3xl object-cover" />`

## Cum rulezi site-ul pe calculatorul tău

Ai nevoie de Node.js instalat (de pe [nodejs.org](https://nodejs.org)). Apoi, în folderul site-ului:

```bash
npm install
npm run dev
```

Se deschide la adresa afișată în terminal (de obicei http://localhost:5173).

## Cum public site-ul

### 1. Publică pe GitHub și Vercel

**Pe GitHub:** creează un cont pe [github.com](https://github.com) dacă nu ai deja, apoi un repo nou și gol pe [github.com/new](https://github.com/new). Alege **Private** (nu Public) și nu bifa „Add README".

```bash
git init
git add .
git commit -m "Primul commit"
git branch -M main
git remote add origin https://github.com/<numele-tau>/<numele-repo>.git
git push -u origin main
```

**Pe Vercel:**

1. Intră pe [vercel.com/new](https://vercel.com/new) și conectează-te cu contul de GitHub.
2. Vercel îți arată lista de repo-uri din contul tău. Fiindcă repo-ul e privat, dacă nu apare în listă, apasă **Adjust GitHub App Permissions** și dă-i lui Vercel acces la el (fie „All repositories", fie doar la acesta).
3. Alege repo-ul de mai sus și apasă **Import**.
4. Vercel recunoaște singur că e un proiect Vite, nu schimba nimic la setări. Apasă **Deploy**.
5. În câteva secunde primești o adresă de forma `nume-proiect.vercel.app`. Site-ul e deja online, gratuit, cu HTTPS.

### 2. Cumpără și leagă un domeniu (opțional)

Ai patru variante. Cea mai simplă e prima, direct din Vercel, „point and click", fără nicio setare tehnică.

**Varianta 1: cumperi domeniul direct din Vercel (cel mai simplu, recomandat)**

1. În proiectul din Vercel, mergi la **Settings → Domains**.
2. Scrie numele pe care îl vrei (ex: `drmihailescu.ro`) și apasă **Buy**.
3. Vercel îți arată prețul anual. Plătești cu cardul, direct în Vercel.
4. Gata, domeniul se leagă automat de site. Nu trebuie să pui nicio setare DNS manual, se face singur.

**Varianta 2: cumperi domeniul de la Porkbun, apoi îl legi de Vercel**

Porkbun e de obicei mai ieftin, mai ales la reînnoirea anuală.

1. Cumpără domeniul pe [porkbun.com](https://porkbun.com) (caută numele dorit, adaugă în coș, plătește).
2. În proiectul din Vercel, mergi la **Settings → Domains**, scrie domeniul cumpărat și apasă **Add**.
3. Vercel îți arată ce înregistrări DNS să pui: de obicei un **A record** cu valoarea `76.76.21.21` pentru domeniul simplu (`@`) și un **CNAME** cu valoarea `cname.vercel-dns.com` pentru `www`.
4. Intră în contul de Porkbun, la domeniul tău apasă **DNS Records** și adaugă exact înregistrările arătate de Vercel (șterge orice înregistrare A sau CNAME pusă automat de Porkbun pe „@" sau „www" ca să nu intre în conflict).
5. Așteaptă până apare **Valid Configuration** în Vercel (de obicei câteva minute, rar câteva ore). HTTPS se activează automat.

**Varianta 3: cumperi domeniul de la GoDaddy, apoi îl legi de Vercel**

1. Cumpără domeniul pe [godaddy.com](https://godaddy.com) (caută numele dorit, adaugă în coș, plătește; poți refuza produsele suplimentare propuse).
2. În proiectul din Vercel, mergi la **Settings → Domains**, scrie domeniul cumpărat și apasă **Add**.
3. Vercel îți arată aceleași două înregistrări DNS ca mai sus (**A record** `76.76.21.21` pentru `@`, **CNAME** `cname.vercel-dns.com` pentru `www`).
4. Intră în contul de GoDaddy, la **My Products / Domenii**, lângă domeniul tău apasă **DNS** (sau „Manage DNS") și adaugă exact acele înregistrări (șterge orice înregistrare A pusă automat de GoDaddy pe „@").
5. Așteaptă până apare **Valid Configuration** în Vercel. HTTPS se activează automat.

**Varianta 4: cumperi domeniul de la Namecheap, apoi îl legi de Vercel**

1. Cumpără domeniul pe [namecheap.com](https://namecheap.com) (caută numele dorit, adaugă în coș, plătește).
2. În proiectul din Vercel, mergi la **Settings → Domains**, scrie domeniul cumpărat și apasă **Add**.
3. Vercel îți arată aceleași două înregistrări DNS ca mai sus.
4. Intră în contul de Namecheap, la domeniul tău mergi la **Advanced DNS** și adaugă exact acele înregistrări (șterge orice înregistrare A sau CNAME pusă automat de Namecheap care ar intra în conflict).
5. Așteaptă până apare **Valid Configuration** în Vercel. HTTPS se activează automat.

**Notă:** indiferent de variantă, folosește exact valorile pe care ți le arată Vercel pe ecranul tău (uneori diferă puțin de la proiect la proiect); cele de mai sus sunt cazul obișnuit.

### 3. Publică actualizări

Dacă ai lucrat cu Claude Code și conectorii de GitHub și Vercel, cere-i pur și simplu să publice din nou modificările, folosind aceiași conectori. Dacă publici singur, manual:

```bash
git add .
git commit -m "Ce ai schimbat"
git push
```

Vercel republică automat noua versiune pe același domeniu, în urma fiecărui `git push`.
