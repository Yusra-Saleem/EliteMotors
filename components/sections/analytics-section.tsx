"use client"
  
import React, { useEffect, useState } from "react";
import { TrendingUp, Users, Star, Award } from "lucide-react";

const analyticsData = [
  {
    icon: TrendingUp,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Based on 5,000+ reviews",
    trend: "+12% this quarter"
  },
  {
    icon: Users,
    value: "15K+",
    label: "Elite Owners",
    description: "Exclusive community worldwide",
    trend: "+2,400 this year"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Industry-leading scores",
    trend: "Consistently high"
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards Won",
    description: "International recognition",
    trend: "6 new this year"
  }
];

export default function AnalyticsSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          const targets = [98, 15000, 4.9, 25];
          targets.forEach((target, index) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = current;
                return newCounters;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('analytics-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const formatValue = (value: number, originalValue: string) => {
    if (originalValue.includes('%')) return `${Math.round(value)}%`;
    if (originalValue.includes('K+')) return `${Math.round(value / 1000)}K+`;
    if (originalValue.includes('.')) return value.toFixed(1);
    return Math.round(value).toString();
  };

  return (
    <section
      id="analytics-section"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-background via-muted to-background"
      aria-labelledby="analytics-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="analytics-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            PROVEN <span className="text-primary">EXCELLENCE</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real metrics that showcase our commitment to automotive perfection and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {analyticsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-center hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="mb-2">
                      <span className="text-3xl sm:text-4xl font-bebas text-foreground block leading-none">
                        {isVisible ? formatValue(counters[index], item.value) : "0"}
                      </span>
                    </div>
                    <h3 className="font-bebas text-lg sm:text-xl text-foreground mb-2">
                      {item.label.toUpperCase()}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <TrendingUp className="w-3 h-3 text-primary mr-1" />
                      <span className="text-xs text-primary font-medium">
                        {item.trend}
                      </span>
                    </div>
                  </div>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}