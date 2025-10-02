'use client';

import React, { useState } from 'react';

export default function ProductionsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const productions = [
    {
      title: "Orbital Objects",
      category: "zeitgenössische Zirkus-Recherche / Objekt-Theater",
      shortDescription: "Objekttheater und zeitgenössischer Zirkus verschmelzen in drei experimentellen Teilen.",
      fullDescription: "Orbital Objects verbindet Objekttheater und zeitgenössischen Zirkus: In drei Teilen verschmelzen Dramaturgie, Installation und Artistik. Das Publikum erhält die Möglichkeit, selbst Objekte zum Leben zu erwecken – und so die Beziehung zur materiellen Welt zu hinterfragen. Personen und Gegenstände treten in Wechselspiel mit den Performer:innen, die sich entpersonalisieren und scheinbar leblosen Dingen Leben einhauchen.",
      premiere: "05.05.2022",
      features: [
        "Drei Teile / Versuchsanordnungen",
        "Mischung aus Installation, Objekt-Theater, Drama & Artistik",
        "Publikumseinbindung (Objekt-Interaktion)"
      ],
      tags: ["Objekt-Theater", "Installation", "Publikumsinteraktion"],
      image: "/OO.webp"
    },
    {
      title: "Critical Spaces",
      category: "Performance / Digital Research",
      shortDescription: "Eine digitale Performance-Forschung über Raumwahrnehmung und menschliche Interaktion.",
      fullDescription: "Critical Spaces lädt dazu ein, Raum neu zu denken – architektonisch, sozial, mathematisch. Wie verhalten wir uns zueinander auf engem Raum? Wo hört meine Zone auf und beginnt deine? Mit Elementen aus Tanz, Acrobatik und digitalem Motion Capture entsteht ein Stück, das zwischen Körper und Raum vermittelt.",
      cast: "Sophie Colindres, Jawad Rajpoot, Julia Sophie Ladner",
      team: "Leitung: Michael Heiduk; Assistenz: Chris Hermann; Digital Content: Nicole Pobst",
      features: [
        "Digitalisierte Performance (Film, VR, 360°)",
        "Forschung & Technologie & Performance verbinden",
        "Thema Raumwahrnehmung & Interaktion"
      ],
      tags: ["Digital Research", "Motion Capture", "VR"],
      image: "/Critical Spaces.jpeg.webp"
    },
    {
      title: "Liquid Links",
      subtitle: "Liquid Links – Short Cuts",
      category: "Zirkus × Tanz / Interdisziplinär",
      shortDescription: "Contemporary Circus und zeitgenössischer Tanz verschmelzen zu einer Einheit.",
      fullDescription: "Liquid Links verwebt Elemente aus Contemporary Circus und zeitgenössischem Tanz. Unterschiedliche Akteure treten in Verbindung – durch Stärke, Loslassen, Neuformierung. In der Version Short Cuts werden Ausschnitte und Highlights gezeigt.",
      features: [
        "Interdisziplinärer Ansatz (Cirque Nouveau)",
        "Mischung aus Tanz & Artistik",
        "Fokus auf Verbindung & Trennung, Freiheit"
      ],
      tags: ["Contemporary Circus", "Tanz", "Interdisziplinär"],
      image: "/LiquidLinks.webp"
    },
    {
      title: "Isola + Ion",
      category: "Forschungsstück / Corona-Zeit",
      shortDescription: "Eine Performance über Isolation und Abstand in Zeiten der Pandemie.",
      fullDescription: "Isola + Ion thematisiert Isolation und Abstand in Zeiten der Pandemie. Performer:innen agieren in ihren Räumen, mit seltsamen Obsessionen & Bewegungsmustern. Kontaktverbot wird Teil der Performance.",
      features: [
        "Themen Isolation & Distanz",
        "Einsatz von Akrobatik, Balance, Jonglage",
        "Reduziertes Setting & kreative Einschränkungen"
      ],
      tags: ["Pandemie-Theater", "Isolation", "Akrobatik"]
    },
    {
      title: "Identity",
      category: "Zirkustheater / Tanz",
      shortDescription: "Eine Erkundung von Herkunft, Wurzeln und Selbstbild in bewegten Bildern.",
      fullDescription: "Identity untersucht Herkunft, Wurzeln und Selbstbild. In einer Welt, in der Kulturen aufeinandertreffen, fragen die Performer:innen: Wer bin ich? Was zeichnet mich aus? In imaginären Räumen entstehen Szenen von Anderssein und Begegnung.",
      features: [
        "Tanz + Artistik",
        "Bildhafte, imaginiert-räumliche Szenen"
      ],
      tags: ["Identität", "Kulturelle Begegnung", "Tanz"],
      image: "/Identity.webp"
    },
    {
      title: "Emphalla",
      category: "Zirkustheater / Performance",
      shortDescription: "Eine metaphorische Erkundung von Identität und Spiegelbildern.",
      fullDescription: "Emphalla wirft Fragen auf: Wer sind wir? Was spiegelt uns? Performer:innen erkunden Identität und Spiegelbilder in Bewegung, Objekten und Metaphern.",
      tags: ["Identität", "Spiegelbilder", "Metaphorik"]
    },
    {
      title: "Solos",
      category: "Solo-Performances / Festival-Performance",
      shortDescription: "Solo-Performances Münchner Künstler:innen im Spannungsfeld von Kunst und Artistik.",
      fullDescription: "Solos präsentiert Solo-Performances Münchner Künstler:innen. Im Spannungsfeld von Kunst und Artistik werden experimentelle Arbeiten gezeigt und Disziplinen überbrückt.",
      date: "15.–16.07.2023",
      location: "Amphitheater, Tollwood Sommerfestival",
      tags: ["Solo-Performance", "Festival", "Experimental"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pepe-dark to-pepe-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white to-pepe-t80 bg-clip-text text-transparent">
            Productions
          </h1>
          <p className="text-xl text-pepe-t80 max-w-3xl leading-relaxed">
            Unsere Produktionen verbinden zeitgenössischen Zirkus mit experimenteller Kunst.
            Von intimen Solo-Performances bis hin zu interdisziplinären Forschungsprojekten –
            hier entstehen neue Formen des künstlerischen Ausdrucks.
          </p>
        </div>
      </div>

      {/* Productions Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {productions.map((production, index) => (
            <div
              key={index}
              className="bg-pepe-surface border border-pepe-line rounded-2xl overflow-hidden transition-all duration-normal hover:border-pepe-line-light hover:shadow-glow-sm"
            >
              {/* Card Header - Always Visible */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-pepe-white mb-2 hover:text-pepe-gold transition-colors duration-normal">
                      {production.title}
                      {production.subtitle && (
                        <span className="block text-lg text-pepe-t80 font-normal mt-1">
                          {production.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="text-pepe-gold text-sm font-medium mb-3">
                      {production.category}
                    </p>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button className="ml-4 w-8 h-8 bg-pepe-ink border border-pepe-line2 rounded-lg flex items-center justify-center text-pepe-t64 hover:text-pepe-gold hover:border-pepe-gold/30 transition-all duration-normal">
                    <svg
                      className={`w-4 h-4 transition-transform duration-normal ${
                        expandedCard === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <p className="text-pepe-t64 leading-relaxed mb-4">
                  {production.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {production.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-pepe-ink text-pepe-t80 text-xs rounded-full border border-pepe-line2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="border-t border-pepe-line2 p-6 bg-pepe-ink/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h4 className="font-display font-semibold text-pepe-white mb-3">
                        Beschreibung
                      </h4>
                      <p className="text-pepe-t80 leading-relaxed mb-6">
                        {production.fullDescription}
                      </p>

                      {production.features && (
                        <div>
                          <h4 className="font-display font-semibold text-pepe-white mb-3">
                            Besonderheiten
                          </h4>
                          <ul className="space-y-2">
                            {production.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-pepe-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-pepe-t80 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {production.premiere && (
                        <div>
                          <h4 className="font-display font-semibold text-pepe-white mb-2">
                            Premiere
                          </h4>
                          <p className="text-pepe-t80">{production.premiere}</p>
                        </div>
                      )}

                      {production.date && (
                        <div>
                          <h4 className="font-display font-semibold text-pepe-white mb-2">
                            Aufführung
                          </h4>
                          <p className="text-pepe-t80">{production.date}</p>
                          {production.location && (
                            <p className="text-pepe-t64 text-sm mt-1">{production.location}</p>
                          )}
                        </div>
                      )}

                      {production.cast && (
                        <div>
                          <h4 className="font-display font-semibold text-pepe-white mb-2">
                            Cast
                          </h4>
                          <p className="text-pepe-t80 text-sm">{production.cast}</p>
                        </div>
                      )}

                      {production.team && (
                        <div>
                          <h4 className="font-display font-semibold text-pepe-white mb-2">
                            Team
                          </h4>
                          <p className="text-pepe-t80 text-sm">{production.team}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-pepe-surface border border-pepe-line rounded-2xl">
          <h3 className="text-2xl font-display font-semibold text-pepe-white mb-4">
            Hast du eine Projektidee?
          </h3>
          <p className="text-pepe-t64 mb-6 max-w-2xl mx-auto">
            Wir sind immer auf der Suche nach spannenden Kollaborationen und innovativen Projekten.
            Lass uns gemeinsam etwas Außergewöhnliches schaffen.
          </p>
          <a
            href="/about"
            className="inline-block bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-sm"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
}