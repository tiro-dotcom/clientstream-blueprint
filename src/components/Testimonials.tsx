import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "The AI chatbot transformed our customer support. We now handle 3x more inquiries with faster response times.",
    author: "Sarah M.",
    company: "TechStart Solutions",
    stars: 5,
  },
  {
    quote: "Our website engagement increased by 40% after implementing ClientStream's chatbot. Highly recommend!",
    author: "David K.",
    company: "GrowthHub Agency",
    stars: 5,
  },
  {
    quote: "The AI receptionist has been a game-changer. We never miss a call now and our booking rate has doubled.",
    author: "Michelle R.",
    company: "Premier Dental Clinic",
    stars: 5,
  },
  {
    quote: "Lead generation is now completely automated. We're getting 50% more qualified leads every month.",
    author: "James L.",
    company: "InnovateTech",
    stars: 4,
  },
  {
    quote: "Incredible ROI! The chatbot paid for itself within the first month of implementation.",
    author: "Amanda T.",
    company: "Sunrise Marketing",
    stars: 5,
  },
  {
    quote: "Our response time went from hours to seconds. Customers love the instant support.",
    author: "Robert C.",
    company: "FastTrack Logistics",
    stars: 5,
  },
  {
    quote: "The AI handles 80% of our inquiries automatically. Our team can focus on complex issues now.",
    author: "Jennifer W.",
    company: "CloudNine Tech",
    stars: 4,
  },
  {
    quote: "Best investment we made this year. Customer satisfaction scores are through the roof.",
    author: "Michael B.",
    company: "Elite Consulting",
    stars: 5,
  },
  {
    quote: "We scaled our support without hiring more staff. The AI is like having 10 extra employees.",
    author: "Lisa H.",
    company: "Digital Dynamics",
    stars: 5,
  },
  {
    quote: "The lead qualification feature alone has saved us countless hours of manual work.",
    author: "Thomas P.",
    company: "Venture Labs",
    stars: 4,
  },
  {
    quote: "Our conversion rate jumped 35% after adding the AI chatbot to our landing pages.",
    author: "Emily R.",
    company: "ConvertPro Agency",
    stars: 5,
  },
  {
    quote: "24/7 availability means we never lose a potential customer. Absolutely essential for our business.",
    author: "Chris D.",
    company: "NightOwl Services",
    stars: 5,
  },
  {
    quote: "The natural language processing is impressive. Customers often don't realize they're chatting with AI.",
    author: "Sophia G.",
    company: "TalkSmart Inc.",
    stars: 4,
  },
  {
    quote: "Setup was seamless and the support team was incredibly helpful throughout the process.",
    author: "Andrew M.",
    company: "QuickStart Ventures",
    stars: 5,
  },
  {
    quote: "We've reduced our support costs by 60% while improving response quality. Win-win!",
    author: "Rachel S.",
    company: "BudgetWise Solutions",
    stars: 5,
  },
  {
    quote: "The analytics dashboard gives us insights we never had before about customer needs.",
    author: "Kevin L.",
    company: "DataDriven Co.",
    stars: 4,
  },
  {
    quote: "Multilingual support opened up new markets for us. Revenue is up 45% this quarter.",
    author: "Maria F.",
    company: "GlobalReach Exports",
    stars: 5,
  },
  {
    quote: "The AI receptionist handles appointments perfectly. No more scheduling conflicts.",
    author: "Daniel N.",
    company: "Wellness Center Pro",
    stars: 5,
  },
  {
    quote: "Our sales team now only talks to qualified leads. Productivity has never been higher.",
    author: "Jessica A.",
    company: "SalesForce Elite",
    stars: 4,
  },
  {
    quote: "Customer complaints dropped 70% since implementing the AI support system.",
    author: "Brian K.",
    company: "HappyCustomer Inc.",
    stars: 5,
  },
  {
    quote: "The integration with our CRM was flawless. All data syncs automatically.",
    author: "Natalie J.",
    company: "SyncWell Systems",
    stars: 5,
  },
  {
    quote: "We went from 2-hour response times to 2 seconds. Game-changing technology.",
    author: "Steven W.",
    company: "RapidResponse Co.",
    stars: 5,
  },
  {
    quote: "The custom automation workflow saved our team 20+ hours per week.",
    author: "Laura B.",
    company: "TimeWise Agency",
    stars: 4,
  },
  {
    quote: "Our competitors are still using forms while we're converting with AI. Huge advantage.",
    author: "Mark T.",
    company: "EdgeTech Solutions",
    stars: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3" aria-label={`${count} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 12);
  const secondRow = testimonials.slice(12);

  return (
    <section className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses using our AI solutions
          </p>
        </div>
      </div>

      {/* First Row - Scrolling Left */}
      <div className="relative mb-6">
        <div className="flex animate-scroll-left">
          {[...firstRow, ...firstRow].map((testimonial, index) => (
            <div
            key={index}
              className="flex-shrink-0 w-[350px] mx-3 bg-card rounded-xl p-6 shadow-glow border border-primary/20"
            >
              <StarRating count={testimonial.stars} />
              <blockquote className="text-foreground mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Left (slower) */}
      <div className="relative">
        <div className="flex animate-scroll-left-slow">
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <div
            key={index}
              className="flex-shrink-0 w-[350px] mx-3 bg-card rounded-xl p-6 shadow-glow border border-primary/20"
            >
              <StarRating count={testimonial.stars} />
              <blockquote className="text-foreground mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
