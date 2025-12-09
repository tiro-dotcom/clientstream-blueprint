import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ClientStream | AI Automation Solutions for Business Growth</title>
        <meta name="description" content="Transform your business with ClientStream's AI chatbots, receptionists, and lead generation. Increase efficiency, attract more clients, and streamline operations in Mahikeng, South Africa." />
        <link rel="canonical" href="https://clientstream.co.za/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <header>
          <Navbar />
        </header>
        
        <main>
          <Hero />
          <Services />
          <Benefits />
          <Testimonials />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;