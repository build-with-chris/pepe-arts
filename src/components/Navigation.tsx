'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <nav className="bg-pepe-dark/95 backdrop-blur-md border-b border-pepe-line sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-pepe-white hover:text-pepe-gold transition-colors duration-normal"
          >
            <div className="w-8 h-8 bg-pepe-gold rounded-lg flex items-center justify-center">
              <span className="text-pepe-black font-bold text-sm">PA</span>
            </div>
            <span className="font-display font-bold text-lg">PepeArts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                        ? 'bg-pepe-surface text-pepe-gold'
                        : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pepe-t80 hover:text-pepe-white p-2 rounded-lg hover:bg-pepe-surface transition-all duration-normal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pepe-line">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.external ? (
                    <a
                      href={item.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all duration-normal ${
                        item.highlight
                          ? 'bg-pepe-gold text-pepe-black'
                          : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
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
                      className={`block px-3 py-3 rounded-lg text-sm font-medium transition-all duration-normal ${
                        isActive(item.href)
                          ? 'bg-pepe-surface text-pepe-gold'
                          : 'text-pepe-t80 hover:text-pepe-white hover:bg-pepe-surface'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}