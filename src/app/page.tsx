import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Products from '@/components/Products'
import Process from '@/components/Process'
import About from '@/components/About'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Process />
      <About />
      <CTABanner />
      <Footer />
    </main>
  )
}
