import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mouse } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Send className="h-16 w-16 text-primary animate-float" />
          </div>

          {/* Title */}
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Client</span>
            <span className="text-gradient">Stream</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            AI-driven solutions that help businesses increase efficiency,
            attract more clients, save time, and streamline operations.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl">
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Mouse className="h-6 w-6 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
