"use client"
import React, { useState, useEffect } from "react";
import { Zap, Shield, Cpu, Gauge, Battery, Wifi } from "lucide-react";

const innovations = [
  {
    icon: Zap,
    title: "Lightning Performance",
    stat: "0-60 mph",
    value: "2.8s",
    description: "Instant torque delivery with our revolutionary electric powertrain technology.",
    details: ["1,020 HP Peak Power", "All-Wheel Drive", "Launch Control"]
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    stat: "Safety Rating",
    value: "5★",
    description: "Industry-leading safety systems with predictive collision avoidance.",
    details: ["360° Awareness", "AI Prediction", "Emergency Response"]
  },
  {
    icon: Cpu,
    title: "Neural Processing",
    stat: "Processing Power",
    value: "2.5 TOPS",
    description: "Next-generation AI chip processes real-time driving data and preferences.",
    details: ["Real-time Learning", "Predictive Analytics", "Personal Assistant"]
  },
  {
    icon: Gauge,
    title: "Dynamic Handling",
    stat: "Response Time",
    value: "0.1ms",
    description: "Adaptive suspension adjusts 1000x per second for perfect road contact.",
    details: ["Magnetic Dampers", "Road Scanning", "Comfort Modes"]
  },
  {
    icon: Battery,
    title: "Extended Range",
    stat: "Maximum Range",
    value: "500mi",
    description: "Revolutionary battery technology with ultra-fast charging capabilities.",
    details: ["Fast Charging", "Energy Recovery", "Thermal Management"]
  },
  {
    icon: Wifi,
    title: "Connected Experience",
    stat: "Network Speed",
    value: "5G+",
    description: "Always connected with over-the-air updates and cloud integration.",
    details: ["OTA Updates", "Cloud Sync", "Remote Control"]
  }
];

export default function InnovationShowcase() {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % innovations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleInnovationClick = (index: number) => {
    setActiveInnovation(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden"
      aria-labelledby="innovation-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="innovation-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            BREAKTHROUGH <span className="text-primary">INNOVATION</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering automotive technologies that redefine what's possible on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Main Feature Display */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-card to-muted border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="text-center mb-8">
                {React.createElement(innovations[activeInnovation].icon, {
                  className: "w-16 h-16 text-primary mx-auto mb-4"
                })}
                <h3 className="font-bebas text-2xl lg:text-3xl text-foreground mb-2">
                  {innovations[activeInnovation].title.toUpperCase()}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base mb-6">
                  {innovations[activeInnovation].description}
                </p>
              </div>

              {/* Animated Stat Display */}
              <div className="text-center mb-8">
                <div className="inline-block relative">
                  <div className="text-5xl lg:text-6xl font-bebas text-primary mb-2 relative z-10">
                    {innovations[activeInnovation].value}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium uppercase tracking-wide">
                    {innovations[activeInnovation].stat}
                  </div>
                  {/* Animated Ring */}
                  <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Feature Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {innovations[activeInnovation].details.map((detail, index) => (
                  <div
                    key={detail}
                    className="text-center p-4 bg-background/50 rounded-xl border border-border"
                  >
                    <div className="text-xs lg:text-sm text-muted-foreground">
                      {detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8">
                <div className="flex justify-center space-x-2">
                  {innovations.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-8 rounded-full transition-all duration-500 ${
                        index === activeInnovation ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {innovations.map((innovation, index) => {
                const Icon = innovation.icon;
                return (
                  <div
                    key={innovation.title}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      index === activeInnovation
                        ? "scale-105 z-10"
                        : "hover:scale-102"
                    }`}
                    onClick={() => handleInnovationClick(index)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleInnovationClick(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${innovation.title} innovation`}
                  >
                    <div
                      className={`p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-500 text-center ${
                        index === activeInnovation
                          ? "border-primary bg-card shadow-2xl shadow-primary/20"
                          : "border-border bg-card/70 hover:border-primary/50"
                      }`}
                    >
                      <Icon
                        className={`w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 mx-auto mb-2 sm:mb-3 transition-all duration-300 ${
                          index === activeInnovation
                            ? "text-primary scale-110"
                            : "text-muted-foreground"
                        }`}
                      />
                      <h4 className="font-bebas text-xs sm:text-sm lg:text-base text-foreground mb-1">
                        {innovation.title.toUpperCase()}
                      </h4>
                      <div
                        className={`text-sm sm:text-lg lg:text-xl font-bebas transition-colors duration-300 ${
                          index === activeInnovation
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {innovation.value}
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {index === activeInnovation && (
                      <div className="absolute -inset-1 border-2 border-primary rounded-2xl animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Auto-play Control */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
                aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoPlaying ? "AUTO-PLAYING" : "PAUSED"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}