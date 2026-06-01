import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Logo + tagline */}
          <div className="flex flex-col gap-5">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/images/logo-footer.png"
                alt="STAYLOOM"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-cormorant italic text-ivory/60 text-lg leading-relaxed max-w-xs">
              Premium short-term rental management in Southwest Florida.
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-jost font-500 text-xs tracking-widest uppercase text-taupe">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-jost text-xs tracking-widest uppercase text-ivory/40 mb-1">
                  Phone
                </p>
                <a
                  href="tel:+12399941788"
                  className="font-jost text-ivory/80 hover:text-ivory transition-colors"
                >
                  (239) 994-1788
                </a>
              </div>
              <div>
                <p className="font-jost text-xs tracking-widest uppercase text-ivory/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:stayloomproperty@gmail.com"
                  className="font-jost text-ivory/80 hover:text-ivory transition-colors break-all"
                >
                  stayloomproperty@gmail.com
                </a>
              </div>
              <div>
                <p className="font-jost text-xs tracking-widest uppercase text-ivory/40 mb-1">
                  Location
                </p>
                <p className="font-jost text-ivory/80">Fort Myers, FL</p>
              </div>
            </div>
          </div>

          {/* Column 3 — Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="font-jost font-500 text-xs tracking-widest uppercase text-taupe">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-jost text-ivory/80 hover:text-ivory transition-colors text-sm tracking-wide"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-taupe/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-jost text-xs text-ivory/40 tracking-wide">
            &copy; {new Date().getFullYear()} STAYLOOM Property Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-jost text-xs text-ivory/40 hover:text-ivory/70 tracking-wide transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-jost text-xs text-ivory/40 hover:text-ivory/70 tracking-wide transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
