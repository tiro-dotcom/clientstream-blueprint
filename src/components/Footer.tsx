import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold">
              <span className="text-foreground">Client</span>
              <span className="text-primary">Stream</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ClientStream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
