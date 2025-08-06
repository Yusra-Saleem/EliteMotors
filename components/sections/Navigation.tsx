"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl lg:text-2xl font-bebas text-foreground hover:text-primary transition-colors duration-300"
                aria-label="Elite Motors Home"
              >
                ELITE MOTORS
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
                {[
                  { label: "Home", id: "home" },
                  { label: "Models", id: "models" },
                  { label: "Analytics", id: "analytics-section" },
                  { label: "Build", id: "build" },
                  { label: "Innovation", id: "innovation-heading" },
                  { label: "Experience", id: "experience-heading" },
                  { label: "Reviews", id: "reviews" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300"
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded="false"
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" aria-label="Open navigation menu"/>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-background"
          aria-hidden="false"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-xl font-bebas text-foreground">ELITE MOTORS</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-4" role="navigation">
              {[
                { label: "Home", id: "home" },
                { label: "Models", id: "models" },
                { label: "Analytics", id: "analytics-section" },
                { label: "Build", id: "build" },
                { label: "Innovation", id: "innovation-heading" },
                { label: "Experience", id: "experience-heading" },
                { label: "Reviews", id: "reviews" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-lg text-foreground hover:text-primary transition-colors duration-300"
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
