import React from 'react';

export default function Home() {
  return (
    <div className="bg-pepe-black text-pepe-white font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-pepe-coal via-pepe-dark to-pepe-black">
          <div className="absolute inset-0 bg-gradient-to-t from-pepe-black/90 via-pepe-black/50 to-pepe-black/30"></div>
          {/* Placeholder for Dome Image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-96 h-96 border-4 border-pepe-gold/30 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-pepe-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-32 h-32 text-pepe-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white via-pepe-white to-pepe-t80 bg-clip-text text-transparent">
            Pepe Collective
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-pepe-gold font-medium mb-4">
            Münchens Zuhause für zeitgenössischen Zirkus
          </p>
          <p className="text-lg md:text-xl text-pepe-t80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ein Raum für Artistik, Kultur & Begegnung – mitten im Ostpark.
          </p>
          <a
            href="https://pepe-dome.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-bold px-8 py-4 rounded-xl transition-all duration-normal hover:shadow-glow-lg transform hover:scale-105"
          >
            <span className="text-lg">Mehr erfahren</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Pepe Dome Block */}
      <section className="py-20 bg-pepe-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-pepe-white mb-6">
                Der Dome
              </h2>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-6">
                Im Herzen Münchens steht unser Dome – ein einzigartiger Raum für zeitgenössischen Zirkus.
                Hier trainieren Artists, entstehen Shows und finden Festivals statt. Der Dome ist mehr als
                nur ein Gebäude: Er ist das pulsierende Zentrum einer lebendigen Zirkusgemeinschaft.
              </p>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-8">
                Von intimen Trainingseinheiten bis hin zu spektakulären Aufführungen – der Dome bietet
                den perfekten Rahmen für alle Facetten des zeitgenössischen Zirkus.
              </p>
              <a
                href="https://pepe-dome.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-md"
              >
                <span>Alle Infos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="aspect-video bg-pepe-surface rounded-2xl overflow-hidden">
              {/* Placeholder for Dome Interior Image */}
              <div className="w-full h-full bg-gradient-to-br from-pepe-gold/20 to-pepe-bronze/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-pepe-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-pepe-gold font-medium">Dome Innenaufnahme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productions Block */}
      <section className="py-20 bg-pepe-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-pepe-white mb-6">
              Productions
            </h2>
            <p className="text-lg text-pepe-t80 max-w-3xl mx-auto">
              Unsere kreativen Projekte verbinden Zirkus mit digitaler Kunst und schaffen
              einzigartige Erlebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Liquid Links",
                description: "Eine poetische Verbindung zwischen Luftakrobatik und interaktiven Projektionen.",
                image: "Aerial Arts Installation"
              },
              {
                title: "Neural Flows",
                description: "KI-generierte Visuals reagieren live auf die Bewegungen der Performer.",
                image: "AI Performance Art"
              },
              {
                title: "Sonic Sculptures",
                description: "Klanglandschaften entstehen durch die Bewegung der Artists im Raum.",
                image: "Sound Installation"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-pepe-surface border border-pepe-line rounded-xl overflow-hidden hover:border-pepe-line-light transition-all duration-normal hover:shadow-glow-sm">
                <div className="aspect-video bg-pepe-ink relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pepe-gold/20 to-pepe-bronze/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pepe-gold/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-pepe-gold text-sm font-medium">{project.image}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-pepe-white mb-3 group-hover:text-pepe-gold transition-colors duration-normal">
                    {project.title}
                  </h3>
                  <p className="text-pepe-t64 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/productions"
              className="inline-flex items-center space-x-2 border border-pepe-gold text-pepe-gold hover:bg-pepe-gold hover:text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal"
            >
              <span>Zu allen Produktionen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Festival Block */}
      <section className="py-20 bg-pepe-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-pepe-ink rounded-2xl overflow-hidden">
              {/* Placeholder for Festival Image */}
              <div className="w-full h-full bg-gradient-to-br from-pepe-bronze/30 to-pepe-copper/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-pepe-bronze/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-pepe-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <p className="text-pepe-bronze font-medium">Freeman Festival</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-pepe-white mb-6">
                Freeman Festival
              </h2>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-6">
                Das Festival für zeitgenössischen Zirkus in München. Einmal im Jahr verwandelt sich
                der Dome und die Stadt in eine Bühne für internationale Zirkuskünstler:innen.
              </p>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-8">
                Von intimen Solo-Performances bis hin zu spektakulären Ensemble-Stücken –
                das Freeman Festival zeigt die ganze Vielfalt des zeitgenössischen Zirkus.
              </p>
              <a
                href="/freemanfestival"
                className="inline-flex items-center space-x-2 bg-pepe-bronze hover:bg-pepe-bronze-hover text-pepe-white font-semibold px-6 py-3 rounded-lg transition-all duration-normal hover:shadow-glow-md"
              >
                <span>Freeman Festival entdecken</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Team Block */}
      <section className="py-20 bg-pepe-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-pepe-white mb-6">
                Pepe Arts Kollektiv
              </h2>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-6">
                Pepe Arts ist ein Münchner Künstler:innenkollektiv, das an der Schnittstelle
                von Zirkus, Technologie und digitaler Kunst arbeitet. Wir schaffen Räume für
                Begegnung, Experimente und künstlerischen Austausch.
              </p>
              <p className="text-lg text-pepe-t80 leading-relaxed mb-8">
                Unser interdisziplinäres Team aus Artist:innen, Entwickler:innen und Visionär:innen
                bringt Menschen zusammen und erschafft einzigartige Erlebnisse, die Grenzen überwinden.
              </p>
              <a
                href="/about"
                className="inline-flex items-center space-x-2 border border-pepe-gold text-pepe-gold hover:bg-pepe-gold hover:text-pepe-black font-semibold px-6 py-3 rounded-lg transition-all duration-normal"
              >
                <span>Mehr über uns</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="aspect-square bg-pepe-surface rounded-2xl overflow-hidden">
              {/* Placeholder for Team Image */}
              <div className="w-full h-full bg-gradient-to-br from-pepe-gold/20 to-pepe-amber/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-pepe-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-pepe-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-pepe-gold font-medium">Kollektiv Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}