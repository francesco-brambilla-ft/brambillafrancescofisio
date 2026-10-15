import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Layout condiviso per le pagine legali (Privacy Policy, Cookie Policy).
 * I testi delle pagine sono una bozza redatta in base a ciò che il sito fa
 * effettivamente: vanno fatti verificare da un professionista prima della
 * pubblicazione definitiva.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">Francesco Brambilla</span>
            <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
              Fisioterapista
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Torna al sito
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: {updated}</p>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground/90">
          {children}
        </div>
      </main>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
