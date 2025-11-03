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
                1. Verantwortlicher
              </h2>
              <div className="text-pepe-t80 space-y-1">
                <p>Michael Heiduk</p>
                <p>Ranhazweg 18</p>
                <p>85521 Ottobrunn</p>
                <p>Deutschland</p>
                <p>E-Mail: info@pepearts.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                2. Allgemeine Hinweise
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im notwendigen Umfang erhoben. Die Verarbeitung erfolgt nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                3. Zugriffsdaten und Server-Logs
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Beim Aufruf dieser Website werden automatisch Informationen durch den Provider (Vercel Inc.) erhoben und in sogenannten Server-Logfiles gespeichert. Dazu gehören:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="leading-relaxed">
                  Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website. Eine Zusammenführung dieser Daten mit anderen Quellen erfolgt nicht.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                4. Kontaktaufnahme
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Wenn Sie uns per E-Mail kontaktieren, werden die angegebenen Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die Daten werden nicht an Dritte weitergegeben.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                5. Verwendung von Google Fonts
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts, die von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, bereitgestellt werden.
                </p>
                <p className="leading-relaxed">
                  Beim Aufruf der Seite werden die Schriftarten ggf. direkt von Google-Servern geladen. Dabei kann Ihre IP-Adresse an Google übertragen werden.
                </p>
                <p className="leading-relaxed">
                  Mehr Informationen zum Datenschutz bei Google:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pepe-gold hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p className="leading-relaxed text-sm">
                  Wenn möglich, empfehlen wir, Google Fonts lokal auf dem Server zu hosten, um die Datenübertragung an Google zu vermeiden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                6. Cookies
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Diese Website verwendet keine Cookies oder Tracking-Tools.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                7. Ihre Rechte
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht auf:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Zur Ausübung Ihrer Rechte genügt eine E-Mail an:{' '}
                  <a href="mailto:info@pepearts.de" className="text-pepe-gold hover:underline">
                    info@pepearts.de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                8. Hosting über Vercel
              </h2>
              <div className="text-pepe-t80 space-y-4">
                <p className="leading-relaxed">
                  Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.
                </p>
                <p className="leading-relaxed">
                  Vercel speichert möglicherweise technische Daten (z. B. IP-Adresse, Zugriffszeit, Browsertyp) in Server-Logs, um die Website bereitzustellen und zu sichern.
                </p>
                <p className="leading-relaxed">
                  Mehr Informationen:{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pepe-gold hover:underline"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-pepe-white mb-4">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <div className="text-pepe-t80">
                <p className="leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung bei technischen Änderungen oder neuen gesetzlichen Anforderungen anzupassen.
                </p>
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