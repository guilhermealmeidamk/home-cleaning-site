import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const message = `Phone: ${form.phone}\nService: ${form.service}\n\nRequest: Free quote from website form.`

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '' })
      } else {
        const data = await res.json()
        setStatus(data?.error || 'error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-tertiary py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.8rem] border border-secondary/35 bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-6 text-secondary shadow-[0_20px_60px_rgba(126,116,92,0.32)] md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-tertiary md:text-sm">
            Ready to experience it?
          </p>

          <h2
            id="contact-title"
            className="mt-6 text-center font-serif text-4xl font-semibold leading-tight md:text-6xl"
          >
            Your home deserves <br />
            <span className="text-tertiary">this care.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-secondary/90 md:text-xl">
            Book today and get a <span className="font-semibold text-secondary">free quote</span> with no commitment. First-time clients enjoy <span className="font-semibold text-secondary">15% off</span>.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-secondary/25 bg-secondary/10 p-4 md:p-7"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                required
                onInvalid={(e) => e.target.setCustomValidity('Please, enter your name')}
                onInput={(e) => e.target.setCustomValidity('')}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-3xl border border-secondary/35 bg-secondary px-5 py-4 text-[15px] text-primary placeholder:text-primary/65 outline-none transition focus:border-tertiary"
              />
              <input
                required
                onInvalid={(e) => e.target.setCustomValidity('Please, enter your email')}
                onInput={(e) => e.target.setCustomValidity('')}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-3xl border border-secondary/35 bg-secondary px-5 py-4 text-[15px] text-primary placeholder:text-primary/65 outline-none transition focus:border-tertiary"
              />
              <input
                required
                onInvalid={(e) => e.target.setCustomValidity('Please, enter your phone number')}
                onInput={(e) => e.target.setCustomValidity('')}
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-3xl border border-secondary/35 bg-secondary px-5 py-4 text-[15px] text-primary placeholder:text-primary/65 outline-none transition focus:border-tertiary"
              />
              <select
                required
                onInvalid={(e) => e.target.setCustomValidity('Please, select a service')}
                onInput={(e) => e.target.setCustomValidity('')}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="contact-select rounded-3xl border border-secondary/35 bg-secondary px-5 py-4 pr-12 text-[15px] text-primary outline-none transition focus:border-tertiary"
              >
                <option value="" disabled>
                  Select service
                </option>
                <option>Standard Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move In / Move Out</option>
                <option>Recurring Cleaning</option>
              </select>
            </div>

            <button
              type="submit"
              className="cta-pulse mt-5 block w-fit mx-auto rounded-full bg-primary px-10 py-3 font-bold text-secondary transition-colors hover:bg-primary/90"
            >
              Get My Free Quote →
            </button>

            <div className="mt-3 text-center text-[12px] text-secondary/70">
              {status === 'loading' && <span>Sending...</span>}
              {status === 'success' && <span>Message sent! We will reach out soon.</span>}
              {status && status !== 'loading' && status !== 'success' && <span>Error sending. Please try again.</span>}
            </div>
          </form>

          <p className="mt-7 text-center text-[12px] text-secondary/60">
            No credit card required. We will reach out within 1 business hour.
          </p>
        </div>
      </div>
    </section>
  )
}
