"use client"
import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Zap, Award, Users, TrendingUp } from "lucide-react";

const heroStats = [
	{ icon: Zap, value: "1,020", label: "HORSEPOWER", color: "text-yellow-500" },
	{ icon: TrendingUp, value: "2.8s", label: "0-60 MPH", color: "text-green-500" },
	{ icon: Award, value: "25+", label: "AWARDS", color: "text-blue-500" },
	{ icon: Users, value: "15K+", label: "OWNERS", color: "text-purple-500" }
];

const heroSlides = [
	{
		image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qk1XfGVufDB8fDB8fHww",
		title: "UNLEASH PERFORMANCE",
		subtitle: "Experience the pinnacle of automotive excellence",
		accent: "PERFORMANCE"
	},
	{
		image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJNVyUyMENhcnxlbnwwfHwwfHx8MA%3D%3D",
		title: "LUXURY REDEFINED",
		subtitle: "Where innovation meets uncompromising elegance",
		accent: "LUXURY"
	},
	{
		image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
		title: "ELECTRIC FUTURE",
		subtitle: "Zero emissions, infinite possibilities",
		accent: "FUTURE"
	}
];

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background pt-16 sm:pt-0 "
			aria-labelledby="hero-heading"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,9,20,0.15),transparent_50%)]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(229,9,20,0.1),transparent_50%)]"></div>
				<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(229,9,20,0.03)_50%,transparent_75%)]"></div>

				{/* Animated Elements */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-20 w-40 h-40 border-4 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
					<div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse"></div>
					<div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
				</div>

				{/* Grid Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute inset-0 bg-[linear-gradient(rgba(229,9,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(229,9,20,0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
				</div>
			</div>

			{/* Modern Angular Geometric Shape */}
			<div className="absolute top-0 right-0 w-full h-full overflow-hidden">
				<div className="absolute -top-32 -right-32 w-[900px] h-[900px] lg:w-[1100px] lg:h-[1100px]">
					{/* Main Angular Shape */}
					<div className="absolute inset-0 transform rotate-12">
						<div className="relative w-full h-full">
							<div
								className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-400/20 to-slate-600/10 transform -skew-x-12 skew-y-6 animate-pulse"
								style={{
									clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
									animationDuration: '6s'
								}}
							></div>

							<div
								className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-tl from-gray-500/15 to-slate-400/8 transform skew-x-6 -skew-y-3 animate-pulse"
								style={{
									clipPath: 'polygon(0% 20%, 80% 0%, 100% 80%, 20% 100%)',
									animationDuration: '8s',
									animationDelay: '2s'
								}}
							></div>

							<div
								className="absolute top-60 right-48 w-64 h-64 bg-gradient-to-bl from-slate-300/20 to-gray-600/5 transform -skew-x-6 skew-y-12 animate-pulse"
								style={{
									clipPath: 'polygon(30% 0%, 100% 30%, 70% 100%, 0% 70%)',
									animationDuration: '10s',
									animationDelay: '1s'
								}}
							></div>
						</div>
					</div>

					{/* Secondary Accent Shapes */}
					<div className="absolute top-0 right-0 w-full h-full transform -rotate-6">
						<div
							className="absolute top-32 right-16 w-48 h-48 bg-gradient-to-r from-slate-500/10 to-transparent transform rotate-45 animate-pulse"
							style={{
								clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
								animationDuration: '12s'
							}}
						></div>

						<div
							className="absolute top-80 right-8 w-32 h-32 bg-gradient-to-l from-gray-400/15 to-transparent transform -rotate-12 animate-pulse"
							style={{
								clipPath: 'polygon(0% 0%, 100% 25%, 75% 100%, 0% 75%)',
								animationDuration: '7s',
								animationDelay: '3s'
							}}
						></div>
					</div>

					{/* Thin Line Accents */}
					<div className="absolute top-0 right-0 w-full h-full">
						<div className="absolute top-24 right-24 w-72 h-0.5 bg-gradient-to-r from-slate-400/30 to-transparent transform rotate-12 animate-pulse"></div>
						<div className="absolute top-48 right-20 w-96 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '4s' }}></div>
						<div className="absolute top-72 right-16 w-48 h-0.5 bg-gradient-to-l from-slate-300/25 to-transparent transform rotate-24 animate-pulse" style={{ animationDelay: '2s' }}></div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen py-4 sm:py-12 lg:py-0">

					{/* Left Content */}
					<div className="text-center lg:text-left space-y-6 sm:space-y-8 relative order-2 lg:order-1">

						{/* Premium Badge */}
						<div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-full px-6 py-3 backdrop-blur-sm">
								<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
								<span className="text-xs font-bold text-primary tracking-widest">ULTRA PREMIUM COLLECTION</span>
								<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
							</div>
						</div>



						{/* Main Heading */}
						<div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className="relative">
								<h1
									id="hero-heading"
									className="relative z-10 font-bebas leading-none tracking-tight"
								>
									<div className="relative mb-2 sm:mb-3">
										<span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light tracking-widest">
											ELITE MOTORS
										</span>
									</div>

									<div className="relative group cursor-pointer">
										<span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-black relative transform transition-all duration-500 group-hover:scale-105">
											{heroSlides[currentSlide].accent}

											{/* Underline Effects */}
											<div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 lg:h-3 bg-gradient-to-r from-primary to-primary/70 transform transition-all duration-500"></div>
											<div className="absolute bottom-0.5 sm:bottom-1 left-1 sm:left-2 w-[95%] h-0.5 sm:h-1 lg:h-2 bg-gradient-to-r from-primary/60 to-primary/40 transform transition-all duration-700"></div>
										</span>
									</div>

									<div className="relative mt-2 sm:mt-3">
										<span className="block text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium tracking-widest">
											COLLECTION
										</span>
									</div>
								</h1>
							</div>

							{/* Subtitle */}
							<div className="relative">
								<p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4">
									{heroSlides[currentSlide].subtitle}
								</p>
								<div className="flex items-center justify-center lg:justify-start space-x-3">
									<div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
									<p className="text-base lg:text-lg text-primary font-bold tracking-wide">
										Drive the extraordinary. Define the future.
									</p>
								</div>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<button
								onClick={() => scrollToSection("models")}
								className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center space-x-3"
								aria-label="Explore our car models"
							>
								<span className="relative z-10">EXPLORE MODELS</span>
								<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />

								{/* Shimmer Effect */}
								<div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							</button>

							<button
								onClick={() => scrollToSection("build")}
								className="group relative border-2 border-border hover:border-primary bg-card/60 hover:bg-card text-foreground hover:text-primary px-10 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 backdrop-blur-sm"
								aria-label="Configure your dream car"
							>
								<div className="relative">
									<Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
								</div>
								<span className="relative z-10">BUILD YOURS</span>
							</button>
						</div>

						{/* Info Strip */}
						<div className={`flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							{[
								{ color: "bg-green-500", text: "Live Virtual Tours" },
								{ color: "bg-blue-500", text: "AR Configuration" },
								{ color: "bg-purple-500", text: "Expert Concierge" },
								{ color: "bg-yellow-500", text: "Global Delivery" }
							].map((item) => (
								<div key={item.text} className="flex items-center space-x-2 group cursor-pointer">
									<div className={`w-3 h-3 ${item.color} rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300`}></div>
									<span className="group-hover:text-foreground transition-colors duration-300 font-medium">{item.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* Right Content - Car Display */}
					<div className="relative order-1 lg:order-2">
					<div className="relative w-full max-w-[90vw] sm:max-w-md lg:max-w-lg mx-auto overflow-visible">

							{/* Main Circular Container */}
							<div className="relative w-full aspect-square max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-[450px] mx-auto overflow-visible">

								{/* Rotating Rings */}
								<div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
								<div className="absolute inset-4 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>

								{/* Central Image */}
								<div className="absolute inset-8 rounded-full overflow-hidden group shadow-2xl">
									<img
										src={heroSlides[currentSlide].image}
										alt={`${heroSlides[currentSlide].title} - Luxury automotive excellence`}
										className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
										loading="eager"
									/>
									<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>

								{/* Floating Stats */}
								<div className="absolute top-2 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">1,020</div>
										<div className="text-xs text-muted-foreground font-bold">HP</div>
									</div>
								</div>

								<div className="absolute top-10 sm:top-16 right-2 sm:-right-8 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">2.8s</div>
										<div className="text-xs text-muted-foreground font-bold">0-60</div>
									</div>
								</div>

								<div className="absolute bottom-10 sm:bottom-16 right-2 sm:-right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">200</div>
										<div className="text-xs text-muted-foreground font-bold">MPH</div>
									</div>
								</div>

								<div className="absolute bottom-2 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">500mi</div>
										<div className="text-xs text-muted-foreground font-bold">RANGE</div>
									</div>
								</div>

								<div className="absolute bottom-10 sm:bottom-16 left-2 sm:-left-8 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">$299K</div>
										<div className="text-xs text-muted-foreground font-bold">FROM</div>
									</div>
								</div>

								<div className="absolute top-10 sm:top-16 left-2 sm:-left-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="font-bebas text-2xl text-primary">AWD</div>
										<div className="text-xs text-muted-foreground font-bold">DRIVE</div>
									</div>
								</div>
							</div>

							{/* Navigation Dots */}
							<div className="flex justify-center space-x-3 mt-8">
								{heroSlides.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-4 h-4 rounded-full transition-all duration-300 ${
											index === currentSlide 
												? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
												: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
										}`}
										aria-label={`View slide ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			

		</section>
	);
}