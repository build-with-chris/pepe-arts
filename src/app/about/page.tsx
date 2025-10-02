export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      bio: "Visionary hinter den digitalen Kunstprojekten. Verbindet Technologie mit emotionaler Tiefe.",
      image: "/api/placeholder/200/200",
      links: {
        portfolio: "#",
        instagram: "#"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "Technical Artist",
      bio: "Expertin für interaktive Installationen und generative Kunst. Bringt Code zum Leben.",
      image: "/api/placeholder/200/200",
      links: {
        portfolio: "#",
        github: "#"
      }
    },
    {
      name: "Jordan Kim",
      role: "Sound Designer",
      bio: "Erschafft audiovisuelle Landschaften, die die Sinne verzaubern und neue Welten eröffnen.",
      image: "/api/placeholder/200/200",
      links: {
        soundcloud: "#",
        spotify: "#"
      }
    },
    {
      name: "Sam Taylor",
      role: "Community Manager",
      bio: "Verbindet Künstler*innen und Publikum. Organisiert Events und schafft unvergessliche Erlebnisse.",
      image: "/api/placeholder/200/200",
      links: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-pepe-black text-pepe-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pepe-dark to-pepe-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white to-pepe-t80 bg-clip-text text-transparent">
            About / Team
          </h1>
          <p className="text-xl text-pepe-t80 max-w-4xl leading-relaxed">
            Wir sind ein interdisziplinäres Kollektiv aus Künstler*innen, Entwickler*innen
            und Visionär*innen, die an der Schnittstelle von Kunst und Technologie arbeiten.
            Unser Ziel ist es, neue Formen des kreativen Ausdrucks zu erkunden und
            einzigartige Erlebnisse zu schaffen.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-pepe-white mb-6">
              Unsere Mission
            </h2>
            <p className="text-pepe-t80 leading-relaxed mb-6">
              PepeArts entstand aus der Vision, die Grenzen zwischen digitaler und
              physischer Kunst zu überwinden. Wir glauben daran, dass Technologie
              nicht nur ein Werkzeug ist, sondern ein Medium für emotionale
              Verbindungen und transformative Erlebnisse.
            </p>
            <p className="text-pepe-t80 leading-relaxed">
              Durch die Kombination von experimenteller Kunst, innovativer Technologie
              und gemeinschaftlicher Kreativität schaffen wir Räume, in denen neue
              Formen des Ausdrucks entstehen können.
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

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-display font-bold text-pepe-white mb-12 text-center">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-pepe-surface border border-pepe-line rounded-xl p-6 hover:border-pepe-line-light transition-all duration-normal hover:shadow-glow-sm"
              >
                {/* Profile Image */}
                <div className="aspect-square bg-pepe-ink rounded-xl mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pepe-gold/20 to-pepe-bronze/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-pepe-gold/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-display font-semibold text-pepe-white mb-2">
                  {member.name}
                </h3>
                <p className="text-pepe-gold font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-pepe-t64 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {Object.entries(member.links).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="w-8 h-8 bg-pepe-ink border border-pepe-line2 rounded-lg flex items-center justify-center text-pepe-t64 hover:text-pepe-gold hover:border-pepe-gold/30 transition-all duration-normal"
                      aria-label={platform}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-pepe-white mb-12 text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pepe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pepe-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-pepe-white mb-3">
                Innovation
              </h3>
              <p className="text-pepe-t64 leading-relaxed">
                Wir suchen ständig nach neuen Wegen, um Kunst und Technologie
                zu verbinden und Grenzen zu überschreiten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pepe-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pepe-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-pepe-white mb-3">
                Gemeinschaft
              </h3>
              <p className="text-pepe-t64 leading-relaxed">
                Zusammenarbeit und Austausch sind das Herzstück unserer Arbeit.
                Gemeinsam erschaffen wir mehr als die Summe unserer Teile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pepe-copper rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pepe-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-pepe-white mb-3">
                Leidenschaft
              </h3>
              <p className="text-pepe-t64 leading-relaxed">
                Jedes Projekt entsteht aus echter Begeisterung für Kunst,
                Technologie und die Möglichkeiten ihrer Verbindung.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-20 p-8 bg-pepe-surface border border-pepe-line rounded-2xl">
          <h3 className="text-2xl font-display font-semibold text-pepe-white mb-4">
            Werde Teil von PepeArts
          </h3>
          <p className="text-pepe-t64 mb-6 max-w-2xl mx-auto">
            Suchst du nach kreativen Kollaborationen oder möchtest du Teil unseres Teams werden?
            Wir freuen uns auf deine Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@pepearts.de"
              className="bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-sm"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#"
              className="border border-pepe-line hover:border-pepe-gold text-pepe-white hover:text-pepe-gold font-semibold px-6 py-3 rounded-lg transition-all duration-normal"
            >
              Portfolio einreichen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}