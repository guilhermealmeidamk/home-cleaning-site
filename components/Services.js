import { useState } from 'react'

const items = [
  {
    title: 'Standard Cleaning',
    desc: 'Regular maintenance cleaning to keep your home consistently fresh - kitchens, bathrooms, living areas, and floors.',
    icon: 'home',
  },
  {
    title: 'Deep Cleaning',
    desc: 'A thorough top-to-bottom clean - inside appliances, baseboards, grout, behind furniture. The reset your home craves.',
    icon: 'sparkles',
  },
  {
    title: 'Move In / Move Out',
    desc: 'Starting fresh or leaving on a high note. We make every transition spotless - deposit-back guaranteed.',
    icon: 'arrows',
  },
  {
    title: 'Recurring Cleaning',
    desc: 'Weekly, biweekly, or monthly plans tailored to your routine so your home always feels cared for.',
    icon: 'calendar',
  },
]

function ServiceIcon({ kind, active }) {
  const iconClass = active ? 'text-tertiary' : 'text-tertiary group-hover:text-secondary'

  if (kind === 'sparkles') {
    return (
      <svg viewBox="0 0 24 25" className={`h-7 w-7 ${iconClass}`} aria-hidden="true">
        <path
          d="m12 3 1.64 4.86L18.5 9.5l-4.86 1.64L12 16l-1.64-4.86L5.5 9.5l4.86-1.64L12 3Zm7 8 1 2.96L23 15l-2.96 1L19 19l-1-2.96L15 15l2.96-1L19 11ZM5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8L5 13Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (kind === 'arrows') {
    return (
      <svg viewBox="0 0 24 24" className={`h-7 w-7 ${iconClass}`} aria-hidden="true">
        <path
          d="M4 7h13.59l-3.3-3.29L15.7 2.3 21.4 8l-5.7 5.7-1.41-1.41L17.59 9H4V7Zm16 10H6.41l3.3 3.29L8.3 21.7 2.6 16l5.7-5.7 1.41 1.41L6.41 15H20v2Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (kind === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" className={`h-7 w-7 ${iconClass}`} aria-hidden="true">
        <path
          d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM5 6a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1H5Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={`h-7 w-7 ${iconClass}`} aria-hidden="true">
      <path
        d="m12 3 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9l9-8Zm0 2.67L5 11.89V19h2v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6h2v-7.11l-7-6.22Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Services() {
  const [current, setCurrent] = useState(0)
  const currentItem = items[current]

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="services" aria-labelledby="services-title" className="w-full bg-secondary/90 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex w-full items-center justify-center gap-4 text-secondary/90">
          <span className="h-px w-12 bg-primary/50 md:w-20" />
          <span className="text-center text-xs text-primary font-semibold uppercase tracking-[0.35em] md:text-sm">
            What we do
          </span>
          <span className="h-px w-12 bg-primary/50 md:w-20" />
        </div>
        <h2 id="services-title" className="text-primary mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Services crafted for <br />
          <span className="text-tertiary">every corner</span> of your home
        </h2>
      
        <div className="mx-auto mt-10 max-w-3xl">
          <article
            key={currentItem.title}
            className="group relative flex min-h-[220px] flex-col rounded-[1.2rem] border border-tertiary/45 bg-primary p-5 text-tertiary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/65 hover:bg-primary/95 hover:shadow-xl"
          >
            {currentItem.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-secondary/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-tertiary">
                Most Popular
              </span>
            )}

            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${currentItem.popular ? 'bg-secondary/20' : 'bg-tertiary/20 group-hover:bg-secondary/20'}`}>
              <ServiceIcon kind={currentItem.icon} active={Boolean(currentItem.popular)} />
            </div>

            <h3 className={`mt-6 font-serif text-[2rem] font-semibold leading-none ${currentItem.popular ? 'text-tertiary' : 'text-tertiary group-hover:text-secondary'}`}>
              {currentItem.title}
            </h3>

            <p className={`mt-4 text-[0.96rem] leading-relaxed ${currentItem.popular ? 'text-tertiary/85' : 'text-tertiary/85 group-hover:text-secondary/90'}`}>
              {currentItem.desc}
            </p>
          </article>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-secondary/40 text-primary transition hover:bg-secondary"
              aria-label="Previous service"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all ${index === current ? 'w-7 bg-primary' : 'w-2.5 bg-primary/35 hover:bg-primary/55'}`}
                  aria-label={`Go to ${item.title}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-secondary/40 text-primary transition hover:bg-secondary"
              aria-label="Next service"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
