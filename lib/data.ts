import { CarModel, CustomerTestimonial, FeatureCard } from '@/types';

export const carModels: CarModel[] = [
  {
    id: '1',
    name: 'Elite Phantom',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 'From $189,900',
    specs: {
      engine: '6.0L V12 Twin Turbo',
      power: '563 HP',
      acceleration: '0-60 mph in 4.4s'
    },
    description: 'The pinnacle of luxury and performance, crafted for those who demand excellence.'
  },
  {
    id: '2',
    name: 'Elite Thunder',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 'From $145,500',
    specs: {
      engine: '4.0L V8 Biturbo',
      power: '630 HP',
      acceleration: '0-60 mph in 3.2s'
    },
    description: 'Pure adrenaline meets sophisticated design in this masterpiece of engineering.'
  },
  {
    id: '3',
    name: 'Elite Aurora',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 'From $98,750',
    specs: {
      engine: '3.0L V6 Turbo',
      power: '402 HP',
      acceleration: '0-60 mph in 4.8s'
    },
    description: 'Elegant performance that redefines the luxury driving experience.'
  }
];

export const testimonials: CustomerTestimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    carModel: 'Elite Phantom',
    rating: 5,
    testimonial: 'Absolutely exceptional service and the most beautiful car I\'ve ever owned. The attention to detail is remarkable.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: '2',
    name: 'Michael Chen',
    carModel: 'Elite Thunder',
    rating: 5,
    testimonial: 'The performance is mind-blowing and the luxury features exceed all expectations. Truly a masterpiece.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    carModel: 'Elite Aurora',
    rating: 5,
    testimonial: 'Perfect blend of elegance and performance. The team at Elite Motors made the entire process seamless.',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: '4',
    name: 'David Thompson',
    carModel: 'Elite Phantom',
    rating: 5,
    testimonial: 'Outstanding craftsmanship and unparalleled luxury. Every drive is an extraordinary experience.',
    avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  }
];

export const carColors = [
  { name: 'Midnight Black', value: '#0A0A0A', hex: '#0A0A0A' },
  { name: 'Pearl White', value: '#F8F8FF', hex: '#F8F8FF' },
  { name: 'Racing Red', value: '#E50914', hex: '#E50914' },
  { name: 'Silver Metallic', value: '#C0C0C0', hex: '#C0C0C0' },
  { name: 'Deep Blue', value: '#1e3a8a', hex: '#1e3a8a' },
  { name: 'Champagne Gold', value: '#D4AF37', hex: '#D4AF37' }
];

export const interiorOptions = [
  { name: 'Premium Leather - Black', value: 'black-leather', price: 0 },
  { name: 'Premium Leather - Cognac', value: 'cognac-leather', price: 2500 },
  { name: 'Alcantara Sport', value: 'alcantara', price: 3500 },
  { name: 'Carbon Fiber Trim', value: 'carbon-fiber', price: 5000 }
];

export const addOnOptions = [
  { name: 'Premium Sound System', value: 'premium-sound', price: 4500 },
  { name: 'Panoramic Sunroof', value: 'sunroof', price: 2800 },
  { name: 'Advanced Driver Assistance', value: 'driver-assist', price: 3200 },
  { name: 'Custom Wheel Package', value: 'custom-wheels', price: 6500 },
  { name: 'Heated & Cooled Seats', value: 'climate-seats', price: 1800 }
];