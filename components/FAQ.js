import { useState } from 'react'

export default function FAQ() {
  const qas = [
    { q: 'What areas do you serve?', a: 'We serve Charlotte and nearby communities including South Charlotte, Matthews, Waxhaw, and more.' },
    { q: 'Do you offer recurring cleaning?', a: 'Yes — weekly, biweekly and monthly recurring plans are available.' },
    { q: 'Do I need to be home during the cleaning?', a: 'YNot at all. Many of our clients provide entry instructions and trust us to do the work. All our cleaners are background-checked and fully bonded.' },
    { q: 'Do you bring supplies?', a: 'We can bring supplies or use yours; tell us your preference when requesting a quote.' }
  ]
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-secondary py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex w-full items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary/60 md:w-20" />
          <span className="text-center text-xs text-primary font-semibold uppercase tracking-[0.35em] md:text-sm">
            questions
          </span>
          <span className="h-px w-12 bg-primary/60 md:w-20" />
        </div>
        <h2 id="faq-title" className="text-primary mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Everything you <br />
          <span className="text-primary/75">need to know</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {qas.map((item, i) => {
            const isOpen = openIndex === i
            const answerId = `faq-answer-${i}`
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-primary/35 bg-gradient-to-br from-secondary/95 to-secondary/90 shadow-[0_8px_30px_rgba(226,222,208,0.28)]">
                <button
                  type="button"
                  onClick={() => toggleItem(i)}
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <h4 className="font-bold text-primary">{item.q}</h4>
                  <span className="mt-0.5 text-xl leading-none text-primary" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p id={answerId} className="w-full border-t border-primary/20 bg-primary px-4 py-4 text-sm text-secondary">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
