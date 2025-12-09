import { Calendar, MapPin, User, Target, Eye } from "lucide-react";

const aboutItems = [
  {
    icon: Calendar,
    title: "Founded in 2025",
    description: "ClientStream Automation was established to bridge the gap between traditional business operations and cutting-edge AI technology.",
  },
  {
    icon: MapPin,
    title: "Based in Mahikeng",
    description: "Proudly serving businesses across South Africa from our base in Mahikeng, bringing world-class AI automation to local enterprises.",
  },
  {
    icon: User,
    title: "Founded by Mr. Tiro Makgolo",
    description: "With a vision to empower businesses through automation, our founder leads a dedicated team focused on delivering exceptional AI solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses of all sizes with accessible, intelligent automation that drives growth, efficiency, and success in the digital age.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be South Africa's leading AI automation partner, helping businesses thrive through innovative technology and personalized solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Pioneering AI automation solutions in South Africa
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aboutItems.map((item) => (
            <div
              key={item.title}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
