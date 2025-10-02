import React from 'react';

export default function AboutPage() {
  const timeline = [
    { year: "2011", event: "Gründung von Pepe Arts in München" },
    { year: "2015–2019", event: "Produktionen & Kooperationen in DE/EU, erste Residenzen" },
    { year: "2022", event: "Neue interdisziplinäre Arbeiten (u. a. Liquid Links), Vertiefung Research" },
    { year: "2023", event: "Festival- und Open-Air-Formate, Ausbau Education" },
    { year: "2024–heute", event: "Einzug & Aufbau Pepe Dome als dauerhafter Ort für Training, Shows & Festival" }
  ];

  const values = [
    "Künstlerische Freiheit & Verantwortung",
    "Diversität & Zugänglichkeit",
    "Community & Austausch statt Egotrip",
    "Nachhaltigkeit im Alltag (Material, Produktion, Mobilität)",
    "Wertschätzung: faire Bedingungen, klare Kommunikation"
  ];

  const whatWeDo = [
    {
      title: "Produktionen",
      description: "Interdisziplinäre Arbeiten zwischen Circus, Tanz und Installation – von Liquid Links bis zu ortsspezifischen Formaten."
    },
    {
      title: "Festival",
      description: "Das Freeman Festival feiert Freiheit, Vielfalt und zeitgenössischen Zirkus mit internationalen Künstler:innen, Workshops und Talks."
    },
    {
      title: "Training & Research",
      description: "Tägliches Profitraining, Research-Residenzen, Proben und Labs – für Entwicklung statt nur Endprodukt."
    },
    {
      title: "Vermittlung",
      description: "Workshops, Vermittlungsformate und partizipative Projekte für Schulen, Familien & Unternehmen."
    },
    {
      title: "Kooperationen",
      description: "Wir arbeiten mit Kulturhäusern, Festivals, Hochschulen und Partner:innen aus Tech & Wissenschaft zusammen."
    }
  ];

  const faqItems = [
    {
      question: "Kann ich den Dome für Events mieten?",
      answer: "Ja – Infos & Anfrage über pepe-dome.de."
    },
    {
      question: "Gibt es öffentliches Training?",
      answer: "Profitraining täglich 10–14 Uhr (keine Open-Training-Slots)."
    },
    {
      question: "Workshops?",
      answer: "Aktuelle Angebote über Dome/Veranstaltungen."
    }
  ];

  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pepe-dark to-pepe-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white to-pepe-t80 bg-clip-text text-transparent">
            Das Pepe Arts Collective
          </h1>
          <p className="text-xl md:text-2xl text-pepe-gold font-medium mb-4">
            Ein Künstler:innenkollektiv, das seit 2011 den zeitgenössischen Zirkus in München prägt – zwischen Bühne, Forschung & Community.
          </p>
          <p className="text-lg md:text-xl text-pepe-t80 max-w-4xl leading-relaxed">
            Wir verbinden Artistik, Tanz und digitale Kunst zu Erlebnissen, die berühren, irritieren und verbinden. Unser Zuhause: der Pepe Dome im Münchner Ostpark.
          </p>
        </div>
      </div>

      {/* Elevator Pitch */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-pepe-white mb-6">
              Wer wir sind
            </h2>
            <p className="text-pepe-t80 leading-relaxed mb-6">
              Pepe Arts ist ein interdisziplinäres Kollektiv aus Artist:innen, Choreograf:innen, Sound- und Medienkünstler:innen. Wir arbeiten kollaborativ, experimentell und publikumsnah – von intimen Performances bis zu Festivals im großen Zelt.
            </p>
          </div>
          <div className="aspect-square bg-pepe-surface rounded-2xl flex items-center justify-center">
            <div className="w-32 h-32 bg-pepe-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Haltung */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-pepe-white mb-4">Mission</h3>
            <p className="text-pepe-t80 leading-relaxed">
              Wir schaffen Räume für zeitgenössischen Zirkus: offen, inklusiv, experimentell. Wir geben Künstler:innen die Möglichkeit, zu forschen, zu trainieren und Werke zu zeigen.
            </p>
          </div>
          <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-pepe-white mb-4">Vision</h3>
            <p className="text-pepe-t80 leading-relaxed">
              Ein München, in dem Zirkus nicht nur Spektakel ist, sondern eine Sprache für Körper, Geschichten und Gemeinschaft – zugänglich für alle.
            </p>
          </div>
          <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-pepe-white mb-4">Warum Zirkus?</h3>
            <p className="text-pepe-t80 leading-relaxed italic">
              Weil Körper sprechen, wo Worte enden. Weil Risiko Vertrauen braucht. Weil Gemeinschaft entsteht, wenn wir einander halten – auf dem Seil, in der Luft, am Boden.
            </p>
          </div>
        </div>

        {/* Der Ort: Pepe Dome */}
        <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-8 mb-20">
          <h2 className="text-2xl font-display font-bold text-pepe-white mb-4">
            Unser Zuhause: der Pepe Dome
          </h2>
          <p className="text-pepe-t80 leading-relaxed mb-4">
            Mitten im Ostpark liegt unser Geodome – Trainingsort, Bühne und Treffpunkt. Hier entstehen Produktionen, Workshops und das Freeman Festival.
          </p>
          <a
            href="https://pepe-dome.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-pepe-gold hover:text-pepe-gold-hover transition-colors duration-normal"
          >
            <span>Mehr Infos & Events: pepe-dome.de</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Was wir tun */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold text-pepe-white mb-12 text-center">
            Was wir tun
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-pepe-surface border border-pepe-line rounded-xl p-6 hover:border-pepe-line-light transition-all duration-normal hover:shadow-glow-sm"
              >
                <h3 className="text-xl font-display font-semibold text-pepe-white mb-3">
                  {item.title}
                </h3>
                <p className="text-pepe-t80 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-pepe-white mb-12 text-center">
            Unsere Geschichte
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 p-6 bg-pepe-surface border border-pepe-line rounded-xl"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-pepe-gold font-display font-semibold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-pepe-t80 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Was uns wichtig ist */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-pepe-white mb-12 text-center">
            Was uns wichtig ist
          </h2>
          <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-8">
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-pepe-t80 leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-pepe-white mb-12 text-center">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-pepe-surface border border-pepe-line rounded-xl p-6"
              >
                <h3 className="text-lg font-display font-semibold text-pepe-white mb-2">
                  {item.question}
                </h3>
                <p className="text-pepe-t80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community / Mitmachen */}
        <div className="text-center p-8 bg-pepe-surface border border-pepe-line rounded-2xl">
          <h3 className="text-2xl font-display font-semibold text-pepe-white mb-4">
            Werde Teil der Community
          </h3>
          <p className="text-pepe-t64 mb-6 max-w-2xl mx-auto">
            Du willst mittrainieren, mitproduzieren oder unterstützen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@pepearts.de"
              className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-sm"
            >
              Schreib uns
            </a>
            <a
              href="#"
              className="border border-pepe-line hover:border-pepe-gold text-pepe-white hover:text-pepe-gold font-semibold px-6 py-3 rounded-lg transition-all duration-normal"
            >
              Werde Volunteer
            </a>
          </div>

          {/* Kontakt Info */}
          <div className="mt-8 pt-6 border-t border-pepe-line2">
            <h4 className="text-lg font-display font-semibold text-pepe-white mb-3">Kontakt</h4>
            <div className="text-pepe-t80 space-y-1">
              <p>Pepe Arts Collective · München</p>
              <p>
                <a href="mailto:hello@pepearts.de" className="hover:text-pepe-gold transition-colors duration-normal">
                  Mail: hello@pepearts.de
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/pepe_arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pepe-gold transition-colors duration-normal"
                >
                  Instagram: @pepe_arts
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}