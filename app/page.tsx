import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";



export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
<About />
<Products />
<Services />

<Gallery />
<Brands />
<Testimonials />
<FAQ />
<Contact />
<Footer />
<FloatingButtons />

    </>
  );
}