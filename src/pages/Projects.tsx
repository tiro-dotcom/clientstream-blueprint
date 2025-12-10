import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const projects = [
  {
    title: "E-commerce AI Assistant",
    client: "FashionHub Store",
    description: "Implemented a 24/7 AI chatbot that handles product inquiries, sizing recommendations, and order tracking. Increased conversion rate by 45%.",
    results: ["45% higher conversions", "80% queries automated", "2 sec response time"],
    category: "AI Chatbots",
  },
  {
    title: "Medical Appointment Booking",
    client: "HealthFirst Clinic",
    description: "Deployed an AI receptionist that manages appointment scheduling, reminders, and patient intake. Reduced no-shows by 60%.",
    results: ["60% fewer no-shows", "500+ calls/day handled", "24/7 availability"],
    category: "AI Receptionists",
  },
  {
    title: "Real Estate Lead Qualifier",
    client: "Prime Properties Group",
    description: "Built an intelligent lead generation system that qualifies prospects, schedules viewings, and nurtures leads automatically.",
    results: ["3x more qualified leads", "50% faster response", "$2M+ in closed deals"],
    category: "AI Lead Generation",
  },
  {
    title: "Restaurant Order & Support Bot",
    client: "TastyBites Chain",
    description: "Created a multi-platform chatbot for WhatsApp, Instagram, and website that handles orders, reservations, and customer support.",
    results: ["35% more online orders", "90% satisfaction rate", "Multi-language support"],
    category: "AI Chatbots",
  },
  {
    title: "Insurance Claims Assistant",
    client: "SecureLife Insurance",
    description: "Developed an AI voice agent that guides customers through claims filing, document submission, and status updates.",
    results: ["70% faster claims", "40% cost reduction", "24/7 support"],
    category: "AI Receptionists",
  },
  {
    title: "SaaS Demo Booking System",
    client: "CloudTech Solutions",
    description: "Implemented an AI-powered lead capture and demo scheduling system that qualifies prospects and books meetings automatically.",
    results: ["200% more demos booked", "Lead scoring automation", "CRM integration"],
    category: "AI Lead Generation",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | ClientStream AI Solutions</title>
        <meta
          name="description"
          content="Explore our successful AI implementation projects. See how we've helped businesses automate customer engagement with chatbots, voice agents, and lead generation."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Our Projects
                </h1>
                <p className="text-lg text-muted-foreground">
                  Real results from businesses we've helped transform with AI automation
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mb-3">{project.client}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Results
                      </p>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Projects;
