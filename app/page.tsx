import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Features from "@/components/Features";
import HowToBuy from "@/components/HowToBuy";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Features />
      <HowToBuy />
      <Community />
      <Footer />
    </main>
  );
}
