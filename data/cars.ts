import { CarModel } from "../shared/schema";

export const carModels: CarModel[] = [
  {
    id: "elite-s7",
    name: "Elite S7",
    type: "Luxury Sedan",
    horsepower: 650,
    topSpeed: 205,
    basePrice: "165000.00",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "The pinnacle of luxury sedan engineering, combining raw power with refined elegance."
  },
  {
    id: "elite-gt-e",
    name: "Elite GT-E",
    type: "Electric GT",
    horsepower: 780,
    topSpeed: 225,
    basePrice: "225000.00",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Revolutionary electric performance that redefines what's possible in sustainable luxury."
  },
  {
    id: "elite-xuv",
    name: "Elite XUV",
    type: "Performance SUV", 
    horsepower: 580,
    topSpeed: 180,
    basePrice: "185000.00",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Uncompromising performance meets versatility in our flagship luxury SUV."
  }
];

export const colorOptions = [
  { name: "Jet Black", value: "black", hex: "#0A0A0A" },
  { name: "Ice Silver", value: "silver", hex: "#E5E5E5" },
  { name: "Flame Red", value: "red", hex: "#E50914" },
  { name: "Arctic White", value: "white", hex: "#FFFFFF" },
  { name: "Midnight Blue", value: "blue", hex: "#1e3a8a" },
];

export const interiorOptions = [
  { name: "Premium Leather Seats", price: 3500, id: "premium-leather" },
  { name: "Carbon Fiber Trim", price: 2800, id: "carbon-fiber" },
  { name: "Heated & Ventilated Seats", price: 1200, id: "heated-seats" },
];

export const performanceOptions = [
  { name: "Sport Package", price: 8500, id: "sport-package" },
  { name: "Ceramic Brakes", price: 6200, id: "ceramic-brakes" },
  { name: "Adaptive Suspension", price: 4500, id: "adaptive-suspension" },
];
