import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Francesco Brambilla, fisioterapista" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali del sito di Francesco Brambilla, fisioterapista a Giussano (MB).",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Informativa sul trattamento dei dati personali" updated="15 ottobre 2026">
      <p className="text-muted-foreground">
        Informativa resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) a chi
        consulta questo sito o invia una richiesta di contatto.
      </p>

      <LegalSection title="1. Titolare del trattamento">
        <p>
          Francesco Brambilla, fisioterapista, P. IVA 12195190967.
          <br />
          Sede professionale: T90 Sport Fitness &amp; Dance, Viale Monza 65, 20833 Giussano (MB).
          <br />
          Email:{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="mailto:francesco.brambilla.ft@gmail.com"
          >
            francesco.brambilla.ft@gmail.com
          </a>
          {" · "}
          Telefono:{" "}
          <a className="text-primary underline underline-offset-2" href="tel:+393452449472">
            +39 345 244 9472
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. Quali dati vengono trattati">
        <p>
          <strong className="text-foreground">Dati forniti dall’utente.</strong> Se compili il
          modulo di prenotazione tratto nome e cognome, telefono, email, il luogo preferito per
          l’appuntamento (e, per i trattamenti a domicilio, comune e CAP), la fascia oraria
          preferita e il testo del messaggio, che è facoltativo. Gli stessi dati vengono trattati se
          mi contatti per telefono, email o WhatsApp.
        </p>
        <p>
          <strong className="text-foreground">Dati di navigazione.</strong> Come per ogni sito,
          l’indirizzo IP e alcuni dati tecnici del dispositivo e del browser sono necessariamente
          trattati dal fornitore che ospita il sito e dai servizi esterni incorporati nelle pagine
          (vedi la{" "}
          <a className="text-primary underline underline-offset-2" href="/cookie">
            Cookie Policy
          </a>
          ). Il sito non utilizza strumenti di analisi o di profilazione.
        </p>
        <p>
          <strong className="text-foreground">Informazioni sulla salute.</strong> Nel modulo ti
          chiedo di non inserire informazioni sanitarie dettagliate e di non allegare referti. Le
          informazioni cliniche vengono raccolte soltanto durante la valutazione in studio, con una
          specifica informativa.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalità e base giuridica">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Rispondere alle richieste di informazioni e di appuntamento: esecuzione di misure
            precontrattuali adottate su richiesta dell’interessato (art. 6, par. 1, lett. b GDPR).
          </li>
          <li>
            Adempiere agli obblighi previsti da leggi e regolamenti (art. 6, par. 1, lett. c GDPR).
          </li>
          <li>
            Garantire la sicurezza e il corretto funzionamento del sito: legittimo interesse del
            titolare (art. 6, par. 1, lett. f GDPR).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Conferimento dei dati">
        <p>
          Il conferimento è facoltativo. I campi contrassegnati come obbligatori nel modulo sono
          però necessari per poter rispondere alla richiesta; senza di essi non è possibile darle
          seguito.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatari dei dati">
        <p>
          I dati non vengono diffusi. Possono essere trattati da fornitori di servizi tecnici che
          operano per conto del titolare (ad esempio hosting del sito e servizio di posta
          elettronica), designati responsabili del trattamento ove previsto. Se usi i collegamenti a
          WhatsApp, Google Maps o LinkedIn, i dati sono trattati anche da tali servizi secondo le
          rispettive informative.
        </p>
        <p>
          Alcuni fornitori possono trattare dati al di fuori dello Spazio Economico Europeo; in tal
          caso il trasferimento avviene con le garanzie previste dal GDPR (ad esempio decisioni di
          adeguatezza o clausole contrattuali tipo).
        </p>
      </LegalSection>

      <LegalSection title="6. Per quanto tempo conservo i dati">
        <p>
          I dati della richiesta di contatto sono conservati per il tempo necessario a rispondere e
          a organizzare l’eventuale appuntamento. Se ha inizio un percorso fisioterapico, la
          documentazione sanitaria è conservata secondo gli obblighi di legge e come indicato
          nell’informativa fornita in studio.
        </p>
      </LegalSection>

      <LegalSection title="7. I tuoi diritti">
        <p>
          Puoi chiedere in qualsiasi momento l’accesso ai tuoi dati, la rettifica, la cancellazione,
          la limitazione del trattamento, la portabilità e opporti al trattamento. Quando il
          trattamento si basa sul consenso, puoi revocarlo in qualsiasi momento, senza effetto sui
          trattamenti già effettuati.
        </p>
        <p>
          Per esercitare i diritti scrivi a{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="mailto:francesco.brambilla.ft@gmail.com"
          >
            francesco.brambilla.ft@gmail.com
          </a>
          . Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati
          personali (
          <a
            className="text-primary underline underline-offset-2"
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noreferrer"
          >
            www.garanteprivacy.it
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="8. Modifiche all’informativa">
        <p>
          Questa informativa può essere aggiornata; la data dell’ultimo aggiornamento è indicata in
          alto nella pagina.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
