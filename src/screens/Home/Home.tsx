import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavigationMenuSection />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <CallToActionSection />
      </main>
      <FooterSection />
    </div>
  );
};
