import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Products from '@/components/Products'
import Process from '@/components/Process'
import About from '@/components/About'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal><Products /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><CTABanner /></ScrollReveal>
      <Footer />
    </main>
  )
}
