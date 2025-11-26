import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}