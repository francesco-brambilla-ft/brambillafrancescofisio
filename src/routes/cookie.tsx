import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Francesco Brambilla, fisioterapista" },
      {
        name: "description",
        content:
          "Informazioni sui cookie e sui servizi di terze parti utilizzati dal sito di Francesco Brambilla, fisioterapista a Giussano (MB).",
      },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalPage title="Cookie Policy" updated="15 ottobre 2026">
      <p className="text-muted-foreground">
        Questa pagina spiega quali cookie e quali servizi di terze parti sono presenti sul sito, e
        come puoi gestirli. Per il trattamento dei dati personali consulta la{" "}
        <a className="text-primary underline underline-offset-2" href="/privacy">
          Privacy Policy
        </a>
        .
      </p>

      <LegalSection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell’utente per
          ricordare alcune informazioni o per riconoscerlo nelle visite successive.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookie utilizzati da questo sito">
        <p>
          Il sito non imposta cookie propri, non utilizza strumenti di analisi statistica, di
          profilazione o di pubblicità e non mostra banner pubblicitari.
        </p>
      </LegalSection>

      <LegalSection title="3. Servizi di terze parti">
        <p>
          <strong className="text-foreground">Google Fonts.</strong> Il carattere tipografico del
          sito (Manrope) viene caricato dai server di Google. Per questo motivo Google può ricevere
          l’indirizzo IP e alcuni dati tecnici del browser dell’utente.
        </p>
        <p>
          <strong className="text-foreground">Google Maps.</strong> La mappa della sede non viene
          caricata automaticamente: compare soltanto dopo che l’utente preme il pulsante dedicato.
          Da quel momento Google può trattare dati dell’utente e impostare propri cookie, secondo la{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            informativa di Google
          </a>
          .
        </p>
        <p>
          <strong className="text-foreground">Collegamenti esterni.</strong> I collegamenti a
          WhatsApp, Google Maps (indicazioni stradali) e LinkedIn portano a servizi di terzi, che si
          attivano solo se l’utente li apre e sono regolati dalle rispettive informative.
        </p>
      </LegalSection>

      <LegalSection id="preferenze" title="4. Come gestire le preferenze">
        <p>
          Poiché il sito non utilizza cookie che richiedono il consenso, non è presente un banner da
          accettare. Se hai caricato la mappa e vuoi revocare la scelta, ricarica la pagina: la
          mappa non verrà mostrata finché non premi di nuovo il pulsante.
        </p>
        <p>
          Puoi in ogni caso bloccare o cancellare i cookie dalle impostazioni del tuo browser
          (Chrome, Firefox, Safari, Edge): la procedura è descritta nelle guide di ciascun browser.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
