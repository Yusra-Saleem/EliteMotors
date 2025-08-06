"use client"
import React, { useState } from "react";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

const experienceItems = [
  {
    title: "Virtual Test Drive",
    description: "Experience our vehicles from the comfort of your home with immersive 360° virtual tours.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    features: ["360° Interior View", "Engine Sound Preview", "Real-time Controls"]
  },
  {
    title: "AR Customization",
    description: "Visualize your dream car in your driveway using cutting-edge augmented reality technology.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    features: ["Live AR Preview", "Color Visualization", "Real Environment"]
  },
  {
    title: "Digital Concierge",
    description: "Get personalized recommendations and expert guidance through our AI-powered concierge.",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    features: ["24/7 Availability", "Expert Knowledge", "Personalized Service"]
  }
];

export default function ExperienceSection() {
  const [activeItem, setActiveItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted via-background to-muted overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="experience-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            IMMERSIVE <span className="text-primary">EXPERIENCE</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary technology meets luxury automotive, creating an unprecedented digital showroom experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Interactive Display */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={experienceItems[activeItem].image}
                alt={`${experienceItems[activeItem].title} interactive experience`}
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              
              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-bebas text-2xl text-foreground mb-2">
                    {experienceItems[activeItem].title.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {experienceItems[activeItem].description}
                  </p>
                  
                  {/* Media Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label={isPlaying ? "Pause experience" : "Play experience"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <Play className="w-5 h-5 text-primary-foreground ml-1" />
                      )}
                    </button>
                    <button className="p-2 bg-card/80 rounded-lg hover:bg-card transition-colors duration-300">
                      <Volume2 className="w-4 h-4 text-foreground" />
                    </button>
                    <button className="p-2 bg-card/80 rounded-lg hover:bg-card transition-colors duration-300">
                      <Maximize className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-4 left-4 right-4">
                <div className="flex space-x-2">
                  {experienceItems.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        index === activeItem ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Options */}
          <div className="order-1 lg:order-2 space-y-6">
            {experienceItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index === activeItem ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveItem(index)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveItem(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Select ${item.title} experience`}
              >
                <div
                  className={`p-6 lg:p-8 rounded-2xl border-2 transition-all duration-500 ${
                    index === activeItem
                      ? "border-primary bg-card shadow-2xl shadow-primary/20"
                      : "border-border bg-card/50 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === activeItem
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <span className="font-bebas text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bebas text-xl lg:text-2xl text-foreground mb-2">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}