export default function FreemanFestivalPage() {
  const pastEditions = [
    {
      year: "2023",
      title: "Freeman Festival '23",
      location: "Berlin",
      highlights: ["50+ Artists", "3 Stages", "10,000 Besucher"],
      description: "Eine unvergessliche Nacht voller experimenteller Musik und digitaler Kunst.",
    },
    {
      year: "2022",
      title: "Freeman Festival '22",
      location: "Hamburg",
      highlights: ["35+ Artists", "2 Stages", "7,500 Besucher"],
      description: "Das Jahr, in dem alles begann. Unser erstes großes Festival.",
    }
  ];

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
              Wo Musik, Kunst und Technologie aufeinandertreffen.
              Ein Festival, das die Grenzen des Möglichen auslotet.
            </p>
            <div className="inline-block bg-pepe-gold/20 border border-pepe-gold/30 rounded-full px-6 py-2">
              <span className="text-pepe-gold font-semibold">Nächstes Festival 2024</span>
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
                Freeman Festival 2024
              </h2>
              <p className="text-pepe-t80 mb-6 leading-relaxed">
                Bereite dich auf das bisher größte Freeman Festival vor.
                Drei Tage voller innovativer Performances, interaktiver Installationen
                und unvergesslicher Erlebnisse.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Datum: TBA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Location: TBA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pepe-gold rounded-full"></div>
                  <span className="text-pepe-t64">Early Bird Tickets bald verfügbar</span>
                </div>
              </div>
              <button className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-md">
                Updates abonnieren
              </button>
            </div>
            <div className="aspect-video bg-pepe-ink rounded-xl flex items-center justify-center">
              <div className="w-20 h-20 bg-pepe-gold/30 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
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
                className="bg-pepe-surface border border-pepe-line rounded-xl p-6 hover:border-pepe-line-light transition-all duration-normal"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Year Badge */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-pepe-gold rounded-full flex items-center justify-center">
                      <span className="text-pepe-black font-bold text-lg">{edition.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-pepe-white">
                        {edition.title}
                      </h3>
                      <p className="text-pepe-t64">{edition.location}</p>
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

                  {/* Description */}
                  <div>
                    <p className="text-pepe-t64 leading-relaxed">
                      {edition.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center space-x-2 text-pepe-gold hover:text-pepe-gold-hover text-sm font-medium mt-4 transition-colors duration-normal"
                    >
                      <span>Mehr erfahren</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
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