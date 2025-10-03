'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-pepe-black text-pepe-white font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/Short Trailer.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay - Subtle Dimming */}
        <div className="absolute inset-0 bg-gradient-to-t from-pepe-black/60 via-pepe-black/20 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 bg-gradient-to-b from-pepe-white via-pepe-white to-pepe-t80 bg-clip-text text-transparent">
            Pepe Collective
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-pepe-gold font-medium mb-4">
            Zeitgenössischer Zirkus aus München
          </p>
          <p className="text-lg md:text-xl text-pepe-t80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wir verbinden Artistik, Tanz und digitale Kunst zu Erlebnissen, die bewegen.
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
              <p className="text-lg text-pepe-t80 leading-relaxed mb-6">
                Von intimen Trainingseinheiten bis hin zu spektakulären Aufführungen – der Dome bietet
                den perfekten Rahmen für alle Facetten des zeitgenössischen Zirkus.
              </p>
              <p className="text-sm text-pepe-t64 leading-relaxed mb-8 italic">
                Der Pepe Dome wird vom Kulturreferat und von Kreativ München sowie vom Stadtteilmanagement Neuperlach gefördert.
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
            <div className="aspect-video bg-gradient-to-br from-pepe-ink via-pepe-dark to-pepe-surface rounded-2xl overflow-hidden relative group">
              {/* Premium Training Space Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-pepe-black/60 via-transparent to-pepe-black/20"></div>

              {/* Dome Image */}
              <div className="relative h-full flex items-center justify-center p-4">
                <Image
                  src="/TheDome.png"
                  alt="Pepe Dome - Professioneller Trainingsspace für zeitgenössischen Zirkus"
                  width={400}
                  height={400}
                  className="w-full max-w-sm h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Premium Overlay Elements */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pepe-gold rounded-full animate-pulse"></div>
                    <span className="text-pepe-gold text-sm font-medium tracking-wide">
                      Professioneller Trainingsspace
                    </span>
                  </div>
                  <div className="text-pepe-t80 text-xs">
                    Geodätische Kuppel • Ostpark München
                  </div>
                </div>
              </div>

              {/* Subtle Geometric Accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-pepe-gold/30 rotate-45 opacity-60"></div>
              <div className="absolute top-8 right-8 w-4 h-4 border border-pepe-gold/20 rotate-45 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Callout */}
      <section className="bg-pepe-ink border-y border-pepe-line py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-2 h-2 bg-pepe-gold rounded-full animate-pulse"></div>
                <span className="text-pepe-gold text-xs md:text-sm font-medium tracking-wide uppercase">
                  Aktuelle Events
                </span>
              </div>
              <div className="relative hidden sm:block">
                <div className="animate-pulse">
                  <span className="text-gray-300 text-sm font-medium tracking-wider" style={{
                    textShadow: '0 0 10px rgba(192, 192, 192, 0.8), 0 0 20px rgba(192, 192, 192, 0.6), 0 0 30px rgba(192, 192, 192, 0.4)',
                    animation: 'slideLeftRight 4s ease-in-out infinite'
                  }}>
                    Circus & Cinema
                  </span>
                </div>
              </div>
            </div>
            <a
              href="https://www.pepe-dome.de/veranstaltungen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 md:space-x-2 bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black font-medium md:font-semibold px-3 py-2 md:px-6 md:py-3 rounded-md md:rounded-lg transition-all duration-normal hover:shadow-glow-md text-xs md:text-sm"
            >
              <span>Tickets & Termine</span>
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideLeftRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }
        `}</style>
      </section>

      {/* Productions Block */}
      <section className="py-20 bg-pepe-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-pepe-white mb-6">
              Productions
            </h2>
            <p className="text-lg text-pepe-t80 max-w-3xl mx-auto">
              Unsere Produktionen verbinden zeitgenössischen Zirkus mit experimenteller Kunst.
              Von intimen Solo-Performances bis hin zu interdisziplinären Forschungsprojekten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Liquid Links",
                category: "Zirkus × Tanz / Interdisziplinär",
                description: "Contemporary Circus und zeitgenössischer Tanz verschmelzen zu einer Einheit.",
                tags: ["Contemporary Circus", "Tanz", "Interdisziplinär"],
                image: "/LiquidLinks.webp"
              },
              {
                title: "Critical Spaces",
                category: "Performance / Digital Research",
                description: "Eine digitale Performance-Forschung über Raumwahrnehmung und menschliche Interaktion.",
                tags: ["Digital Research", "Motion Capture", "VR"],
                image: "/Critical Spaces.jpeg.webp"
              },
              {
                title: "Orbital Objects",
                category: "zeitgenössische Zirkus-Recherche / Objekt-Theater",
                description: "Objekttheater und zeitgenössischer Zirkus verschmelzen in drei experimentellen Teilen.",
                tags: ["Objekt-Theater", "Installation", "Publikumsinteraktion"],
                image: "/OO.webp"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-pepe-surface border border-pepe-line rounded-xl overflow-hidden hover:border-pepe-line-light transition-all duration-normal hover:shadow-glow-sm">
                <div className="aspect-video bg-pepe-ink relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pepe-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-pepe-white mb-2 group-hover:text-pepe-gold transition-colors duration-normal">
                    {project.title}
                  </h3>
                  <p className="text-pepe-gold text-sm font-medium mb-3">
                    {project.category}
                  </p>
                  <p className="text-pepe-t64 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-pepe-ink text-pepe-t80 text-xs rounded-full border border-pepe-line2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/freeman-festival-logo.png"
                alt="Freeman Festival - Contemporary Circus Festival"
                width={500}
                height={300}
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
              />
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
            <div className="aspect-square bg-pepe-surface rounded-2xl overflow-hidden relative group">
              <Image
                src="/PEPE complete_batcheditor_fotor.webp"
                alt="PepeArts Collective - Künstler:innenkollektiv für zeitgenössischen Zirkus"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pepe-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-pepe-gold font-medium text-sm">PepeArts Collective</p>
                <p className="text-pepe-white text-xs opacity-80">Zeitgenössischer Zirkus München</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}