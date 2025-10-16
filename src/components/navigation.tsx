'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
          >
            ALEXANDRA CHEN ART
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wider transition-opacity hover:opacity-70 ${
                    pathname === link.href
                      ? 'font-medium text-black'
                      : 'font-normal text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm tracking-wider transition-opacity hover:opacity-70 ${
                      pathname === link.href
                        ? 'font-medium text-black'
                        : 'font-normal text-gray-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
