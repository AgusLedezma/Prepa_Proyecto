import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Define the features as an array for better maintainability
  const features = [
    "Automatización de procesos digitales",
    "Creación de chatbots personalizados",
    "Integraciones con herramientas (Google, WhatsApp, Excel, etc.)",
  ];

  return (
    <section className="relative w-full h-[450px] bg-lila flex">
      {/* Left content container */}
      <div className="flex flex-col justify-between py-10 px-[60px] w-full max-w-[639px]">
        {/* Heading with colored text */}
        <h1 className="font-h1-manrope-bold text-[length:var(--h1-manrope-bold-font-size)] tracking-[var(--h1-manrope-bold-letter-spacing)] leading-[var(--h1-manrope-bold-line-height)] [font-style:var(--h1-manrope-bold-font-style)] font-[number:var(--h1-manrope-bold-font-weight)]">
          <span className="text-[#b76dfb]">Automatizá</span>
          <span className="text-white"> tu trabajo digital con </span>
          <span className="text-[#ff009a]">inteligencia</span>
          <span className="text-white"> artificial.</span>
        </h1>

        {/* Features list */}
        <div className="font-body-inter-semibold text-white text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)] font-[number:var(--body-inter-semibold-font-weight)] mt-auto mb-6">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {feature}
              {index < features.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="bg-rosa hover:bg-rosa/90 text-white w-40 h-10 rounded-md font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)]">
          Empezar ahora
        </Button>
      </div>

      {/* Right side image */}
      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          alt="AI automation illustration"
          src="https://c.animaapp.com/mb5jsks4IbPDQs/img/dise-o-sin-t-tulo-1.svg"
        />
      </div>
    </section>
  );
};
