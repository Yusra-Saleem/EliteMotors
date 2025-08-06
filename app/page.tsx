"use client"
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import CarModels from '@/components/sections/CarModels';
import CarBuilder from '@/components/sections/CarBuilder';
import WhyChooseUs from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';
import AnalyticsSection from '@/components/sections/analytics-section';
import ExperienceSection from '@/components/sections/experience';
import InnovationShowcase from '@/components/sections/Inovation-showcase';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CarModels />
      <AnalyticsSection/>
      <InnovationShowcase />
      <CarBuilder />
      <ExperienceSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}