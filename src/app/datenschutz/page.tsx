import React from 'react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-8 text-pepe-gold">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-pepe-surface border border-pepe-line rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Allgemeine Hinweise</h3>
                  <p className="leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Datenerfassung auf dieser Website</h3>
                  <p className="leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    Dessen Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo;
                    in dieser Datenschutzerklärung entnehmen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                2. Hosting
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Externes Hosting</h3>
                  <p className="leading-relaxed">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                    Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                    Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                    Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                    sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Datenschutz</h3>
                  <p className="leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="mt-2 space-y-1">
                    <p>PepeArts Kollektiv</p>
                    <p>Musterstraße 123</p>
                    <p>12345 Berlin</p>
                    <p>E-Mail: info@pepearts.de</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Speicherdauer</h3>
                  <p className="leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                    wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                    Datenverarbeitung entfällt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Cookies</h3>
                  <p className="leading-relaxed">
                    Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
                    Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
                    vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
                    (dauerhafte Cookies) auf Ihrem Endgerät gespeichert.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Server-Log-Dateien</h3>
                  <p className="leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                    genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                    Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
                    Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                5. Ihre Rechte
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung oder Löschung dieser Daten zu verlangen</li>
                  <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>der Datenverarbeitung zu widersprechen</li>
                  <li>Ihre Daten in einem gängigen Format zu erhalten (Datenportabilität)</li>
                </ul>
              </div>
            </section>

            <section className="pt-6 border-t border-pepe-line2">
              <p className="text-pepe-t48 text-sm">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}