"use client"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Star, User } from "lucide-react";
import { Testimonial } from "@/shared/schema";


export default function Testimonials() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="testimonial-card animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-32"></div>
                    <div className="h-3 bg-muted rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-muted rounded"></div>
                  ))}
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
      id="reviews"
      className="py-16 sm:py-20 md:py-24 bg-background"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="reviews-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            CLIENT <span className="text-primary">TESTIMONIALS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients who've experienced the Elite Motors
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group animate-fade-in"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4"
                  aria-hidden="true"
                >
                  <User className="text-muted-foreground text-xl" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.carModel} Owner
                  </p>
                </div>
              </div>
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex text-primary" aria-label={`${testimonial.rating} star rating`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
