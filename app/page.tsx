  import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Brands />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}