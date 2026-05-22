import Head from 'next/head'

const LINKS = {
  siteUrl: 'https://inhomecleaningnc.com',
  phoneNumber: '+15615621319',
  whatsappNumber: '15615621319'
}

export default function LinkBio() {
  const smsMessage = encodeURIComponent("Hi! I'd like a free estimate.")
  const smsHref = `sms:${LINKS.phoneNumber}?body=${smsMessage}`

  const links = [
    { id: 1, title: 'Website', url: LINKS.siteUrl, targetBlank: true },
    {
      id: 2,
      title: 'Estimates',
      url: smsHref
    },
    { id: 3, title: 'Contact', url: `tel:${LINKS.phoneNumber}` }
  ]

  return (
    <>
      <Head>
        <title>In Home Cleaning - Links</title>
        <meta name="description" content="Links rápidos - In Home Cleaning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex items-stretch justify-center bg-[#d8d6c7]">
        <div
          className="relative isolate w-full max-w-sm overflow-visible min-h-screen bg-[#d8d6c7]"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/bg_fundo2_link.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundSize: 'cover'
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-[38vh] z-[1] pointer-events-none"
            style={{
              backgroundImage: "url('/bg_fundo_link.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />

          <div className="relative z-10 flex min-h-screen flex-col items-center px-6 pb-14 pt-[calc(38vh+9.5rem)]">
            <div className="mb-5 flex w-full items-center justify-center gap-4 text-primary/80">
              <span className="h-px w-12 bg-primary/35 md:w-20" />
              <span className="text-center text-[12px] font-semibold uppercase tracking-[0.35em] md:text-sm">
                Trusted • Certified • Eco-Friendly
              </span>
              <span className="h-px w-12 bg-primary/35 md:w-20" />
            </div>
            <h1
              className="text-center text-4xl leading-tight text-primary mb-6 font-extrabold tracking-tight"
            >
              In Home Cleaning
            </h1>

            <div className="w-full space-y-5">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.targetBlank ? '_blank' : undefined}
                  rel={link.targetBlank ? 'noopener noreferrer' : undefined}
                  className="block w-full rounded-full bg-primary/80 py-5 text-center text-3xl tracking-wide text-secondary font-bold shadow-[0_14px_40px_rgba(0,0,0,0.15)] hover:bg-white transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className="text-center text-[12px] font-semibold uppercase tracking-[0.35em] md:text-sm mt-10 text-primary">
              <div className="leading-relaxed">
                <div>(561) 562-1319</div>
                <div>in.homecleaning5@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[38vh] z-[60] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-56  h-56 rounded-full bg-primary ring-[3px] ring-white shadow-2xl flex items-center justify-center overflow-hidden">
              <img src="/logo_link.png" alt="In Home Cleaning" className="h-32 w-32 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
