import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SendIcon,
  Smile,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below you can find my personal email address, phone number, and links
          to my LinkedIn and Instagram. Please feel free to contact me using any
          of these methods!
        </p>

        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-16">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3">
              <a
                href="mailto:charliewyner@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                charliewyner@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3">
              <a
                href="tel:+14043580808"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (404) 358-0808
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:space-x-4">
            <div className="flex space-x-4 p-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/charles-wyner/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/charles.wyner/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
