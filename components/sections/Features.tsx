
"use client"
import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Zap, ArrowRight, Star, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "UNMATCHED QUALITY",
    description:
      "Every vehicle in our collection undergoes rigorous inspection and certification. We guarantee nothing less than perfection, backed by our lifetime warranty program.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    alt: "Premium luxury car interior showcasing exceptional quality and craftsmanship",
    highlights: ["100% Certified Pre-Owned", "Lifetime Warranty", "Quality Guarantee"],
    stats: { value: "99.8%", label: "Quality Score" }
  },
  {
    icon: Users,
    title: "EXPERT SERVICE",
    description:
      "Our certified technicians and sales professionals bring decades of experience. From selection to service, you're in expert hands every step of the way.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    alt: "Luxury BMW sedan showcasing expert automotive engineering",
    highlights: ["Certified Professionals", "24/7 Support", "Expert Consultation"],
    stats: { value: "25+", label: "Years Experience" }
  },
  {
    icon: Zap,
    title: "EXCLUSIVE ACCESS",
    description:
      "Get first access to limited editions, custom configurations, and pre-release models. Our VIP program ensures you're always ahead of the curve.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    alt: "Exclusive luxury car collection displayed in premium showroom environment",
    highlights: ["VIP Priority Access", "Limited Editions", "Custom Builds"],
    stats: { value: "500+", label: "Exclusive Models" }
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const featureCards = sectionRef.current?.querySelectorAll(".feature-card");
    featureCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Premium Experience</span>
          </div>
          <h2
            id="features-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            WHY CHOOSE <span className="text-primary">ELITE</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference that sets us apart from every other luxury
            automotive dealer. Where excellence meets innovation.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={feature.title}
                data-index={index}
                className="feature-card group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Content Section */}
                  <div className={`${isEven ? "order-2 lg:order-1" : "order-1"} space-y-6`}>
                    <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      {/* Icon and Title */}
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                            <Icon className="text-primary-foreground text-2xl" aria-hidden="true" />
                          </div>
                          <div className="absolute -inset-2 border-2 border-primary/20 rounded-2xl animate-pulse"></div>
                        </div>
                        <div className="ml-6">
                          <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bebas text-primary">{feature.stats.value}</span>
                            <span className="text-sm text-muted-foreground font-medium">{feature.stats.label}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {feature.highlights.map((highlight, idx) => (
                          <div
                            key={highlight}
                            className={`flex items-center space-x-2 p-3 bg-card border border-border rounded-xl transform transition-all duration-500 hover:border-primary/50 hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                            style={{ transitionDelay: `${(idx + 1) * 100 + 400}ms` }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="group/btn inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`${isEven ? "order-1 lg:order-2" : "order-2"} relative`}>
                    <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="relative group/img overflow-hidden rounded-3xl shadow-2xl">
                        {/* Main Image */}
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          className="w-full h-80 sm:h-96 lg:h-[500px] object-cover transform transition-transform duration-700 group-hover/img:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500"></div>
                        
                        {/* Floating Stats Badge */}
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-foreground px-4 py-3 rounded-2xl shadow-lg">
                          <div className="text-2xl font-bebas text-primary text-center">{feature.stats.value}</div>
                          <div className="text-xs text-muted-foreground font-medium text-center">{feature.stats.label}</div>
                        </div>

                        {/* Bottom Badge */}
                        <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-xl">
                          <span className="text-sm font-medium">{feature.title}</span>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 border-4 border-primary/30 rounded-3xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 sm:mt-32">
          <div className="relative inline-flex items-center bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-700 group/cta">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover/cta:opacity-100 rounded-3xl transition-opacity duration-700"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="font-bebas text-3xl lg:text-4xl text-foreground mb-4 group-hover/cta:text-primary transition-colors duration-500">
                READY TO EXPERIENCE ELITE?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                Join thousands of satisfied customers who've made Elite their trusted automotive partner.
              </p>
              
              <button className="group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 flex items-center space-x-3 mx-auto">
                <span>Start Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
