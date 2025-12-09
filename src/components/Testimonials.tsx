import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["AI Chatbots", "AI Receptionist", "Lead Generation", "Custom Automation"];

const testimonials = [
  {
    quote: "The AI chatbot transformed our customer support. We now handle 3x more inquiries with faster response times.",
    author: "Sarah M.",
    company: "TechStart Solutions",
    category: "AI Chatbots",
  },
  {
    quote: "Our website engagement increased by 40% after implementing ClientStream's chatbot. Highly recommend!",
    author: "David K.",
    company: "GrowthHub Agency",
    category: "AI Chatbots",
  },
  {
    quote: "The AI receptionist has been a game-changer. We never miss a call now and our booking rate has doubled.",
    author: "Michelle R.",
    company: "Premier Dental Clinic",
    category: "AI Receptionist",
  },
  {
    quote: "Lead generation is now completely automated. We're getting 50% more qualified leads every month.",
    author: "James L.",
    company: "InnovateTech",
    category: "Lead Generation",
  },
];

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("AI Chatbots");

  const filteredTestimonials = testimonials.filter(
    (t) => t.category === activeCategory
  );

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses using our AI solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50"
            >
              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
