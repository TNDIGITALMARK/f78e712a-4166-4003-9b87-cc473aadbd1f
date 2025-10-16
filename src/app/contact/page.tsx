'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { artistInfo } from '@/lib/artwork-data';
import { Mail, Instagram, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            CONTACT
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Interested in commissions, purchasing artwork, or booking an exhibition? Get in touch below.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium tracking-wide mb-8">
                SEND A MESSAGE
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Commission inquiry, purchase, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-medium tracking-wide mb-8">
                CONTACT INFORMATION
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a
                      href={`mailto:${artistInfo.contact.email}`}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {artistInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Instagram</h3>
                    <a
                      href={`https://instagram.com/${artistInfo.contact.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {artistInfo.contact.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-gray-600">{artistInfo.contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-12 p-6 bg-gray-50">
                <h3 className="font-medium mb-4">SERVICES OFFERED</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom commissions</li>
                  <li>• Original artwork sales</li>
                  <li>• Gallery exhibitions</li>
                  <li>• Art consultation</li>
                  <li>• Private viewings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
