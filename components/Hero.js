import Image from 'next/image';

export default function Hero() {
  const smsNumber = '15615621319'
  const smsMessage = encodeURIComponent("Hi! I'd like a free estimate.")
  const smsHref = `sms:+${smsNumber}?body=${smsMessage}`
  const trustItems = [
    'Satisfaction Guaranteed',
    'Eco-Friendly & Non-Toxic',
    'No Hidden Fees',
    'Flexible Scheduling',
    'Fully Insured & Bonded',
    'Background-Checked Cleaners',
    '100% Satisfaction',
  ]

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background image behind the hero content */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.jpg"
            alt="clean home background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.9, filter: 'grayscale(8%)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'var(--color-primary)',
              opacity: 0.80,
            }}
          />
        </div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-5xl flex-col px-6 pt-32 pb-8 md:pt-0 md:pb-0">
        <div className="flex flex-1 flex-col items-center justify-center text-left">
          <div className="mb-5 flex w-full items-center justify-center gap-4 text-secondary/90">
            <span className="h-px w-12 bg-secondary/50 md:w-20" />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.35em] md:text-sm">
              Trusted • Certified • Eco-Friendly
            </span>
            <span className="h-px w-12 bg-secondary/50 md:w-20" />
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            Your home deserves this care.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-secondary md:text-xl">
            We bring a new standard of cleanliness to your space — professional, gentle, and always done with heart. Because{' '}
            <span className="text-secondary">every corner</span> tells a story.
          </p>
          <div className="mt-8 mb-6 flex flex-col items-center gap-3 md:mb-0">
            <a
              href="#contact"
              className="cta-pulse inline-block rounded-full bg-primary px-10 py-3 font-medium text-secondary"
            >
              Get a free estimate
            </a>
            <a
              href={smsHref}
              className="inline-block rounded-full border border-secondary/60 bg-tertiary/10 px-10 py-3 font-bold text-secondary transition-colors hover:bg-primary"
            >
              Text Us
            </a>
          </div>
        </div>
        <div className="mx-auto mb-4 flex w-full max-w-2xl items-center justify-center gap-3 rounded-xl bg-primary/20 px-3 py-3 backdrop-blur-[1px] md:mb-8 md:gap-5">
          <div className="flex items-center">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/65 bg-[#98b89c] text-sm font-semibold text-primary">
              JM
            </span>
            <span className="-ml-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/65 bg-[#4f8a4d] text-sm font-semibold text-secondary">
              AL
            </span>
            <span className="-ml-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/65 bg-[#ddd3b2] text-sm font-semibold text-primary">
              RP
            </span>
            <span className="-ml-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/65 bg-[#b9ceb8] text-lg font-semibold text-primary">
              +
            </span>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-1 flex justify-center gap-1 text-secondary md:justify-start">
              {[...Array(5)].map((_, index) => (
                <svg key={index} viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="m10 1.8 2.47 5.01 5.52.81-4 3.9.94 5.5L10 14.42 5.07 17l.94-5.49L2 7.6l5.52-.8L10 1.8Z" />
                </svg>
              ))}
            </div>
            <p className="text-base leading-tight text-secondary md:text-lg">
              Trusted by <span className="font-bold">900+</span> happy homeowners
            </p>
          </div>
        </div>
      </div>
      </section>
      <div className="trust-marquee" aria-label="Why homeowners trust us">
        <div className="trust-marquee__track">
          {[...trustItems, ...trustItems].map((item, index) => (
            <span className="trust-marquee__item" key={`${item}-${index}`}>
              <span className="trust-marquee__dot" aria-hidden="true">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
