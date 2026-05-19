import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeText from '@/components/MarqueeText'
import SelectedProjects from '@/components/SelectedProjects'
import Skills from '@/components/Skills'
import StatsCounter from '@/components/StatsCounter'
import WorkProcess from '@/components/WorkProcess'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeText dark />
      <SelectedProjects />
      <MarqueeText dark={false} />
      <Skills />
      <StatsCounter />
      <WorkProcess />
      <ContactCTA />
      <Footer />
    </main>
  )
}
