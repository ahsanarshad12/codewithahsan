import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TornPaperDivider from "../components/TornPaperDivider";
import SelectedWork from "../components/SelectedWork";
import Skills from "../components/Skills";
import CareerJourney from "../components/CareerJourney";
import Services from "../components/Services";
import NumbersAndProcess from "../components/NumbersAndProcess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioEffects from "../components/PortfolioEffects";
import SiteChrome from "../components/SiteChrome";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <TornPaperDivider />
        <SelectedWork />
        <Skills />
        <CareerJourney />
        <Services />
        <NumbersAndProcess />
        <Contact />
      </main>
      <Footer />
      <PortfolioEffects />
      <SiteChrome />
    </>
  );
}
