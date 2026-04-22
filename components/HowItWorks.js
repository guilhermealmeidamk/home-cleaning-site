export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book Online',
      desc: 'Choose your service, pick a time slot, and get an instant quote - no calls required.',
    },
    {
      number: '2',
      title: 'We Show Up',
      desc: "Our vetted, uniformed team arrives on time with all eco-friendly supplies - you don't lift a finger.",
    },
    {
      number: '3',
      title: 'Enjoy Your Home',
      desc: "Walk in to a spotless, fresh-smelling home. If anything's not right - we come back. Free.",
    },
  ]

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-primary py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex w-full items-center justify-center gap-4">
          <span className="h-px w-12 bg-secondary/60 md:w-20" />
          <span className="text-center text-xs text-secondary font-semibold uppercase tracking-[0.35em] md:text-sm">
            the process
          </span>
          <span className="h-px w-12 bg-secondary/60 md:w-20" />
        </div>
        <h2 id="how-it-works-title" className="text-secondary mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Clean home in <br />
          <span className="text-secondary/75">3 easy steps</span>
        </h2>

        <div className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-secondary/60 md:block" />
          {steps.map((s) => (
            <div key={s.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tertiary text-3xl font-semibold text-secondary shadow-[0_10px_24px_rgba(126,116,92,0.28)]">
                {s.number}
              </div>
              <h3 className="mt-9 font-serif text-[32px] font-semibold text-secondary">
                {s.title}
              </h3>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-secondary/85">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
