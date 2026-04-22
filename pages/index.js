import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStats from '../components/TrustStats'
import Footer from '../components/Footer'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Areas from '../components/Areas'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustStats />
      <Services />

      <main className="container mx-auto px-6 pt-0 pb-0 max-w-6xl">
        <HowItWorks />
        <Areas />
        <Testimonials />
        <FAQ />
      </main>
      <ContactSection />

  
      <Footer />
    </div>
  )
}
