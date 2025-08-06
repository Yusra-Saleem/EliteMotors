export interface CarModel {
  id: string;
  name: string;
  image: string;
  price: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
  };
  description: string;
}

export interface CustomerTestimonial {
  id: string;
  name: string;
  carModel: string;
  rating: number;
  testimonial: string;
  avatar: string;
}

export interface CarConfiguration {
  model: string;
  color: string;
  interior: string;
  addOns: string[];
  price: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  carModel: string;
  preferredDate: string;
  message?: string;
}

export interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}