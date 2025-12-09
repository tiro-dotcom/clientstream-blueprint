import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with AI automation? Let's talk!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <address className="space-y-8 not-italic">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:makgolotlou@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Send email to makgolotlou@gmail.com"
                >
                  makgolotlou@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+27664592527"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Call 066 459 2527"
                >
                  066 459 2527
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Mahikeng, South Africa</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27664592527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-[#20BD5A] transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contact us on WhatsApp
            </a>
          </address>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Send us a message
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span className="text-primary" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-primary" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message <span className="text-primary" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
