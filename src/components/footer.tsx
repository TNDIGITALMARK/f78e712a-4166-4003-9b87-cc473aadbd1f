import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            ALEXANDRA CHEN ART
          </p>

          <div className="text-sm text-gray-500">
            © 2024 ALL RIGHTS RESERVED
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="mailto:hello@alexandrachen.art"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            TERMS OF SERVICE
          </p>
        </div>
      </div>
    </footer>
  );
}
