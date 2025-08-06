
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, Clock, Shield, Award, Star, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-primary/20 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(229,9,20,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(229,9,20,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="font-bebas text-3xl text-foreground mb-2 tracking-wider">
                  ELITE MOTORS
                </h3>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Redefining luxury automotive experiences through uncompromising
                  quality, cutting-edge innovation, and exceptional service since 1999.
                </p>
              </div>

              {/* Awards & Certifications */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Luxury Dealer of the Year 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Certified Premium Partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">5-Star Customer Rating</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="font-bebas text-xl text-foreground mb-6 tracking-wider">EXPLORE</h4>
              <nav className="space-y-3" role="navigation" aria-label="Footer navigation">
                {[
                  { label: "Home", id: "home" },
                  { label: "Luxury Models", id: "models" },
                  { label: "Custom Build", id: "build" },
                  { label: "Innovation", id: "features" },
                  { label: "Experience Center", id: "experience" },
                  { label: "Customer Reviews", id: "reviews" },
                  { label: "Schedule Test Drive", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300 text-left text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h4 className="font-bebas text-xl text-foreground mb-6 tracking-wider">CONTACT</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      9900 Wilshire Boulevard<br />
                      Beverly Hills, CA 90212<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+1-310-555-0199" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    +1 (310) 555-0199
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:info@elitemotors.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    info@elitemotors.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-1">
              <h4 className="font-bebas text-xl text-foreground mb-6 tracking-wider">STAY CONNECTED</h4>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Get exclusive access to new models, events, and luxury automotive insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-card border border-border rounded-l-lg focus:outline-none focus:border-primary text-sm"
                  />
                  <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-r-lg transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow our journey</p>
                <div className="flex space-x-4">
                  {[
                    { Icon: Facebook, label: "Facebook", href: "#" },
                    { Icon: Instagram, label: "Instagram", href: "#" },
                    { Icon: Twitter, label: "Twitter", href: "#" },
                    { Icon: Linkedin, label: "LinkedIn", href: "#" },
                    { Icon: Youtube, label: "YouTube", href: "#" },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group p-2 bg-card hover:bg-primary border border-border hover:border-primary rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Elite Motors By YUSRA SALEEM . All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-border">|</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-border">|</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Crafted with <span className="text-primary">♥</span> for automotive excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
