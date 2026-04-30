import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "I've tried several cleaning services and In Home Cleaning is on another level. My apartment felt brand new - they even cleaned spots I'd forgotten existed!",
      name: 'Jessica M.',
      location: 'Charlotte, NC',
      initials: 'JM',
    },
    {
      text: 'Our house feels lighter every visit. The team is kind, fast, and always leaves every room spotless.',
      name: 'Amanda R.',
      location: 'Charlotte, NC',
      initials: 'AR',
    },
    {
      text: 'Booking was easy and the results were amazing. They paid attention to details we usually miss.',
      name: 'Daniel K.',
      location: 'Matthews, NC',
      initials: 'DK',
    },
    {
      text: 'Reliable, professional, and consistent every time. I finally found a cleaning service I can trust.',
      name: 'Priya S.',
      location: 'Ballantyne, NC',
      initials: 'PS',
    },
  ]

  const [current, setCurrent] = useState(0)
  const featured = testimonials[current]

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="reviews" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-primary py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex w-full items-center justify-center gap-4">
          <span className="h-px w-12 bg-secondary/60 md:w-20" />
          <span className="text-center text-xs text-secondary font-semibold uppercase tracking-[0.35em] md:text-sm">
            What Clients Are Saying
          </span>
          <span className="h-px w-12 bg-secondary/60 md:w-20" />
        </div>
        <h2 id="reviews-title" className="text-secondary mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Real words from<br />
          <span className="text-secondary/75">real clients.</span>
        </h2>

        <article className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-secondary/20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-7 text-secondary shadow-[0_16px_50px_rgba(126,116,92,0.28)] md:p-12">
          <div className="flex items-center gap-2 text-tertiary">
            {[...Array(5)].map((_, index) => (
              <svg key={index} viewBox="0 0 20 20" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="m10 1.8 2.47 5.01 5.52.81-4 3.9.94 5.5L10 14.42 5.07 17l.94-5.49L2 7.6l5.52-.8L10 1.8Z" />
              </svg>
            ))}
          </div>

          <blockquote className="mt-7 text-[14px] leading-relaxed text-secondary">
            "{featured.text}"
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary text-[14px] font-semibold text-primary">
              {featured.initials}
            </div>
            <div>
              <p className="text-[14px] font-semibold leading-tight text-secondary">{featured.name}</p>
              <p className="text-[12px] text-secondary/75">{featured.location}</p>
            </div>
          </div>
        </article>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/35 bg-secondary/15 text-secondary transition hover:bg-secondary/30"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${index === current ? 'w-7 bg-secondary' : 'w-2.5 bg-secondary/35 hover:bg-secondary/55'}`}
                aria-label={`Go to testimonial from ${item.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/35 bg-secondary/15 text-secondary transition hover:bg-secondary/30"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
