"use client"
  
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CarModel as CarModelBase } from "@/shared/schema";

// Extend CarModel type to include acceleration if not present
type CarModel = CarModelBase & {
  acceleration?: string;
};
import { ArrowRight, Zap, Gauge, Award, Filter } from "lucide-react";

export default function CarModelsShowcase() {
  const { data: cars = [], isLoading } = useQuery<CarModel[]>({
    queryKey: ["/api/cars"],
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Models", count: cars?.length || 0, icon: Award },
    { id: "luxury", name: "Luxury", count: cars?.filter((car: CarModel) => car.type?.includes("Luxury")).length || 0, icon: Award },
    { id: "sports", name: "Sports", count: cars?.filter((car: CarModel) => car.type?.includes("Sports")).length || 0, icon: Zap },
    { id: "electric", name: "Electric", count: cars?.filter((car: CarModel) => car.type?.includes("Electric")).length || 0, icon: Gauge }
  ];

  const filteredCars = selectedCategory === "all" 
    ? cars 
    : cars?.filter((car: CarModel) => car.type?.toLowerCase().includes(selectedCategory));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted via-background to-muted relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-16 bg-gradient-to-r from-muted-foreground/20 via-primary/20 to-muted-foreground/20 rounded-3xl w-96 mx-auto mb-8 animate-pulse"></div>
            <div className="h-8 bg-muted-foreground/20 rounded-2xl w-[600px] mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card/50 rounded-3xl overflow-hidden border border-border animate-pulse">
                <div className="h-80 bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/10"></div>
                <div className="p-8 space-y-6">
                  <div className="h-10 bg-muted-foreground/20 rounded-2xl"></div>
                  <div className="h-6 bg-muted-foreground/20 rounded-xl w-3/4"></div>
                  <div className="flex space-x-4">
                    <div className="h-16 bg-muted-foreground/20 rounded-xl flex-1"></div>
                    <div className="h-16 bg-muted-foreground/20 rounded-xl flex-1"></div>
                    <div className="h-16 bg-muted-foreground/20 rounded-xl flex-1"></div>
                  </div>
                  <div className="h-14 bg-muted-foreground/20 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="models"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted via-background to-muted relative overflow-hidden"
      aria-labelledby="models-heading"
    >
      {/* Complex Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-pulse"></div>
        
        {/* Animated Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-primary/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-primary/30 rounded-lg animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ultra Enhanced Header */}
        <div className="text-center mb-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-primary tracking-widest">ULTRA PREMIUM COLLECTION</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          {/* Main Heading */}
          <div className="relative mb-8">
            <h2
              id="models-heading"
              className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-none text-center"
            >
              <span className="block">EXCEPTIONAL</span>
              <span className="text-primary block relative">
                MODELS
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary/60 rounded-full"></div>
              </span>
            </h2>
          </div>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our exclusive collection of high-performance luxury vehicles, each engineered to perfection and designed to exceed expectations.
            <span className="block mt-2 text-primary font-semibold">Where innovation meets excellence.</span>
          </p>
        </div>

        {/* Advanced Category Filter System */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-5 rounded-3xl font-bold text-sm tracking-wider transition-all duration-700 overflow-hidden backdrop-blur-sm ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 scale-110'
                    : 'bg-card/80 text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 hover:scale-105 hover:shadow-xl'
                }`}
              >
                <div className="relative z-10 flex items-center space-x-3">
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <div>
                    <span className="block">{category.name}</span>
                    <span className="text-xs opacity-75">({category.count} models)</span>
                  </div>
                </div>
                
                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Active State Animation */}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse"></div>
                )}
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            );
          })}
        </div>

        {/* Ultra Complex Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredCars?.map((car: CarModel, index: number) => (
            <div
              key={car.id}
              className={`group relative transition-all duration-700 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:transform lg:scale-105' : ''
              } ${index === 1 ? 'lg:transform lg:translate-y-12' : ''} ${
                index === 2 ? 'lg:transform lg:-translate-y-8' : ''
              }`}
              onMouseEnter={() => setHoveredCar(car.id)}
              onMouseLeave={() => setHoveredCar(null)}
            >
              <div className="relative bg-gradient-to-br from-card via-card/98 to-card/95 border border-border rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/15 backdrop-blur-sm">
                
                {/* Ultra Complex Image Container */}
                <div className="relative overflow-hidden h-48 lg:h-56">
                  <img
                    src={car.image}
                    alt={`${car.name} luxury vehicle`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Multi-layer Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-primary/15 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-md border border-border hover:border-primary/50 rounded-2xl px-6 py-3 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                    <div className="text-xl font-bebas text-foreground group-hover:text-primary transition-colors duration-300">
                      ${car.basePrice?.toLocaleString() || "N/A"}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">STARTING PRICE</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-8 left-8 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl px-4 py-2 text-xs font-bold tracking-wider shadow-lg">
                    {car.type?.toUpperCase() || "PREMIUM"}
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-8 left-8 flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground font-bold tracking-wider">AVAILABLE NOW</span>
                  </div>
                  
                  {/* Hover Action Button */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Content Area */}
                <div className="p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bebas text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                        {car.name?.toUpperCase() || "PREMIUM MODEL"}
                      </h3>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed max-w-sm">
                        {car.description || "Experience unparalleled luxury and performance in this exceptional vehicle designed for the discerning driver."}
                      </p>
                    </div>
                  </div>
                  
                  {/* Ultra Advanced Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { 
                        label: "POWER", 
                        value: car.horsepower || "750", 
                        unit: "HP", 
                        color: "text-red-500",
                        bgColor: "bg-red-500/10",
                        icon: Zap
                      },
                      { 
                        label: "SPEED", 
                        value: car.topSpeed || "200", 
                        unit: "MPH", 
                        color: "text-blue-500",
                        bgColor: "bg-blue-500/10",
                        icon: Gauge
                      },
                      { 
                        label: "SPRINT", 
                        value: car.acceleration || "3.2s", 
                        unit: "0-60", 
                        color: "text-green-500",
                        bgColor: "bg-green-500/10",
                        icon: Award
                      }
                    ].map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="group/stat text-center">
                          <div className={`relative p-2 rounded-xl ${stat.bgColor} border border-border hover:border-primary/30 transition-all duration-300 group-hover/stat:scale-110`}>
                            <Icon className={`w-4 h-4 ${stat.color} mx-auto mb-1 group-hover/stat:scale-110 transition-transform duration-300`} />
                            <div className={`font-bebas text-lg lg:text-xl mb-1 transition-colors duration-300 group-hover:${stat.color} ${
                              hoveredCar === car.id ? stat.color : 'text-foreground'
                            }`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium tracking-wide">
                              {stat.unit}
                            </div>
                            
                            {/* Hover Glow */}
                            <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover/stat:opacity-50 rounded-xl transition-opacity duration-300`}></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Ultra Enhanced Action Button */}
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection("build")}
                      className="w-full group/btn relative bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 text-foreground hover:text-primary-foreground border-2 border-primary/20 hover:border-primary rounded-2xl py-3 px-6 font-bold text-sm tracking-wider transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 flex items-center justify-center space-x-3 overflow-hidden backdrop-blur-sm"
                      aria-label={`Explore ${car.name} details`}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"></div>
                      
                      <span className="relative z-10">EXPLORE MODEL</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-500" />
                      
                      {/* Multiple Shimmer Effects */}
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1200 delay-200"></div>
                      
                      {/* Pulse Border */}
                      <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl animate-pulse opacity-0 group-hover/btn:opacity-100"></div>
                    </button>
                    
                    {/* Secondary Action */}
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full text-muted-foreground hover:text-primary text-sm font-medium tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Schedule Test Drive</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Complex Hover Glow Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-2xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-20 blur-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra Enhanced Bottom CTA Section */}
        <div className="text-center mt-24">
          <div className="relative inline-flex items-center bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-sm border border-border rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-bebas text-3xl lg:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  CAN'T FIND YOUR PERFECT MATCH?
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
                  Let our automotive specialists help you discover the ideal vehicle tailored to your unique lifestyle and preferences.
                </p>
              </div>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="group/cta bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg tracking-wider transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <span className="relative z-10">CONTACT EXPERT</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover/cta:translate-x-1 group-hover/cta:scale-110 transition-all duration-300" />
                
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}