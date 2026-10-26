import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ResearchScripting from "@/components/ResearchScripting";
import EditingShowcase from "@/components/EditingShowcase";
import FashionGallery from "@/components/FashionGallery";
import CreatorProfile from "@/components/CreatorProfile";
import Workflow from "@/components/Workflow";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ResearchScripting />
        <EditingShowcase />
        <FashionGallery />
        <CreatorProfile />
        <Workflow />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
