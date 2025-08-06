"use client"
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema, type InsertAppointment } from "../../shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      carModel: undefined,
      preferredDate: undefined,
      message: undefined,
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Scheduled",
        description: "Thank you for your interest! We will contact you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to schedule appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertAppointment) => {
    appointmentMutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="contact-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            VISIT OUR <span className="text-primary">SHOWROOM</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your personalized consultation and experience our vehicles
            firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-card backdrop-blur-sm border border-border p-2 sm:p-8 rounded-lg w-full">
            <h3 className="font-bebas text-2xl text-foreground mb-6">
              BOOK YOUR APPOINTMENT
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full px-0"
                aria-label="Appointment booking form"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                          placeholder="Enter your full name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                          placeholder="(555) 123-4567"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="carModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Interested Model
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                        <FormControl>
                          <SelectTrigger className="bg-muted border-border text-foreground focus:ring-primary focus:border-primary">
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="elite-s7">Elite S7</SelectItem>
                          <SelectItem value="elite-gt-e">Elite GT-E</SelectItem>
                          <SelectItem value="elite-xuv">Elite XUV</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Preferred Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          value={field.value || ""}
                          className="bg-muted border-border text-foreground focus:ring-primary focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Additional Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          value={field.value || ""}
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                          placeholder="Tell us about your preferences or any specific requirements..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={appointmentMutation.isPending}
                  className="w-full flex items-center justify-center btn-primary py-4 font-semibold text-base sm:text-lg animate-pulse-red hover:animate-none mt-4"
                  aria-label="Submit appointment request"
                >
                  {appointmentMutation.isPending
                    ? "SCHEDULING..."
                    : "SCHEDULE APPOINTMENT"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Location & Map */}
          <div className="space-y-6">
            <div className="bg-card backdrop-blur-sm border border-border p-6 sm:p-8 rounded-lg">
              <h3 className="font-bebas text-2xl text-foreground mb-6">
                SHOWROOM LOCATION
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Elite Motors Beverly Hills
                    </p>
                    <p>
                      9595 Wilshire Boulevard
                      <br />
                      Beverly Hills, CA 90212
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                  <p>(310) 555-ELITE</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                  <p>info@elitemotors.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p>
                      Mon-Fri: 9:00 AM - 8:00 PM
                      <br />
                      Sat-Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative bg-muted rounded-lg h-64 flex items-center justify-center border border-border overflow-hidden">
              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/70 via-red-900/40 to-transparent z-10" />
              <iframe
                title="Showroom Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.994241379498!2d-118.40133968478298!3d34.06750918060309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2beb1b8b6e7e1%3A0x7b7b7b7b7b7b7b7b!2sBeverly%20Hills%2C%20CA%2090212!5e0!3m2!1sen!2sus!4v1688490000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "16rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
