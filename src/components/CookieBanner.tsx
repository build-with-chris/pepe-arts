'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Small delay for smooth entrance
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[1080] transition-all duration-300 ${
        isAnimating
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <div className="bg-pepe-surface border border-pepe-line rounded-xl p-4 sm:p-6 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-pepe-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-pepe-t80 leading-relaxed">
                    Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten.
                    Aktuell tracken wir keine Daten. Weitere Informationen finden Sie in unserer{' '}
                    <Link
                      href="/datenschutz"
                      className="text-pepe-gold hover:text-pepe-gold-hover underline underline-offset-2 transition-colors duration-normal"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-pepe-t80 hover:text-pepe-white border border-pepe-line hover:border-pepe-line-light rounded-lg transition-all duration-normal whitespace-nowrap"
              >
                Ablehnen
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium bg-pepe-gold hover:bg-pepe-gold-hover text-pepe-black rounded-lg transition-all duration-normal hover:shadow-glow-sm whitespace-nowrap"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


