"use client"
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CarModel, InsertConfiguration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { colorOptions, interiorOptions, performanceOptions } from "@/data/cars";

interface ConfigurationState {
  selectedModel: CarModel | null;
  selectedColor: string;
  selectedOptions: string[];
}

export default function CarConfigurator() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(1);
  const [configuration, setConfiguration] = useState<ConfigurationState>({
    selectedModel: null,
    selectedColor: "",
    selectedOptions: [],
  });

  const { data: cars = [] } = useQuery<CarModel[]>({
    queryKey: ["/api/cars"],
  });

  const saveConfigMutation = useMutation({
    mutationFn: async (config: InsertConfiguration) => {
      const response = await apiRequest("POST", "/api/configurations", config);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Configuration Saved",
        description: "Your car configuration has been saved successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/configurations"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save configuration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const maxSteps = 4;

  const updateStepIndicator = (step: number) => {
    return step;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !configuration.selectedModel) {
      toast({
        title: "Selection Required",
        description: "Please select a model to continue.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 2 && !configuration.selectedColor) {
      toast({
        title: "Selection Required", 
        description: "Please select a color to continue.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleModelSelection = (model: CarModel) => {
    setConfiguration({ ...configuration, selectedModel: model });
  };

  const handleColorSelection = (color: string) => {
    setConfiguration({ ...configuration, selectedColor: color });
  };

  const handleOptionToggle = (optionId: string) => {
    const newOptions = configuration.selectedOptions.includes(optionId)
      ? configuration.selectedOptions.filter((id) => id !== optionId)
      : [...configuration.selectedOptions, optionId];
    setConfiguration({ ...configuration, selectedOptions: newOptions });
  };

  const calculateTotalPrice = () => {
    if (!configuration.selectedModel) return 0;
    
    const basePrice = parseFloat(configuration.selectedModel.basePrice);
    const optionsPrice = configuration.selectedOptions.reduce((total, optionId) => {
      const option = [...interiorOptions, ...performanceOptions].find(
        (opt) => opt.id === optionId
      );
      return total + (option?.price || 0);
    }, 0);
    
    return basePrice + optionsPrice;
  };

  const handleSaveConfiguration = () => {
    if (!configuration.selectedModel) return;

    const configData: InsertConfiguration = {
      modelId: configuration.selectedModel.id,
      color: configuration.selectedColor,
      options: JSON.stringify(configuration.selectedOptions),
      totalPrice: calculateTotalPrice().toFixed(2),
      customerEmail: "", // Would be filled in a real app
    };

    saveConfigMutation.mutate(configData);
  };

  return (
    <section
      id="build"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted"
      aria-labelledby="build-heading"
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            id="build-heading"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            BUILD YOUR <span className="text-primary">DREAM</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Configure your perfect vehicle with our interactive builder. Every
            detail crafted to your specifications.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            {[
              { step: 1, label: "Model" },
              { step: 2, label: "Color" },
              { step: 3, label: "Options" },
              { step: 4, label: "Summary" },
            ].map(({ step, label }, index) => (
              <div key={step} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold ${
                      step <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                    aria-label={`Step ${step}`}
                  >
                    {step}
                  </div>
                  <span
                    className={`ml-2 text-sm sm:text-base ${
                      step <= currentStep ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {index < 3 && (
                  <div className="h-px w-8 sm:w-12 bg-border ml-4 sm:ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          {/* Step 1: Select Model */}
          {currentStep === 1 && (
            <div className="configurator-step">
              <h3 className="font-bebas text-2xl sm:text-3xl text-foreground text-center mb-8">
                SELECT YOUR MODEL
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={`cursor-pointer border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                      configuration.selectedModel?.id === car.id
                        ? "border-primary"
                        : "border-border hover:border-primary"
                    }`}
                    onClick={() => handleModelSelection(car)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleModelSelection(car);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${car.name} model`}
                  >
                    <img
                      src={car.image}
                      alt={`${car.name} model for configuration`}
                    className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4 bg-card hover:bg-muted transition-colors duration-300">
                      <h4 className="font-bebas text-xl text-foreground">
                        {car.name.toUpperCase()}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Starting at ${parseInt(car.basePrice).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Choose Color */}
          {currentStep === 2 && (
            <div className="configurator-step">
              <h3 className="font-bebas text-2xl sm:text-3xl text-foreground text-center mb-8">
                CHOOSE YOUR COLOR
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                {colorOptions.map((color) => (
                  <div
                    key={color.value}
                    className={`cursor-pointer w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 transition-all duration-300 ${
                      configuration.selectedColor === color.value
                        ? "border-primary"
                        : "border-border hover:border-primary"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorSelection(color.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleColorSelection(color.value);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${color.name} color`}
                  ></div>
                ))}
              </div>
              {configuration.selectedModel && (
                <div className="text-center">
                  <img
                    src={configuration.selectedModel.image}
                    alt={`Live preview of ${configuration.selectedModel.name} in ${configuration.selectedColor} color`}
                    className="mx-auto w-full max-w-xs sm:max-w-md h-40 sm:h-64 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 3: Interior and Add-ons */}
          {currentStep === 3 && (
            <div className="configurator-step">
              <h3 className="font-bebas text-2xl sm:text-3xl text-foreground text-center mb-8">
                INTERIOR & OPTIONS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl md:max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bebas text-xl text-foreground mb-4">
                    INTERIOR
                  </h4>
                  <div className="space-y-4">
                    {interiorOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-3"
                      >
                        <Checkbox
                          id={option.id}
                          checked={configuration.selectedOptions.includes(
                            option.id
                          )}
                          onCheckedChange={() => handleOptionToggle(option.id)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={option.id}
                          className="text-foreground cursor-pointer"
                        >
                          {option.name} (+${option.price.toLocaleString()})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-foreground mb-4">
                    PERFORMANCE
                  </h4>
                  <div className="space-y-4">
                    {performanceOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-3"
                      >
                        <Checkbox
                          id={option.id}
                          checked={configuration.selectedOptions.includes(
                            option.id
                          )}
                          onCheckedChange={() => handleOptionToggle(option.id)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={option.id}
                          className="text-foreground cursor-pointer"
                        >
                          {option.name} (+${option.price.toLocaleString()})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {currentStep === 4 && (
            <div className="configurator-step">
              <h3 className="font-bebas text-2xl sm:text-3xl text-foreground text-center mb-8">
                YOUR CONFIGURATION
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-2xl lg:max-w-4xl mx-auto">
                <div>
                  {configuration.selectedModel && (
                    <img
                      src={configuration.selectedModel.image}
                      alt="Your final configured vehicle"
                    className="w-full h-40 sm:h-80 object-cover rounded-lg"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="bg-card p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bebas text-xl text-foreground mb-4">
                    CONFIGURATION SUMMARY
                  </h4>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Model:</span>
                      <span className="text-foreground">
                        {configuration.selectedModel?.name || ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Color:</span>
                      <span className="text-foreground">
                        {colorOptions.find(
                          (c) => c.value === configuration.selectedColor
                        )?.name || ""}
                      </span>
                    </div>
                    <div className="border-t border-border pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-foreground">
                        <span>Total Price:</span>
                        <span className="text-primary">
                          ${calculateTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleSaveConfiguration}
                    disabled={saveConfigMutation.isPending}
                    className="w-full mt-6 btn-primary py-3 font-semibold"
                    aria-label="Save your configuration"
                  >
                    {saveConfigMutation.isPending
                      ? "SAVING..."
                      : "SAVE CONFIGURATION"}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-12">
            {currentStep > 1 && (
              <Button
                onClick={handlePreviousStep}
                variant="outline"
                className="btn-secondary px-6 py-3 w-full sm:w-auto"
                aria-label="Go to previous step"
              >
                PREVIOUS
              </Button>
            )}
            {currentStep < maxSteps && (
              <Button
                onClick={handleNextStep}
                className="btn-primary px-6 py-3 w-full sm:w-auto"
                aria-label="Go to next step"
              >
                NEXT
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
