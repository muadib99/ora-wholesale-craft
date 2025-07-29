import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Motto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">O</span>
              </div>
              <span className="font-playfair text-xl font-semibold">ORA Coffee</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Slow roasted. Hand crafted. Shared with love.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm text-primary-foreground/80">669-213-9677</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm text-primary-foreground/80">408-332-6580</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-sm text-primary-foreground/80">Zenbilley@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Addis Ababa, Ethiopia → U.S. Import Hub
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors group"
              >
                <Instagram size={20} className="text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors group"
              >
                <Facebook size={20} className="text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors group"
              >
                <Linkedin size={20} className="text-primary-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ORA Coffee. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link 
              to="/terms" 
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;