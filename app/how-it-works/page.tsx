import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'How It Works | STAYLOOM Property Management',
  description:
    'Learn how STAYLOOM signs a long-term lease with property owners, manages the property as a premium short-term rental, and delivers guaranteed monthly rent.',
}

const phases = [
  {
    num: '01',
    title: 'The Initial Assessment',
    image: '/images/living-room.jpg',
    alt: 'Bright living room',
    placeholderColor: '#ECE4DA',
    paragraphs: [
      'It all starts with a free, no-obligation conversation about your property. We learn about your goals, review the property details, and give you a clear rental estimate.',
      'There is no pressure and no commitment required. We simply want to understand your situation so we can present an offer that works for you.',
    ],
  },
  {
    num: '02',
    title: 'We Sign the Lease',
    image: '/images/terrace-pool.jpg',
    alt: 'Outdoor terrace with pool',
    placeholderColor: '#B9A590',
    paragraphs: [
      'Once we agree on terms, STAYLOOM signs a long-term lease directly with you, typically for a period of two to three years. You become our landlord, and we become your sole tenant.',
      'From that moment forward, your guaranteed monthly rent begins. There are no vacancies, no gaps in income, and no surprises. Your payment arrives on the same date every single month.',
    ],
  },
  {
    num: '03',
    title: 'We Set Up Everything',
    image: '/images/kitchen.jpg',
    alt: 'Open kitchen and dining room',
    placeholderColor: '#574C3F',
    paragraphs: [
      'Our team handles all the setup: professional photography, interior preparation, listing creation across premium platforms, and dynamic pricing strategy.',
      'We also install any necessary smart home devices and coordinate every logistical detail so that the property is guest-ready from day one.',
    ],
  },
  {
    num: '04',
    title: 'We Manage Everything',
    image: '/images/indoor-outdoor.jpg',
    alt: 'Indoor outdoor tropical living space',
    placeholderColor: '#B9A590',
    paragraphs: [
      "Once guests start arriving, our team handles every aspect of the operation. Guest communication, check-in coordination, reviews, and any issues that come up during a stay are all managed by us.",
      "Between each stay, our in-house cleaning team, Bruna's Sparkling Cleaning, prepares the property to hotel-grade standards. Every single time.",
    ],
  },
  {
    num: '05',
    title: 'You Receive Your Rent',
    image: '/images/gallery-1.jpg',
    alt: 'Beautiful property exterior',
    placeholderColor: '#ECE4DA',
    paragraphs: [
      'On the agreed date each month, your guaranteed rent is deposited directly into your bank account. You do not have to think about occupancy rates, seasonal fluctuations, or guest reviews.',
      'We also send you regular property updates so you always know the condition of your investment. Full transparency, no surprises.',
    ],
  },
]

const faqs = [
  {
    q: 'Do you pay market rent?',
    a: 'We negotiate a monthly rent that reflects the value we bring to the table. Because we sign long term, pay without fail and remove every management burden from your plate, the rate we agree on tends to be slightly below the open market. For most owners, the trade is more than worth it: stable income, no vacancy risk and no stress whatsoever.',
  },
  {
    q: 'Can I still use my property occasionally?',
    a: 'Because we sign a long-term lease, the property is under our full management for the duration of the agreement. We discuss all the details of the lease before you sign, so there are no surprises.',
  },
  {
    q: 'How is my monthly rent amount determined?',
    a: 'We calculate your guaranteed rent based on the property location, size, condition, and local market data. Our goal is to offer you a fair and competitive monthly payment that reflects the real value of your property.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently operate throughout Southwest Florida, including Fort Myers, Cape Coral, Bonita Springs, and Naples. Contact us to confirm availability in your specific area.',
  },
  {
    q: 'Is there any cost to me as the property owner?',
    a: 'No. There are no fees or charges to you. We earn our return from the short-term rental income we generate from the property. Your guaranteed rent is paid in full, every month.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-deep-espresso pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-4">
            The Process
          </p>
          <h1 className="font-cormorant font-300 text-5xl md:text-7xl text-ivory max-w-2xl leading-tight">
            Simple, transparent, and built for owners.
          </h1>
        </div>
      </section>

      {/* ── Phase steps ── */}
      {phases.map((phase, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={phase.num}
            className={`py-20 lg:py-28 ${isEven ? 'bg-ivory' : 'bg-sand'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full h-[400px] lg:h-[520px] ${
                    !isEven ? 'lg:col-start-2' : ''
                  }`}
                >
                  <PlaceholderImage
                    src={phase.image}
                    alt={phase.alt}
                    fill
                    className="object-cover"
                    placeholderColor={phase.placeholderColor}
                  />
                </div>

                {/* Text */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <p className="font-cormorant italic text-taupe text-5xl mb-4">{phase.num}</p>
                  <h2 className="font-cormorant font-300 text-3xl md:text-4xl text-deep-espresso mb-6">
                    {phase.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {phase.paragraphs.map((p, j) => (
                      <p key={j} className="font-jost font-300 text-sm text-espresso leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── FAQ ── */}
      <section className="bg-deep-espresso py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-4">
                Common questions
              </p>
              <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-ivory">
                Everything you need to know
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-taupe/20">
              {faqs.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-jost font-500 text-sm text-ivory mb-3">{faq.q}</h3>
                  <p className="font-jost font-300 text-sm text-ivory/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-espresso py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant font-300 text-4xl md:text-5xl text-ivory mb-4">
            Ready to get started?
          </h2>
          <p className="font-jost font-300 text-ivory/70 mb-8">
            Reach out today for a free assessment of your property.
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
