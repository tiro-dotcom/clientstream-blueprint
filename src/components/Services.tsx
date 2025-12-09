import { MessageSquare, Phone, Users, Cog, Check } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots on your website, WhatsApp, Instagram, and Facebook to engage customers 24/7 and drive conversions.",
    features: ["24/7 availability", "Multi-platform support", "Natural conversations"],
    hasVideo: true,
  },
  {
    icon: Phone,
    title: "AI Receptionists",
    description: "Automate customer inquiries, bookings, and support with AI-powered receptionists that never miss a call or message.",
    features: ["Call handling", "Appointment booking", "Customer support"],
    hasVideo: true,
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    description: "Consistently attract and qualify new clients with automated lead generation systems powered by AI.",
    features: ["Automated prospecting", "Lead qualification", "Pipeline management"],
    hasVideo: true,
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Eliminate repetitive tasks and streamline operations with intelligent automation that saves time and reduces errors.",
    features: ["Task automation", "Workflow optimization", "Time savings"],
    hasVideo: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI automation solutions designed to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Video Placeholder */}
              {service.hasVideo && (
                <div className="bg-muted/50 rounded-lg aspect-video mb-6 flex items-center justify-center border border-border/30">
                  <div className="text-center text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-primary border-b-6 border-b-transparent ml-1" />
                    </div>
                    <p className="text-sm">Video Demo</p>
                  </div>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
