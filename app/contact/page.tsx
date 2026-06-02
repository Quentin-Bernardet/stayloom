import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | STAYLOOM Property Management',
  description:
    'Get in touch with STAYLOOM for a free, no-obligation property assessment. We respond within 24 hours. Serving Fort Myers, Cape Coral, Bonita Springs, and Naples.',
}

const contactItems = [
  {
    label: 'Phone',
    value: '(239) 994-1788',
    href: 'tel:+12399941788',
    note: 'Available Monday to Saturday, 9am to 6pm EST.',
  },
  {
    label: 'Email',
    value: 'contact@stayloomproperty.com',
    href: 'mailto:contact@stayloomproperty.com',
    note: 'We respond to all emails within 24 hours.',
  },
  {
    label: 'Location',
    value: 'Fort Myers, FL',
    href: null,
    note: 'Serving Southwest Florida including Cape Coral, Bonita Springs, and Naples.',
  },
]

const promises = [
  {
    title: 'Response within 24h',
    text: 'Every inquiry receives a personal response from our team within one business day.',
  },
  {
    title: 'Free Assessment',
    text: 'Your property assessment is completely free. No cost, no commitment required.',
  },
  {
    title: 'No Obligation',
    text: 'You are never pressured. Take the time you need to make the right decision for you.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-deep-espresso pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-jost text-xs tracking-[0.25em] uppercase text-taupe mb-4">
            Get in touch
          </p>
          <h1 className="font-cormorant font-300 text-5xl md:text-7xl text-ivory max-w-2xl leading-tight mb-5">
            Let&apos;s talk about your property.
          </h1>
          <p className="font-jost font-300 text-ivory/60 text-base max-w-lg leading-relaxed">
            Fill out the form and a member of our team will get back to you within 24 hours with a
            personalized assessment for your property.
          </p>
        </div>
      </section>

      {/* ── Body: form + sidebar ── */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">
            {/* Form column */}
            <div className="py-16 lg:py-20 lg:pr-16 border-r border-taupe/20">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="bg-sand py-16 lg:py-20 px-8 lg:px-10">
              <h3 className="font-cormorant font-300 text-3xl text-deep-espresso mb-10">
                Contact information
              </h3>
              <div className="flex flex-col gap-0 divide-y divide-taupe/30">
                {contactItems.map((item, i) => (
                  <div key={i} className="py-7">
                    <p className="font-jost text-xs tracking-[0.2em] uppercase text-taupe mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-jost font-400 text-base text-deep-espresso hover:text-espresso transition-colors block mb-2"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-jost font-400 text-base text-deep-espresso mb-2">
                        {item.value}
                      </p>
                    )}
                    <p className="font-jost font-300 text-xs text-espresso/70 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom strip ── */}
      <section className="bg-espresso py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:divide-x md:divide-taupe/30">
            {promises.map((p, i) => (
              <div key={i} className="md:px-8 first:pl-0 last:pr-0">
                <h4 className="font-jost font-500 text-xs tracking-widest uppercase text-taupe mb-2">
                  {p.title}
                </h4>
                <p className="font-jost font-300 text-sm text-ivory/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
