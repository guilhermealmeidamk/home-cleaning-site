export default function Areas() {
  const areas = ['Charlotte', 'Lancaster', 'South Charlotte', 'Matthews', 'Waxhaw', 'Ballantyne', 'Pineville', 'Indian Trail', 'Fort Mill', 'Huntersville', 'Cornelius', 'Davidson', 'Mint Hill']

  return (
    <section
      id="areas"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-secondary py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex w-full items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary/60 md:w-20" />
          <span className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-primary md:text-sm">
            Service Areas
          </span>
          <span className="h-px w-12 bg-primary/60 md:w-20" />
        </div>
        <h2 id="areas-title" className="mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight text-primary md:text-6xl">
          Proudly serving Charlotte <br />
          <span className="text-primary/75">& nearby communities.</span>
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-primary">
          {areas.map((a) => (
            <div key={a} className="inline-flex w-fit items-center justify-center rounded-full border border-primary px-4 py-2 text-center">
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
