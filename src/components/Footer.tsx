import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const supporters = [
    "Stadt München",
    "Kulturreferat",
    "Bezirk Ostpark",
    "Zirkus München e.V.",
    "Creative Europe",
    "Goethe Institut"
  ];

  return (
    <footer className="bg-pepe-ink border-t border-pepe-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Supporters Section */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-pepe-white mb-6 text-center">
            Unterstützer:innen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="bg-pepe-surface border border-pepe-line2 rounded-lg p-4 flex items-center justify-center text-center hover:border-pepe-line-light transition-all duration-normal"
              >
                {/* Placeholder for supporter logo */}
                <div className="w-full">
                  <div className="w-12 h-12 bg-pepe-t32 rounded-lg flex items-center justify-center mx-auto mb-2 opacity-60">
                    <svg className="w-6 h-6 text-pepe-t64" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-pepe-t64 text-xs font-medium leading-tight">
                    {supporter}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* PepeArts Logo */}
              <div className="h-8 w-auto flex items-center">
                <Image
                  src="/pepearts-logo.png"
                  alt="PepeArts Collective"
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-pepe-t64 text-sm leading-relaxed max-w-md mb-6">
              Ein Münchner Künstler:innenkollektiv für zeitgenössischen Zirkus.
              Wir schaffen Räume für Artistik, Kultur & Begegnung.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-display font-medium text-pepe-white mb-3">
                Folge uns
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/pepe_arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal"
                  aria-label="Instagram @pepe_arts"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm">@pepe_arts</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-pepe-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  Start
                </Link>
              </li>
              <li>
                <a
                  href="https://pepe-dome.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm flex items-center space-x-1"
                >
                  <span>Pepe Dome</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <Link href="/productions" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  Productions
                </Link>
              </li>
              <li>
                <Link href="/freemanfestival" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  Festival
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  About / Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-display font-semibold text-pepe-white mb-4">Kontakt & Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@pepearts.de"
                  className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <Link href="/impressum" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-pepe-t64 hover:text-pepe-gold transition-colors duration-normal text-sm">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pepe-line pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pepe-t48 text-sm">
              © {new Date().getFullYear()} PepeArts Kollektiv. Alle Rechte vorbehalten.
            </p>
            <p className="text-pepe-t48 text-xs mt-2 md:mt-0">
              Made with ♥ by the PepeArts Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}