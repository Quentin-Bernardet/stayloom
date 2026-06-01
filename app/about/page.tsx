import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'About Us | STAYLOOM Property Management',
  description:
    'Based in Fort Myers, Florida, STAYLOOM was founded to give property owners better returns, better service, and true peace of mind. Learn about our team and values.',
}

const values = [
  {
    num: '01',
    title: 'Reliability',
    text: 'Your rent arrives on time, every month, regardless of occupancy. We carry the risk so you never have to worry.',
  },
  {
    num: '02',
    title: 'Excellence',
    text: 'From guest experience to property upkeep, we hold every aspect of our service to the highest standard.',
  },
  {
    num: '03',
    title: 'Transparency',
    text: 'No hidden fees, no surprises. You always know exactly what is happening with your property.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Block 1: Intro split ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: dark text panel */}
        <div className="bg-deep-espresso flex items-center px-8 md:px-14 lg:px-16 py-32 pt-44 lg:pt-32">
          <div className="max-w-lg">
            <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-5">
              About Stayloom
            </p>
            <h1 className="font-cormorant font-300 text-5xl md:text-6xl text-ivory leading-tight mb-7">
              Built for owners who want results.
            </h1>
            <p className="font-jost font-300 text-base text-ivory/70 leading-relaxed">
              Stayloom was founded with one conviction: property owners deserve better. Better
              returns, better service, and the peace of mind that comes with knowing your investment
              is in good hands. We handle everything so you never have to.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <PlaceholderImage
            src="/images/indoor-outdoor.jpg"
            alt="Indoor outdoor tropical living space"
            fill
            className="object-cover"
            placeholderColor="#B9A590"
          />
        </div>
      </section>

      {/* ── Block 2: Story split ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left: image */}
        <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
          <PlaceholderImage
            src="/images/terrace-pool.jpg"
            alt="Outdoor terrace with pool"
            fill
            className="object-cover"
            placeholderColor="#ECE4DA"
          />
        </div>

        {/* Right: sand text panel */}
        <div className="bg-sand flex items-center px-8 md:px-14 lg:px-16 py-20 order-1 lg:order-2">
          <div className="max-w-lg">
            <h2 className="font-cormorant font-400 text-3xl md:text-4xl text-deep-espresso mb-7">
              A local team with a professional approach
            </h2>
            <p className="font-jost font-300 text-sm text-espresso leading-relaxed mb-5">
              Based in Fort Myers, Florida, we specialize in transforming residential properties into
              high-performing short-term rentals. Our model is simple: we sign a long-term lease with
              you, take full responsibility for the property, and pay you guaranteed rent every month
              without exception.
            </p>
            <p className="font-jost font-300 text-sm text-espresso leading-relaxed">
              Through our in-house cleaning and maintenance team, Bruna&apos;s Sparkling Cleaning, we
              maintain every property to hotel-grade standards. No third-party contractors, no
              shortcuts, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ── Block 3: Values grid ── */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-3">
              What we stand for
            </p>
            <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-deep-espresso">
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-taupe/30 pt-12">
            {values.map((v) => (
              <div key={v.num} className="flex flex-col gap-4">
                <span className="font-cormorant italic text-6xl text-taupe/40">{v.num}</span>
                <h3 className="font-jost font-500 text-xs tracking-[0.2em] uppercase text-deep-espresso">
                  {v.title}
                </h3>
                <p className="font-jost font-300 text-sm text-espresso leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 4: CTA ── */}
      <section className="bg-espresso py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-ivory mb-8">
            Ready to work together?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-taupe text-deep-espresso font-jost font-500 text-sm tracking-widest uppercase hover:bg-ivory transition-colors duration-200"
          >
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
