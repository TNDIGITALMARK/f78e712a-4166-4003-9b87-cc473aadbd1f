import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { artistInfo } from '@/lib/artwork-data';

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            ABOUT THE ARTIST
          </h1>
        </section>

        {/* Bio Section with Image */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium tracking-tight">
                {artistInfo.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                {artistInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative aspect-[3/4] bg-gray-100">
              <Image
                src="/generated/portrait-oil-painting.png"
                alt={artistInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Artist Statement */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-medium tracking-wide mb-8">
              ARTIST STATEMENT
            </h2>
            <div className="prose prose-lg max-w-none">
              {artistInfo.statement.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibitions Timeline */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-medium tracking-wide mb-12">
            SELECTED EXHIBITIONS
          </h2>

          <div className="space-y-8">
            {artistInfo.exhibitions.map((exhibition, index) => (
              <div
                key={index}
                className="border-l-2 border-black pl-6 py-2"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-2xl font-medium">{exhibition.year}</span>
                  <div>
                    <h3 className="font-medium text-lg">{exhibition.title}</h3>
                    <p className="text-gray-600">{exhibition.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-medium tracking-wide mb-8">
              GET IN TOUCH
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${artistInfo.contact.email}`} className="hover:underline">
                  {artistInfo.contact.email}
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Instagram:</span>{' '}
                <a
                  href={`https://instagram.com/${artistInfo.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {artistInfo.contact.instagram}
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Location:</span> {artistInfo.contact.location}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
