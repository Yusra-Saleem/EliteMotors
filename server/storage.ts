import { 
  type User, 
  type InsertUser, 
  type CarModel, 
  type InsertCarModel,
  type Testimonial,
  type InsertTestimonial,
  type Appointment,
  type InsertAppointment,
  type Configuration,
  type InsertConfiguration
} from "../shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCarModels(): Promise<CarModel[]>;
  getCarModel(id: string): Promise<CarModel | undefined>;
  createCarModel(carModel: InsertCarModel): Promise<CarModel>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  
  createConfiguration(config: InsertConfiguration): Promise<Configuration>;
  getConfiguration(id: string): Promise<Configuration | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private carModels: Map<string, CarModel>;
  private testimonials: Map<string, Testimonial>;
  private appointments: Map<string, Appointment>;
  private configurations: Map<string, Configuration>;

  constructor() {
    this.users = new Map();
    this.carModels = new Map();
    this.testimonials = new Map();
    this.appointments = new Map();
    this.configurations = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed car models
    const models: CarModel[] = [
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

    models.forEach(model => this.carModels.set(model.id, model));

    // Seed testimonials
    const testimonialData: Testimonial[] = [
      {
        id: "1",
        name: "Michael Rodriguez",
        carModel: "Elite GT-E",
        quote: "The buying experience was flawless. From the moment I walked in, I knew I was dealing with true professionals. My Elite GT-E is absolutely perfect.",
        rating: 5
      },
      {
        id: "2",
        name: "Sarah Chen",
        carModel: "Elite S7",
        quote: "Elite Motors didn't just sell me a car, they provided an experience. The attention to detail and customer service is unmatched in the industry.",
        rating: 5
      },
      {
        id: "3",
        name: "David Thompson",
        carModel: "Elite XUV",
        quote: "I've purchased luxury vehicles from many dealers, but Elite Motors sets the gold standard. Their post-sale support is exceptional.",
        rating: 5
      },
      {
        id: "4",
        name: "Jennifer Park",
        carModel: "Elite GT-E",
        quote: "The custom configuration process was seamless, and the final result exceeded all my expectations. This is automotive excellence at its finest.",
        rating: 5
      }
    ];

    testimonialData.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCarModels(): Promise<CarModel[]> {
    return Array.from(this.carModels.values());
  }

  async getCarModel(id: string): Promise<CarModel | undefined> {
    return this.carModels.get(id);
  }

  async createCarModel(insertCarModel: InsertCarModel): Promise<CarModel> {
    const id = randomUUID();
    const carModel: CarModel = { ...insertCarModel, id };
    this.carModels.set(id, carModel);
    return carModel;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id, rating: insertTestimonial.rating || 5 };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      status: "pending",
      createdAt: new Date().toISOString(),
      carModel: insertAppointment.carModel || null,
      preferredDate: insertAppointment.preferredDate || null,
      message: insertAppointment.message || null,
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async createConfiguration(insertConfiguration: InsertConfiguration): Promise<Configuration> {
    const id = randomUUID();
    const configuration: Configuration = {
      ...insertConfiguration,
      id,
      createdAt: new Date().toISOString(),
      customerEmail: insertConfiguration.customerEmail || null,
    };
    this.configurations.set(id, configuration);
    return configuration;
  }

  async getConfiguration(id: string): Promise<Configuration | undefined> {
    return this.configurations.get(id);
  }
}

export const storage = new MemStorage();
