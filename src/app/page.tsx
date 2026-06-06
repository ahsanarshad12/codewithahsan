import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeText from '@/components/MarqueeText'
import SelectedProjects from '@/components/SelectedProjects'
import Skills from '@/components/Skills'
import StatsCounter from '@/components/StatsCounter'
import WorkProcess from '@/components/WorkProcess'
import Testimonials from '@/components/Testimonials'
import AboutStory from '@/components/AboutStory'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import ContactForm from '@/components/ContactForm'
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
      <AboutStory />
      <Services />
      <TechStack />
      {/* <Testimonials /> */}
      <StatsCounter />
      <WorkProcess />
      <ContactForm />
      <Footer />
    </main>
  )
}
