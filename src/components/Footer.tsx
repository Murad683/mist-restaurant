import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import mistLogo from "@/assets/mist-logo.png";

const Footer = () => {
  return (
    <footer className="bg-mist border-t border-border/50">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src={mistLogo}
              alt="Mist Restaurant"
              className="h-12 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tarixin və müasirliyin qovuşduğu məkan. Bakının İçərişəhərinin 
              qəlbində sirli yemək təcrübəsi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Kəşf Et</h4>
            <ul className="space-y-3">
              {[
                { name: "Haqqımızda", path: "/experience" },
                { name: "Menyu", path: "/menu" },
                { name: "Qalereya", path: "/gallery" },
                { name: "Əlaqə", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground font-mono text-sm tracking-wide transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">Əlaqə</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Shah Palace<br />Bakı, Azərbaycan 1005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+994552057813"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  +994 55 205 78 13
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@mistrestaurant.az"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  info@mistrestaurant.az
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display text-lg mb-6">İş Saatları</h4>
            <div className="space-y-2 mb-8">
              <p className="text-muted-foreground text-sm">
                <span className="font-mono">B.e – C.a:</span> 10:00 – 23:00
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-mono">Cümə – Bazar:</span> 10:00 – 01:00
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-mono">
            © 2025 Mist Restaurant & Terrace. Bütün hüquqlar qorunur.
          </p>
          <p className="text-muted-foreground/60 text-xs font-mono">
            Murad Mammadov by{" "}
            <a
              href="https://wa.me/994505131380?text=Salam%20vebsaytlarla%20maraqlaniram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-colors duration-300 underline underline-offset-2"
            >
              REVIO.AZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
