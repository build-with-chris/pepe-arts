import React from 'react';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-8 text-pepe-gold">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-pepe-surface border border-pepe-line rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                1. Geltungsbereich
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend &bdquo;AGB&ldquo;) gelten für alle Verträge
                  zwischen dem PepeArts Kollektiv (nachfolgend &bdquo;Anbieter&ldquo;) und seinen Kunden
                  (nachfolgend &bdquo;Kunde&ldquo;) über die Erbringung von Leistungen im Bereich digitaler Kunst,
                  Veranstaltungen und kreativer Dienstleistungen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                2. Vertragsschluss
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Ein Vertrag kommt durch die Annahme des Angebots des Anbieters durch den Kunden zustande.
                  Die Annahme kann ausdrücklich oder durch schlüssiges Verhalten erfolgen.
                </p>
                <p className="leading-relaxed">
                  Angebote des Anbieters sind freibleibend und unverbindlich, es sei denn, sie sind
                  ausdrücklich als verbindlich gekennzeichnet oder enthalten eine bestimmte Annahmefrist.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                3. Leistungen
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">3.1 Leistungsumfang</h3>
                  <p className="leading-relaxed">
                    Der Anbieter erbringt Leistungen in den Bereichen:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Digitale Kunstprojekte und Installationen</li>
                    <li>Veranstaltungsorganisation und -durchführung</li>
                    <li>Kreative Beratung und Konzeptentwicklung</li>
                    <li>Technische Umsetzung interaktiver Projekte</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">3.2 Leistungserbringung</h3>
                  <p className="leading-relaxed">
                    Die konkreten Leistungen, Termine und Vergütungen werden in separaten
                    Leistungsvereinbarungen oder Projektverträgen festgelegt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                4. Preise und Zahlung
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">4.1 Preise</h3>
                  <p className="leading-relaxed">
                    Alle Preise verstehen sich in Euro und zzgl. der gesetzlichen Mehrwertsteuer.
                    Preise gelten nur für den jeweiligen Vertrag und sind nicht übertragbar.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">4.2 Zahlungsbedingungen</h3>
                  <p className="leading-relaxed">
                    Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zu begleichen.
                    Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem
                    Basiszinssatz der Europäischen Zentralbank berechnet.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                5. Urheberrecht und Nutzungsrechte
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">5.1 Urheberrecht</h3>
                  <p className="leading-relaxed">
                    Alle vom Anbieter erstellten Werke, Konzepte und Materialien bleiben Eigentum
                    des Anbieters und sind urheberrechtlich geschützt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">5.2 Nutzungsrechte</h3>
                  <p className="leading-relaxed">
                    Der Kunde erhält die im Vertrag vereinbarten Nutzungsrechte. Ohne ausdrückliche
                    Vereinbarung werden nur einfache Nutzungsrechte für den vereinbarten Zweck eingeräumt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                6. Haftung
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Der Anbieter haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit
                  beruhen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht
                  Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit oder aus
                  der Verletzung wesentlicher Vertragspflichten resultieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                7. Kündigung
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von 4 Wochen
                  zum Monatsende gekündigt werden. Das Recht zur außerordentlichen Kündigung aus
                  wichtigem Grund bleibt unberührt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                8. Schlussbestimmungen
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">8.1 Anwendbares Recht</h3>
                  <p className="leading-relaxed">
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                    UN-Kaufrechts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">8.2 Gerichtsstand</h3>
                  <p className="leading-relaxed">
                    Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Berlin.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">8.3 Salvatorische Klausel</h3>
                  <p className="leading-relaxed">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt
                    dies die Wirksamkeit der übrigen Bestimmungen nicht.
                  </p>
                </div>
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