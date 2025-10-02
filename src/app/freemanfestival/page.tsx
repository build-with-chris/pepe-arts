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
              <span className="text-pepe-gold font-semibold">Nächste Edition TBA</span>
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
                Nächstes Freeman Festival
              </h2>
              <p className="text-pepe-t80 mb-6 leading-relaxed">
                Das Freeman Festival ist Münchens Bühne für zeitgenössischen Zirkus,
                Performance und experimentelle Kunst. Internationale Künstler:innen,
                lokale Talente und das Publikum kommen zusammen.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Datum: wird bekannt gegeben</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Location: Pepe Dome, Ostpark München</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Programm: Contemporary Circus & Performance</span>
                </div>
              </div>
              <a
                href="https://pepe-dome.de"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-md inline-block"
              >
                Updates auf pepe-dome.de
              </a>
            </div>
            <div className="aspect-video bg-pepe-ink rounded-xl flex items-center justify-center">
              <div className="w-20 h-20 bg-pepe-gold/30 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 010-2h4zM6 6v12h12V6H6zm3-2h6V3H9v1zm0 4a1 1 0 112 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V8z"/>
                </svg>
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