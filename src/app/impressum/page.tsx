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
                <p>PepeArts Kollektiv</p>
                <p>Musterstraße 123</p>
                <p>12345 Berlin</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Kontakt
              </h2>
              <div className="text-pepe-t80 space-y-2">
                <p>E-Mail: info@pepearts.de</p>
                <p>Telefon: +49 (0) 30 12345678</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Vertreten durch
              </h2>
              <div className="text-pepe-t80">
                <p>Max Mustermann (Geschäftsführung)</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Registereintrag
              </h2>
              <div className="text-pepe-t80 space-y-2">
                <p>Eintragung im Handelsregister</p>
                <p>Registergericht: Amtsgericht Berlin</p>
                <p>Registernummer: HRB 123456</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="text-pepe-t80">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE 123456789</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                Haftungsausschluss
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Haftung für Inhalte</h3>
                  <p className="leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Haftung für Links</h3>
                  <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-pepe-white mb-2">Urheberrecht</h3>
                  <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}