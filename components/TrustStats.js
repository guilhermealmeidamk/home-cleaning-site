const stats = [
  { value: '900+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '5+', label: 'Years of Experience' },
  { value: '8', label: 'Expert Cleaners' },
]

export default function TrustStats() {
  return (
    <section aria-label="Credibility highlights" className="bg-primary/90 py-5 md:py-15">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-6 text-center md:grid-cols-4 md:gap-x-8">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-5xl font-extrabold tracking-tight text-secondary md:text-7xl">
              {item.value}
            </p>
            <p className="mt-3 text-base font-medium text-secondary md:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
