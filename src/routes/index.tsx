import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  MapPin,
  ArrowRight,
  Activity,
  Dumbbell,
  Target,
  BookOpen,
  Stethoscope,
  HeartPulse,
  Gauge,
  Trophy,
  Hand,
  ClipboardList,
  Users,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroAsset from "@/assets/hero-francesco.jpg.asset.json";
import portraitAsset from "@/assets/chi-sono-francesco.jpg.asset.json";
import studioAsset from "@/assets/t90-giussano.jpg.asset.json";
const heroImg = heroAsset.url;
const portraitImg = portraitAsset.url;
const studioImg = studioAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physiotherapist",
          name: "Francesco Brambilla",
          description:
            "Fisioterapista muscoloscheletrico e sportivo a Giussano (MB).",
          telephone: "+39 345 244 9472",
          email: "francesco.brambilla.ft@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viale Monza 65",
            addressLocality: "Giussano",
            postalCode: "20833",
            addressRegion: "MB",
            addressCountry: "IT",
          },
          areaServed: "Monza e Brianza",
        }),
      },
    ],
  }),
  component: Home,
});

const WHATSAPP_URL =
  "https://wa.me/393452449472?text=" +
  encodeURIComponent(
    "Buongiorno Dottor Brambilla, vorrei richiedere informazioni per una valutazione fisioterapica presso lo studio di Giussano oppure al domicilio.",
  );
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("T90 Sport Fitness & Dance, Viale Monza 65, 20833 Giussano MB");
const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("T90 Sport Fitness & Dance, Viale Monza 65, Giussano") +
  "&output=embed";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#formazione", label: "Formazione" },
  { href: "#servizi", label: "Servizi" },
  { href: "#dove", label: "Dove ricevo" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      {children}
    </div>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <PersonaAlCentro />
        <Metodo />
        <Servizi />
        <ChiSono />
        <Formazione />
        <DoveRicevo />
        <Prenotazione />
        <FAQ />
        <Contatti />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight sm:text-lg">
            Francesco Brambilla
          </span>
          <span className="text-[11px] font-medium tracking-wide text-muted-foreground sm:text-xs">
            Fisioterapista
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#prenotazione">Prenota una valutazione</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Prenota
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Apri menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#prenotazione"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Prenota una valutazione
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow>Fisioterapia · Giussano · Monza e Brianza</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Muoversi meglio.
              <br />
              <span className="text-primary">Tornare a fare ciò che conta.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Fisioterapia muscoloscheletrica e riabilitazione sportiva a Giussano e in
              provincia di Monza e Brianza. Percorsi personalizzati per il recupero dal
              dolore, dagli infortuni e dagli interventi chirurgici.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#prenotazione">
                  Prenota una valutazione <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <a href="#metodo">Scopri il mio metodo</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Ricevo su appuntamento presso T90 Sport Fitness &amp; Dance a Giussano e, su richiesta, effettuo trattamenti fisioterapici domiciliari.
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Approccio clinico basato sulle evidenze scientifiche più recenti
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent/60" />
            <img
              src={heroImg}
              alt="Fisioterapista durante una valutazione con un paziente"
              width={1400}
              height={1200}
              className="aspect-[5/6] w-full rounded-[1.75rem] border border-border object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights() {
  const items = [
    {
      icon: HeartPulse,
      title: "Fisioterapia muscoloscheletrica",
      text: "Valutazione e gestione delle problematiche di articolazioni, muscoli, tendini e colonna vertebrale.",
    },
    {
      icon: Trophy,
      title: "Riabilitazione sportiva",
      text: "Percorsi progressivi dall’infortunio al ritorno all’allenamento e alla performance.",
    },
    {
      icon: Target,
      title: "Percorsi personalizzati",
      text: "Ogni programma è costruito sugli obiettivi, sulle attività e sulla storia della persona.",
    },
    {
      icon: BookOpen,
      title: "Approccio basato sulle evidenze",
      text: "Decisioni cliniche guidate dalle migliori evidenze disponibili e adattate agli obiettivi della persona.",
    },
  ];
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="bg-card p-7 sm:p-8">
            <it.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PERSONA AL CENTRO ---------------- */
function PersonaAlCentro() {
  const chips = [
    "Dolore muscolare o articolare",
    "Difficoltà nel movimento",
    "Infortunio sportivo",
    "Recupero postoperatorio",
    "Tendinopatia",
    "Lombalgia o cervicalgia",
    "Riduzione della forza",
    "Difficoltà nel ritorno allo sport",
  ];
  return (
    <Section id="persona">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Eyebrow>La persona al centro</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Il percorso riabilitativo parte dalla persona, non soltanto dal dolore
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Un dolore, un infortunio o un intervento chirurgico possono limitare il
            lavoro, lo sport e le attività quotidiane. L’obiettivo della fisioterapia
            non è soltanto ridurre i sintomi, ma comprendere quali fattori stanno
            limitando il movimento e costruire un percorso progressivo verso il
            recupero della funzione.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- METODO ---------------- */
function Metodo() {
  const steps = [
    {
      n: "01",
      title: "Ascolto e valutazione",
      text: "La prima valutazione inizia dalla storia del problema, dalle attività che risultano difficili e dagli obiettivi che desideri raggiungere.",
    },
    {
      n: "02",
      title: "Definizione del percorso",
      text: "I risultati della valutazione vengono utilizzati per spiegare la condizione e definire insieme priorità, strategie e tempi indicativi.",
    },
    {
      n: "03",
      title: "Trattamento attivo",
      text: "Il percorso può integrare educazione, esercizio terapeutico, terapia manuale e progressione graduale dei carichi.",
    },
    {
      n: "04",
      title: "Recupero della funzione",
      text: "La riabilitazione prosegue fino al recupero delle attività quotidiane, lavorative o sportive rilevanti per la persona.",
    },
  ];
  return (
    <Section id="metodo" className="bg-card/40 border-y border-border">
      <div className="max-w-2xl">
        <Eyebrow>Il metodo</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Un percorso costruito sui tuoi obiettivi
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-border bg-background p-6"
          >
            <div className="text-xs font-semibold tracking-widest text-primary">
              {s.n}
            </div>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- SERVIZI ---------------- */
function Servizi() {
  const items = [
    {
      icon: ClipboardList,
      t: "Valutazione fisioterapica",
      d: "Analisi della storia clinica, del movimento, della funzione e degli obiettivi, finalizzata alla definizione del percorso riabilitativo.",
    },
    {
      icon: Stethoscope,
      t: "Fisioterapia muscoloscheletrica",
      d: "Valutazione e gestione del dolore e delle limitazioni che interessano articolazioni, muscoli, tendini e colonna vertebrale.",
    },
    {
      icon: HeartPulse,
      t: "Riabilitazione postoperatoria",
      d: "Recupero progressivo della mobilità, della forza e della funzione dopo interventi chirurgici ortopedici.",
    },
    {
      icon: Trophy,
      t: "Riabilitazione sportiva",
      d: "Gestione dell’infortunio dalla fase iniziale fino alla ripresa progressiva dell’allenamento e dello sport.",
    },
    {
      icon: Dumbbell,
      t: "Esercizio terapeutico",
      d: "Programmi individualizzati per migliorare mobilità, forza, controllo motorio e capacità di tollerare i carichi.",
    },
    {
      icon: Hand,
      t: "Terapia manuale",
      d: "Tecniche manuali utilizzate, quando indicate, come supporto alla gestione dei sintomi e al recupero del movimento.",
    },
    {
      icon: Gauge,
      t: "Valutazione della forza",
      d: "Misurazione oggettiva della forza e delle differenze tra arti, tramite dinamometri e pedane di forza, per guidare la progressione riabilitativa.",
    },
    {
      icon: Compass,
      t: "Return to Sport",
      d: "Test e criteri funzionali per guidare il ritorno graduale all’allenamento e all’attività sportiva.",
    },
  ];
  return (
    <Section id="servizi">
      <div className="max-w-2xl">
        <Eyebrow>Servizi</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Come posso aiutarti
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ogni percorso viene adattato alla fase clinica, alle capacità della persona e
          alle richieste delle attività che desidera recuperare.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <div
            key={s.t}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/60 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CHI SONO ---------------- */
function ChiSono() {
  return (
    <Section id="chi-sono" className="bg-card/40 border-y border-border">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent/60" />
          <img
            src={portraitImg}
            alt="Ritratto ambientato di un fisioterapista"
            loading="lazy"
            width={900}
            height={1200}
            className="aspect-[3/4] w-full rounded-[1.75rem] border border-border object-cover"
          />
        </div>
        <div>
          <Eyebrow>Chi sono</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Competenza clinica e conoscenza diretta dello sport
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sono Francesco Brambilla, fisioterapista specializzato nella valutazione e
            nel trattamento delle problematiche muscoloscheletriche e sportive. Ho
            maturato esperienza con pazienti ortopedici, persone impegnate in percorsi
            postoperatori e atleti, lavorando in strutture sanitarie, studi
            fisioterapici e nel calcio di Serie D. La mia attività clinica integra il
            ragionamento fisioterapico con l’esercizio terapeutico, la terapia manuale
            e la valutazione oggettiva delle capacità fisiche.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Lo sport fa parte della mia vita fin dall’infanzia. Pratico Vovinam Viet Vo
            Dao e ho partecipato con la squadra nazionale a competizioni europee e
            mondiali. Questa esperienza mi permette di comprendere anche dal punto di
            vista dell’atleta le esigenze e le difficoltà legate al ritorno allo sport.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FORMAZIONE ---------------- */
function Formazione() {
  const timeline = [
    {
      n: "01",
      title:
        "Master of Advanced Studies in Orthopaedic Manual Physical Therapy — OMPT",
      sub: "SUPSI, Lugano — 2021 - in corso",
      badge: "In corso",
    },
    {
      n: "02",
      title: "Master in Strength and Conditioning",
      sub: "Strength, Aerobic Conditioning and Power — PhisioVit — Roma — 2024",
    },
    {
      n: "03",
      title: "Laurea in Fisioterapia",
      sub: "Università degli Studi di Milano-Bicocca — 110/110 — 2021",
    },
    {
      n: "04",
      title: "Diploma di Perito Chimico",
      sub: "Formazione tecnica superiore — IISS Alessandro Greppi — 2018",
    },
  ];
  const eventi = [
    {
      t: "32nd Isokinetic Conference — Football Medicine: New Frontiers",
      d: "Isokinetic Medical Group · Madrid · 3-5 maggio 2025",
    },
    {
      t: "LCA e lesioni associate: percorso riabilitativo dall’intervento al Return to Play",
      d: "23 aprile 2024 · Relatori: Prof. Ezio Adriani e Dott.ssa Simona Cerulli",
    },
    {
      t: "LCA Rehab — Dalla Chirurgia al Return to Play",
      d: "FisioScience · settembre 2022",
    },
    {
      t: "Tendon Rehab — Gestione delle tendinopatie dell’arto inferiore",
      d: "FisioScience · gennaio 2021",
    },
  ];
  const certificazioni = [
    {
      t: "Istruttore di ginnastica finalizzata alla salute e al fitness",
      d: "Diploma Nazionale ASI · ente di promozione sportiva riconosciuto dal CONI · 2024",
    },
    {
      t: "Allenatore di Vovinam Viet Vo Dao",
      d: "Diploma Nazionale ASI · International ASI Do · 2020",
    },
  ];
  return (
    <Section id="formazione">
      <div className="max-w-2xl">
        <Eyebrow>Formazione</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Formazione continua e pratica basata sulle evidenze scientifiche
        </h2>
      </div>

      <div className="mt-12 grid gap-14 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Left: timeline */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Percorso accademico e formazione avanzata
          </h3>
          <ol className="relative mt-6">
            <span
              aria-hidden
              className="absolute left-[15px] top-3 bottom-3 w-px bg-border"
            />
            {timeline.map((it) => (
              <li key={it.n} className="relative grid grid-cols-[32px_1fr] gap-4 py-3">
                <div className="relative flex items-center justify-center">
                  <span className="h-[14px] w-[14px] rounded-full border-2 border-primary bg-background" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-primary">
                    {it.n}
                    {it.badge && (
                      <span className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-primary">
                        {it.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-base font-semibold leading-snug">
                    {it.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{it.sub}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: sub-sections */}
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold">
              Formazione specialistica ed eventi scientifici
            </h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {eventi.map((e) => (
                <li key={e.t} className="py-4">
                  <div className="text-sm font-medium leading-snug">{e.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">
              Certificazioni ed esperienza sportiva
            </h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {certificazioni.map((e) => (
                <li key={e.t} className="py-4">
                  <div className="text-sm font-medium leading-snug">{e.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- DOVE RICEVO ---------------- */
function DoveRicevo() {
  return (
    <Section id="dove" className="bg-card/40 border-y border-border">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Dove ricevo</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            T90 Sport Fitness &amp; Dance — Giussano
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ricevo su appuntamento dal lunedì al venerdì, all’interno di un ambiente
            attrezzato per la valutazione, l’esercizio terapeutico e la riabilitazione
            funzionale.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-background p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-semibold">T90 Sport Fitness &amp; Dance</div>
                <div className="text-muted-foreground">Viale Monza 65</div>
                <div className="text-muted-foreground">20833 Giussano (MB)</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Parcheggio disponibile in prossimità della struttura.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-border bg-background/60 p-5">
            <div className="text-sm font-semibold">
              Trattamento fisioterapico domiciliare
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              È possibile richiedere una valutazione o un trattamento direttamente
              al domicilio. La disponibilità viene confermata in base alla zona,
              agli spostamenti necessari e all’organizzazione degli appuntamenti.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4 rounded-full">
              <a href="#prenotazione">Richiedi un trattamento domiciliare</a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                Ottieni indicazioni
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#prenotazione">Prenota una valutazione</a>
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <img
            src={studioImg}
            alt="Area riabilitativa attrezzata"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
          />
          <iframe
            title="Mappa T90 Sport Fitness & Dance, Giussano"
            src={MAPS_EMBED}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-border"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PRENOTAZIONE ---------------- */
function Prenotazione() {
  const [sent, setSent] = useState(false);
  const [sede, setSede] = useState("");
  const isDomicilio = sede === "domicilio";
  return (
    <section
      id="prenotazione"
      className="scroll-mt-24 bg-primary py-20 text-primary-foreground sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Prenotazione
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Inizia il tuo percorso
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">
              Durante la prima valutazione analizzeremo il problema, le attività che
              risultano limitate e gli obiettivi che desideri raggiungere. Al termine
              della valutazione definiremo insieme le strategie e i primi passi del
              percorso riabilitativo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Prenota tramite WhatsApp
              </a>
              <a
                href="tel:+393452449472"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Chiamami
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                "Richiesta prenotazione valutazione fisioterapica",
              );
              const luogoLabel =
                sede === "giussano"
                  ? "T90 Sport Fitness & Dance — Giussano"
                  : sede === "domicilio"
                    ? "Trattamento al domicilio"
                    : "";
              const body = encodeURIComponent(
                `Nome e cognome: ${data.get("nome")}\n` +
                  `Telefono: ${data.get("telefono")}\n` +
                  `Email: ${data.get("email")}\n` +
                  `Luogo preferito: ${luogoLabel}\n` +
                  (sede === "domicilio"
                    ? `Comune: ${data.get("comune")}\nCAP: ${data.get("cap")}\n`
                    : "") +
                  `Fascia oraria preferita: ${data.get("fascia")}\n` +
                  `Messaggio: ${data.get("messaggio") || "-"}`,
              );
              window.location.href = `mailto:francesco.brambilla.ft@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="rounded-3xl border border-primary-foreground/15 bg-background p-6 text-foreground shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome e cognome" name="nome" required />
              <Field label="Telefono" name="telefono" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <Label className="text-xs font-medium">
                  Luogo preferito per l’appuntamento
                </Label>
                <Select value={sede} onValueChange={setSede}>
                  <SelectTrigger className="mt-1.5 h-11">
                    <SelectValue placeholder="Seleziona una preferenza" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="giussano">
                      T90 Sport Fitness &amp; Dance — Giussano
                    </SelectItem>
                    <SelectItem value="domicilio">
                      Trattamento al domicilio
                    </SelectItem>
                  </SelectContent>
                </Select>
                {/* Native hidden required input to enforce a valid selection */}
                <input
                  tabIndex={-1}
                  aria-hidden
                  className="pointer-events-none absolute h-0 w-0 opacity-0"
                  value={sede}
                  onChange={() => {}}
                  required
                />
              </div>
              {isDomicilio && (
                <>
                  <Field label="Comune" name="comune" required />
                  <Field label="CAP" name="cap" required />
                  <p className="text-xs text-muted-foreground sm:col-span-2 -mt-2">
                    L’effettiva disponibilità del trattamento domiciliare verrà
                    confermata dopo aver verificato la zona e l’organizzazione
                    degli appuntamenti.
                  </p>
                </>
              )}
              <div className="sm:col-span-2">
                <Label className="text-xs font-medium">
                  Fascia oraria preferita
                </Label>
                <Select name="fascia" defaultValue="mattina">
                  <SelectTrigger className="mt-1.5 h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mattina">Mattina</SelectItem>
                    <SelectItem value="pranzo">Pausa pranzo</SelectItem>
                    <SelectItem value="pomeriggio">Pomeriggio</SelectItem>
                    <SelectItem value="sera">Sera</SelectItem>
                    <SelectItem value="flessibile">Flessibile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label className="text-xs font-medium">Messaggio (facoltativo)</Label>
                <Textarea
                  name="messaggio"
                  rows={4}
                  className="mt-1.5"
                  placeholder="Descrivi brevemente la tua richiesta"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Per tutelare la tua privacy, evita di inserire informazioni sanitarie
                  dettagliate o allegare referti.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <Checkbox id="privacy" required className="mt-0.5" />
                <Label
                  htmlFor="privacy"
                  className="text-xs leading-relaxed text-muted-foreground"
                >
                  Ho letto e accetto l’informativa sul trattamento dei dati personali.
                </Label>
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
              Invia richiesta
            </Button>
            {sent && (
              <p className="mt-3 text-xs text-muted-foreground">
                Si aprirà il tuo client di posta con la richiesta precompilata. Per
                l’invio automatico è necessario configurare un servizio email
                (es. Resend o Lovable Cloud).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs font-medium">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 h-11"
      />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "È necessaria una prescrizione medica?",
      a: "In molti casi è possibile rivolgersi direttamente al fisioterapista. Qualora emergano elementi che richiedano un approfondimento medico o specialistico, verrà consigliato il professionista più appropriato.",
    },
    {
      q: "Quanto dura la prima visita?",
      a: "La prima valutazione ha una durata indicativa di 60 minuti. Le sedute successive durano indicativamente 50 minuti, in relazione alle necessità del percorso.",
    },
    {
      q: "Devo portare esami o referti?",
      a: "Quando disponibili, possono essere utili per integrare le informazioni raccolte durante la valutazione. Non sostituiscono tuttavia la valutazione clinica e funzionale.",
    },
    {
      q: "Come devo vestirmi?",
      a: "È consigliato un abbigliamento comodo che permetta di osservare il movimento ed eseguire eventuali test o esercizi.",
    },
    {
      q: "Tratti anche persone che non praticano sport?",
      a: "Sì. Il percorso viene adattato alle esigenze della persona, che si tratti di recuperare le attività quotidiane, il lavoro, l’attività fisica o lo sport agonistico.",
    },
    {
      q: "Quante sedute saranno necessarie?",
      a: "Non esiste un numero standard. Frequenza e durata del percorso dipendono dalla condizione, dalla risposta al trattamento e dagli obiettivi concordati.",
    },
    {
      q: "Durante le sedute vengono svolti esercizi?",
      a: "L’esercizio terapeutico rappresenta spesso una componente centrale del percorso. Tipologia e intensità vengono adattate alla fase riabilitativa e alle capacità individuali.",
    },
    {
      q: "Posso prenotare dopo un intervento chirurgico?",
      a: "Sì. Il percorso postoperatorio viene organizzato considerando il tipo di intervento, le indicazioni del chirurgo e l’evoluzione clinica.",
    },
  ];
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Domande frequenti
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Le informazioni più richieste sul percorso di valutazione e riabilitazione.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CONTATTI ---------------- */
function Contatti() {
  return (
    <Section id="contatti" className="bg-card/40 border-y border-border">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Contatti</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Francesco Brambilla
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Fisioterapista muscoloscheletrico e sportivo
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <ContactLine
              icon={Phone}
              label="Telefono"
              value="+39 345 244 9472"
              href="tel:+393452449472"
            />
            <ContactLine
              icon={MessageCircle}
              label="WhatsApp"
              value="+39 345 244 9472"
              href={WHATSAPP_URL}
              external
            />
            <ContactLine
              icon={Mail}
              label="Email"
              value="francesco.brambilla.ft@gmail.com"
              href="mailto:francesco.brambilla.ft@gmail.com"
            />
            <ContactLine
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/francesco-brambilla"
              href="https://www.linkedin.com/in/francesco-brambilla-9993b7173/"
              external
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-semibold">Sede</div>
              <div className="mt-1 text-muted-foreground">
                T90 Sport Fitness &amp; Dance
                <br />
                Viale Monza 65
                <br />
                20833 Giussano (MB)
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3">
            <Users className="mt-0.5 h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-semibold">Dati professionali</div>
              <div className="mt-1 text-muted-foreground">
                Iscritto all’Ordine dei Fisioterapisti del Lazio, n. 11320
                <br />
                P. IVA 12195190967
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-2 -mx-3 transition-colors hover:border-border hover:bg-background"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/60 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="font-medium">{value}</span>
      </span>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-bold">Francesco Brambilla</div>
          <div className="text-xs text-muted-foreground">
            Fisioterapista muscoloscheletrico e sportivo
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.linkedin.com/in/francesco-brambilla-9993b7173/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contatti
          </div>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a href="tel:+393452449472" className="hover:text-primary">
                +39 345 244 9472
              </a>
            </li>
            <li>
              <a
                href="mailto:francesco.brambilla.ft@gmail.com"
                className="hover:text-primary"
              >
                francesco.brambilla.ft@gmail.com
              </a>
            </li>
            <li className="text-muted-foreground">
              T90 Sport Fitness &amp; Dance — Viale Monza 65, 20833 Giussano (MB)
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Informazioni
          </div>
          <ul className="mt-3 space-y-1.5 text-muted-foreground">
            <li>Iscritto all’Ordine dei Fisioterapisti del Lazio, n. 11320</li>
            <li>P. IVA 12195190967</li>
          </ul>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
            <li>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Preferenze cookie
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-8">
          © 2026 Francesco Brambilla — Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}