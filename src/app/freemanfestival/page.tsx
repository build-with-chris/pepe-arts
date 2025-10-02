'use client';

import React, { useState } from 'react';

export default function FreemanFestivalPage() {
  const [expandedEdition, setExpandedEdition] = useState<number | null>(null);

  const pastEditions = [
    {
      year: "2024",
      title: "Freeman Festival '24",
      date: "18. - 22. September 2024",
      location: "Werksviertel Mitte, München (Ostbahnhof)",
      price: "10 bis 25 Euro pro Tag",
      highlights: ["Contemporary Circus + Performance", "Klima & Diversität", "Neue Technologien"],
      description: "Schwerpunkte auf Klima, Diversität, Gleichberechtigung, Demokratie & neue Technologien.",
      details: {
        focus: "Contemporary Circus + Performance, mit Schwerpunkten auf Klima, Diversität, Gleichberechtigung, Demokratie & neue Technologien",
        ticketInfo: "Ticket-Preisspanne: 10 bis 25 Euro pro Tag für Besucher:innen",
        special: "Erstmals im Werksviertel Mitte, München (Ostbahnhof)"
      }
    },
    {
      year: "2023",
      title: "Freeman Festival '23",
      date: "27. - 29. Mai 2023",
      location: "Werksviertel Mitte, Ostbahnhof München",
      motto: "\\u201eConnect Munich\\u201c - Verbindung unter Künstler:innen in München & Publikum verbinden",
      highlights: ["Absurd Hero", "KAAY von Max & Julian Blum", "BOA / Rasoterra Circo"],
      description: "\\u201eConnect Munich\\u201c - Verbindung unter Künstler:innen in München & Publikum verbinden",
      details: {
        lineup: [
          "\\u201eAbsurd Hero\\u201c - Objekt-Performance / Mensch + Objekt / Existenz & Humor",
          "\\u201eKAAY\\u201c von Max & Julian Blum - Geschwisterdynamik + zeitgenössischer Zirkus am chinesischen Mast, Live-Musik Integration",
          "\\u201eBOA\\u201c / Rasoterra Circo - Reflexion über Glück, Emotionen, Grenzerfahrung etc.",
          "\\u201eWe Think It's a Good Idea\\u201c von !UKBUM! - Drei schräge Charaktere, Mischung aus Zirkus, Musik und absurdem Humor",
          "\\u201eC'est bien ici?\\u201c von Compagnie Wurst - Akrobatik mit Rollern & Humor auf kniffeligen Requisiten",
          "Open Stage Varieté: lokale Acts, junge Talente",
          "Jugendzirkus \\u201eNew Generation\\u201c eingebunden in Rahmenprogramm"
        ],
        challenges: "Kurzfristige Programmänderung (Sandra Hanschitz's Act wurde ersetzt durch Compañía JoCa)"
      }
    },
    {
      year: "2022",
      title: "Freeman Festival '22",
      date: "23. April - 08. Mai 2022",
      location: "München",
      highlights: ["Critical Spaces", "NFT All-Access Tickets", "Panel Talk \\u201eThe Future Is Now\\u201c"],
      description: "Themen rund um NFT, Digitalisierung, Performing Arts & Nachhaltigkeit.",
      details: {
        focus: "Themen rund um NFT, Digitalisierung, Performing Arts & Nachhaltigkeit (Panel Talk \\u201eThe Future Is Now\\u201c)",
        lineup: [
          "\\u201eCritical Spaces\\u201c - Performance / Forschung im Raumbezug",
          "Short Cuts: drei kurze zeitgenössische Zirkus-Stücke (Predator, hikohki Gumo, Simple Space)",
          "FeuerWer? - Duo mit Open-Air-Ansatz auf einem Feuerwehrauto, mit Seilartistik etc.",
          "Open Stage / Varieté (Experimentelles, lokale Acts)",
          "Jugendzirkus \\u201eNew Generation\\u201c aus lokalen Gruppen (Circus Leopoldini, Circus Akademie München etc.)"
        ],
        special: [
          "NFT All-Access Tickets über OpenSea",
          "Kooperation mit Künstlern wie Critical Spaces",
          "Open Stage als Format",
          "Integration von Panel Talks und digitalen Themen"
        ]
      }
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedEdition(expandedEdition === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-pepe-dark to-pepe-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pepe-gold/5 to-pepe-bronze/5"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white to-pepe-t80 bg-clip-text text-transparent">
              Freeman Festival
            </h1>
            <p className="text-xl text-pepe-t80 max-w-3xl mx-auto leading-relaxed mb-8">
              Das Freeman Festival feiert Freiheit, Vielfalt und zeitgenössischen Zirkus mit internationalen Künstler:innen, Workshops und Talks.
            </p>
            <div className="inline-block bg-pepe-gold/20 border border-pepe-gold/30 rounded-full px-6 py-2">
              <span className="text-pepe-gold font-semibold">Freeman Festival 2025 • 14.–16. November</span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Festival Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-pepe-surface border border-pepe-line rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-pepe-white mb-4">
                Freeman Festival 2025
              </h2>
              <p className="text-xl text-pepe-gold font-medium mb-2">
                14.–16. November • München (Pepe Dome)
              </p>
              <p className="text-lg text-pepe-t80 font-medium mb-4">
                Themenschwerpunkt: Künstlerische Freiheit, Gemeinschaft & Verbindung
              </p>
              <p className="text-pepe-t80 mb-6 leading-relaxed">
                In diesen drei Tagen öffnen wir das Fenster in eine Welt, in der zeitgenössischer Zirkus seine Grenzen neu definiert. Mit dem Titel \\u201eCelebrating Freedom of Artistic Expression, Through Connection and Unity\\u201c laden wir ein zu Performances, Workshops und Begegnungen, die Menschen verbinden und Inspiration wecken. Internationale Künstler:innen treffen auf unsere lokale Community – im Dome als Bühne und Labor zugleich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://freemanfestival.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-md inline-block text-center"
                >
                  Mehr Infos & Tickets
                </a>
                <a
                  href="https://pepe-dome.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-pepe-line hover:border-pepe-gold text-pepe-white hover:text-pepe-gold font-semibold px-6 py-3 rounded-lg transition-all duration-normal inline-block text-center"
                >
                  Pepe Dome besuchen
                </a>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Freeman Festival Logo Placeholder */}
              <div className="text-center p-8">
                {/* Zelt-ähnliche Form als Platzhalter */}
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-t from-orange-400 to-orange-200 rounded-t-full mx-auto mb-4 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-orange-500"></div>
                    <div className="absolute top-2 left-1/4 w-8 h-1 bg-orange-300 rotate-45"></div>
                    <div className="absolute top-2 right-1/4 w-8 h-1 bg-orange-300 -rotate-45"></div>
                  </div>
                  <div className="text-2xl font-bold text-pink-600 mb-1">FREEMAN</div>
                  <div className="text-2xl font-bold text-pink-600 mb-2">FESTIVAL</div>
                  <div className="text-sm text-pink-500 tracking-wide">CONTEMPORARY CIRCUS FESTIVAL</div>
                </div>
                <div className="mt-4 text-xs text-gray-600">
                  Logo wird hier eingefügt: /public/freeman-festival-logo.png
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Archive Section */}
        <div>
          <h2 className="text-4xl font-display font-bold text-pepe-white mb-8 text-center">
            Festival Archiv
          </h2>
          <div className="space-y-8">
            {pastEditions.map((edition, index) => (
              <div
                key={index}
                className="bg-pepe-surface border border-pepe-line rounded-xl overflow-hidden hover:border-pepe-line-light transition-all duration-normal"
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Year Badge & Basic Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-pepe-gold rounded-full flex items-center justify-center">
                        <span className="text-pepe-black font-bold text-lg">{edition.year}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-pepe-white">
                          {edition.title}
                        </h3>
                        <p className="text-pepe-t64 text-sm">{edition.date}</p>
                        <p className="text-pepe-t64 text-sm">{edition.location}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-pepe-white mb-3">Highlights</h4>
                      <div className="space-y-2">
                        {edition.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-pepe-bronze rounded-full"></div>
                            <span className="text-pepe-t80 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description & Expand Button */}
                    <div>
                      <p className="text-pepe-t64 leading-relaxed mb-4">
                        {edition.description}
                      </p>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="inline-flex items-center space-x-2 text-pepe-gold hover:text-pepe-gold-hover text-sm font-medium transition-colors duration-normal"
                      >
                        <span>Mehr erfahren</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-normal ${expandedEdition === index ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedEdition === index && (
                  <div className="border-t border-pepe-line2 p-6 bg-pepe-ink/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        {edition.details.focus && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Fokus</h4>
                            <p className="text-pepe-t80 leading-relaxed text-sm">{edition.details.focus}</p>
                          </div>
                        )}

                        {edition.details.lineup && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Programm</h4>
                            <ul className="space-y-2">
                              {edition.details.lineup.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-pepe-gold rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-pepe-t80 text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div>
                        {edition.details.special && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">
                              {Array.isArray(edition.details.special) ? 'Besonderheiten' : 'Besonders'}
                            </h4>
                            {Array.isArray(edition.details.special) ? (
                              <ul className="space-y-2">
                                {edition.details.special.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-pepe-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-pepe-t80 text-sm leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-pepe-t80 leading-relaxed text-sm">{edition.details.special}</p>
                            )}
                          </div>
                        )}

                        {edition.details.ticketInfo && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Tickets</h4>
                            <p className="text-pepe-t80 leading-relaxed text-sm">{edition.details.ticketInfo}</p>
                          </div>
                        )}

                        {edition.details.challenges && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Herausforderungen</h4>
                            <p className="text-pepe-t80 leading-relaxed text-sm">{edition.details.challenges}</p>
                          </div>
                        )}

                        {edition.motto && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Motto</h4>
                            <p className="text-pepe-t80 leading-relaxed text-sm italic">{edition.motto}</p>
                          </div>
                        )}

                        {edition.price && (
                          <div className="mb-6">
                            <h4 className="font-display font-semibold text-pepe-white mb-3">Preise</h4>
                            <p className="text-pepe-t80 leading-relaxed text-sm">{edition.price}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-pepe-surface to-pepe-ink border border-pepe-line rounded-2xl">
          <h3 className="text-2xl font-display font-semibold text-pepe-white mb-4">
            Verpasse keine Updates
          </h3>
          <p className="text-pepe-t64 mb-6 max-w-2xl mx-auto">
            Erhalte als Erste*r Informationen über Lineup, Tickets und besondere Events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail Adresse"
              className="flex-1 bg-pepe-black border border-pepe-line rounded-lg px-4 py-3 text-pepe-white placeholder-pepe-t48 focus:border-pepe-gold focus:outline-none transition-colors duration-normal"
            />
            <button className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-sm">
              Anmelden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}