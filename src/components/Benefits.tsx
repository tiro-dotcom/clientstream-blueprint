import { TrendingUp, Target, Clock, Repeat, Shield, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Business Efficiency",
    description: "Streamline operations and boost productivity with AI-powered automation that works around the clock.",
    link: {
      text: "Read the study",
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
      label: "McKinsey: AI Productivity Impact",
    },
  },
  {
    icon: Target,
    title: "Higher Client Conversion",
    description: "Convert more leads into customers with intelligent automation that engages prospects at the perfect moment.",
    link: {
      text: "Read the study",
      url: "https://www.salesforce.com/resources/research-reports/state-of-the-connected-customer/",
      label: "Salesforce: Customer Engagement Study",
    },
  },
  {
    icon: Clock,
    title: "Save Time & Resources",
    description: "Free up your team to focus on high-value tasks while AI handles routine operations seamlessly.",
    link: {
      text: "Read the study",
      url: "https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ai-business-value",
      label: "IBM: AI Business Value Report",
    },
  },
  {
    icon: Repeat,
    title: "Automate Repetitive Tasks",
    description: "Eliminate manual, time-consuming processes and let AI handle the repetitive work with precision.",
    link: {
      text: "Read the study",
      url: "https://www.gartner.com/en/newsroom/press-releases/2023-10-11-gartner-says-more-than-80-percent-of-enterprises-will-have-used-generative-ai-apis-or-deployed-generative-ai-enabled-applications-by-2026",
      label: "Gartner: AI Automation Trends",
    },
  },
  {
    icon: Shield,
    title: "Professional & Reliable",
    description: "Count on consistent, error-free service delivery backed by professional support and maintenance.",
    link: {
      text: "Read the study",
      url: "https://www.pwc.com/gx/en/issues/data-and-analytics/publications/artificial-intelligence-study.html",
      label: "PwC: AI Global Impact Study",
    },
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose ClientStream
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your business with cutting-edge AI automation that delivers real results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 scroll-reveal-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <benefit.icon className="h-6 w-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-3">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {benefit.description}
      </p>

      {/* Link */}
      <a
        href={benefit.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
      >
        {benefit.link.text}
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
};

export default Benefits;
