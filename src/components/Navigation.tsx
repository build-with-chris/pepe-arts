'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { name: 'Start', href: '/' },
  { name: 'Pepe Dome', href: '/geodome', highlight: true, external: 'https://pepe-dome.de' },
  { name: 'Productions', href: '/productions' },
  { name: 'Festival', href: '/freemanfestival' },
  { name: 'About / Team', href: '/about' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-pepe-dark border-b border-pepe-line sticky top-0 z-50 md:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-pepe-white hover:opacity-90 transition-opacity duration-normal"
            >
              <div className="h-10 w-auto flex items-center">
                <Image
                  src="/pepearts-logo.png"
                  alt="PepeArts Collective"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.external ? (
                    <a
                      href={item.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-normal ${
                        item.highlight
                          ? 'bg-pepe-gold text-pepe-black hover:bg-pepe-gold-hover hover:shadow-glow-sm'
                          : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.highlight && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-normal ${
                        isActive(item.href)
                          ? 'bg-pepe-surface text-pepe-gold shadow-glow-md'
                          : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-pepe-dark border-b border-pepe-line sticky top-0 z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <Link
              href="/"
              className="flex items-center text-pepe-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="h-10 w-auto flex items-center">
                <Image
                  src="/pepearts-logo.png"
                  alt="PepeArts Collective"
                  width={100}
                  height={28}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 bg-pepe-surface border border-pepe-line rounded-xl flex items-center justify-center text-pepe-t80 hover:text-pepe-gold hover:border-pepe-gold/30 transition-all duration-normal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-pepe-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className="fixed top-16 left-0 right-0 bg-pepe-dark border-b border-pepe-line z-50 shadow-2xl">
              <div className="px-4 py-6">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <div
                      key={item.name}
                      className="transform transition-all duration-300 ease-out"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                      }}
                    >
                      {item.external ? (
                        <a
                          href={item.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-base font-medium transition-all duration-normal ${
                            item.highlight
                              ? 'bg-pepe-gold text-pepe-black shadow-glow-lg transform hover:scale-[1.02]'
                              : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface/80 border border-transparent hover:border-pepe-line-light'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${item.highlight ? 'bg-pepe-black/30' : 'bg-pepe-gold'}`} />
                            <span>{item.name}</span>
                          </div>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center w-full px-4 py-4 rounded-xl text-base font-medium transition-all duration-normal ${
                            isActive(item.href)
                              ? 'bg-pepe-surface text-pepe-gold shadow-glow-lg border border-pepe-gold/20 transform scale-[1.02]'
                              : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface/80 border border-transparent hover:border-pepe-line-light'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full transition-all duration-normal ${
                              isActive(item.href)
                                ? 'bg-pepe-gold shadow-glow-sm'
                                : 'bg-pepe-t64'
                            }`} />
                            <span>{item.name}</span>
                          </div>
                          {isActive(item.href) && (
                            <div className="ml-auto">
                              <div className="w-6 h-6 bg-pepe-gold/20 rounded-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-pepe-gold rounded-full animate-pulse" />
                              </div>
                            </div>
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-6 border-t border-pepe-line2">
                  <div className="text-center">
                    <p className="text-pepe-t64 text-sm mb-2">Zeitgenössischer Zirkus aus München</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="mailto:hello@pepearts.de"
                        className="text-pepe-t80 hover:text-pepe-gold text-sm transition-colors duration-normal"
                      >
                        Kontakt
                      </a>
                      <span className="text-pepe-t64">•</span>
                      <a
                        href="https://instagram.com/pepe_arts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pepe-t80 hover:text-pepe-gold text-sm transition-colors duration-normal"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}