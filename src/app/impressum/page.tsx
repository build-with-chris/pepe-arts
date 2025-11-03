import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-8 text-pepe-gold">
          Impressum
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-pepe-surface border border-pepe-line rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-pepe-t80 space-y-2">
                <p>Michael Heiduk</p>
                <p>Ranhazweg 18</p>
                <p>85521 Ottobrunn</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Kontakt
              </h2>
              <div className="text-pepe-t80 space-y-2">
                <p>Telefon: +49 179 6990707</p>
                <p>E-Mail: info@pepearts.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-pepe-t80">
                <p>Christoph Hermann</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Urheberrecht
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Alle auf dieser Website verwendeten Medien sind selbst produziert.
                  Alle Rechte vorbehalten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Haftungsausschluss
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                  Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                EU-Streitschlichtung
              </h2>
              <div className="text-pepe-t80 space-y-2">
                <p className="leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <p>
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pepe-gold hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="leading-relaxed">
                  Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}