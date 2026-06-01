import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'STAYLOOM | Premium Property Management in Fort Myers, FL',
  description:
    'STAYLOOM manages your property as a premium short-term rental, handles everything from guest booking to cleaning, and pays you guaranteed rent every month.',
}

const steps = [
  {
    step: '01',
    title: 'We Become Your Tenant',
    image: '/images/living-room.jpg',
    alt: 'Bright living room',
    description:
      'We sign a long-term lease directly with you, just like a regular tenant would. Because we commit for 2 to 3 years and take on full responsibility for the property, we negotiate a stable monthly rent that works for both sides. You trade a small flexibility on price for something no traditional tenant can give you: ironclad security and zero management on your end.',
  },
  {
    step: '02',
    title: 'We Handle Everything',
    image: '/images/kitchen.jpg',
    alt: 'Open kitchen and dining room',
    description:
      'From guest management to professional cleaning by our in-house team, we take care of every detail so you never have to lift a finger.',
  },
  {
    step: '03',
    title: 'Your Rent Every Month',
    image: '/images/terrace-pool.jpg',
    alt: 'Outdoor terrace with pool',
    description:
      'On the agreed date each month, your rent is deposited directly into your account. No delays, no excuses.',
  },
]

const whyItems = [
  {
    num: '01',
    title: 'Guaranteed Rent, Every Month',
    text: 'No vacancy risk, no late payments, no chasing anyone. Your rent is fixed in the lease and hits your account on the same date every month, whether the property is fully booked or sitting empty.',
    highlight: false,
  },
  {
    num: '02',
    title: 'A Lease That Actually Protects You',
    text: 'We commit for a minimum of 2 to 3 years. That means no unexpected gaps, no last-minute departures and no starting from scratch every few months.',
    highlight: false,
  },
  {
    num: '03',
    title: 'Zero Landlord Stress',
    text: 'We are your only point of contact. Guests, cleaning, maintenance, everything is managed entirely by our team. You are never called for anything.',
    highlight: true,
  },
  {
    num: '04',
    title: 'Your Property, Always in Perfect Condition',
    text: "Our in-house cleaning company Bruna's Sparkling Cleaning maintains the property to hotel standards after every stay. You get it back in better shape than you gave it.",
    highlight: false,
  },
]

const reviews = [
  {
    quote:
      'Working with STAYLOOM was the best decision I made for my property. The income is consistent and I never have to worry about anything.',
    name: 'Michael T.',
    location: 'Cape Coral, FL',
    highlight: true,
  },
  {
    quote:
      'I was skeptical at first, but the team is incredibly professional. My rent arrives every month without fail.',
    name: 'Sandra R.',
    location: 'Fort Myers, FL',
    highlight: false,
  },
  {
    quote:
      'The cleaning team is outstanding. My property is always in perfect condition and guests love it.',
    name: 'James L.',
    location: 'Bonita Springs, FL',
    highlight: false,
  },
  {
    quote:
      'I finally have passive income that is truly passive. STAYLOOM handles everything and I just receive my payment.',
    name: 'Patricia M.',
    location: 'Naples, FL',
    highlight: false,
  },
]

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
]

export default function HomePage() {
  return (
    <>
      {/* ── Block 1: Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-ivory">
        <div className="absolute inset-0 bg-[#ECE4DA]">
          <PlaceholderImage
            src="/images/hero-pool.jpg"
            alt="Luxury pool patio at dusk"
            fill
            className="object-cover"
            priority
            placeholderColor="#36302A"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(36,30,26,0.45)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 pt-40">
          <p className="font-jost font-300 text-xs tracking-[0.25em] uppercase text-taupe mb-6">
            Premium Short-Term Rental Management
          </p>
          <h1 className="font-cormorant font-300 text-5xl md:text-7xl leading-tight mb-6">
            Your Property. Your Income. Zero Effort.
          </h1>
          <p className="font-jost font-300 text-base md:text-lg text-ivory/80 leading-relaxed max-w-xl mx-auto mb-10">
            STAYLOOM manages your property as a premium short-term rental, handles everything from
            guest booking to cleaning, and pays you a guaranteed rent every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-taupe text-deep-espresso font-jost font-500 text-sm tracking-widest uppercase hover:bg-ivory transition-colors duration-200"
            >
              Get a Free Assessment
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 border border-ivory/60 text-ivory font-jost font-300 text-sm tracking-widest uppercase hover:border-ivory hover:bg-ivory/10 transition-colors duration-200"
            >
              See How It Works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Block 2: Process ── */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-3">
              Our Process
            </p>
            <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-deep-espresso">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col gap-6">
                <div className="relative w-full h-64 overflow-hidden">
                  <PlaceholderImage
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    placeholderColor="#ECE4DA"
                  />
                </div>
                <div>
                  <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-2">
                    Step {s.step}
                  </p>
                  <h3 className="font-cormorant font-400 text-2xl md:text-3xl text-deep-espresso mb-3">
                    {s.title}
                  </h3>
                  <p className="font-jost font-300 text-sm text-espresso leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 3: Why STAYLOOM ── */}
      <section className="bg-deep-espresso py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: list */}
            <div>
              <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-4">
                Why choose us
              </p>
              <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-ivory mb-12">
                The STAYLOOM difference
              </h2>
              <div className="flex flex-col divide-y divide-taupe/20">
                {whyItems.map((item) => (
                  <div
                    key={item.num}
                    className={`py-7 flex gap-8 ${
                      item.highlight ? 'border-l-2 border-taupe pl-6 -ml-6' : ''
                    }`}
                  >
                    <span className="font-cormorant italic text-taupe/60 text-2xl w-8 flex-shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-jost font-500 text-xs tracking-widest uppercase text-ivory mb-2">
                        {item.title}
                      </h4>
                      <p className="font-jost font-300 text-sm text-ivory/60 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative w-full h-[520px] lg:h-[680px]">
              <PlaceholderImage
                src="/images/indoor-outdoor.jpg"
                alt="Indoor outdoor tropical living space"
                fill
                className="object-cover"
                placeholderColor="#574C3F"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 4: Photo Gallery ── */}
      <section className="bg-deep-espresso pb-0">
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {galleryImages.map((src, i) => (
            <div key={i} className="gallery-item relative h-[300px]">
              <PlaceholderImage
                src={src}
                alt={`Property gallery image ${i + 1}`}
                fill
                className="object-cover"
                placeholderColor={i % 2 === 0 ? '#B9A590' : '#574C3F'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Block 5: Reviews ── */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-3">
              Testimonials
            </p>
            <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-deep-espresso">
              What our owners say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`bg-sand p-8 lg:p-10 flex flex-col gap-6 ${
                  r.highlight ? 'border-t-2 border-taupe' : ''
                }`}
              >
                <p className="text-taupe tracking-widest text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p className="font-cormorant italic text-xl md:text-2xl text-deep-espresso leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div>
                  <p className="font-jost font-500 text-sm text-deep-espresso">{r.name}</p>
                  <p className="font-jost font-300 text-xs text-espresso tracking-wide">
                    {r.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-espresso py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-ivory mb-4">
            Ready to put your property to work?
          </h2>
          <p className="font-jost font-300 text-ivory/70 mb-8">
            Get a free, no-obligation assessment from our team within 24 hours.
          </p>
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
