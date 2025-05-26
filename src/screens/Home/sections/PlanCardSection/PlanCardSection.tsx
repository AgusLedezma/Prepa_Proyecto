import { RepeatIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PlanCardSection = (): JSX.Element => {
  // Features list data for mapping
  const features = [
    "3,000 operaciones Make por mes",
    "500 solicitudes de IA (DeepSeek)",
    "500 mensajes WhatsApp API",
    "1 GB de almacenamiento en Google Drive",
  ];

  return (
    <Card className="flex flex-col items-center gap-[18px] p-6 bg-blanco rounded-md shadow-[4px_4px_4px_#00000040] w-full max-w-[355px] mx-auto">
      <div className="relative w-[50px] h-[50px] bg-purpura rounded-[25px] flex items-center justify-center">
        <RepeatIcon className="w-10 h-10 text-white" />
      </div>

      <CardContent className="flex flex-col items-center gap-[18px] p-0 w-full">
        <h3 className="font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-lila text-[length:var(--h3-inter-semibold-font-size)] text-center tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
          Plan Estándar de Automatización
        </h3>

        <p className="font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-purpura text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
          Automatización simple y potente para empresas en crecimiento.
        </p>

        <h2 className="font-h1-manrope-bold font-[number:var(--h1-manrope-bold-font-weight)] text-rosa text-[length:var(--h1-manrope-bold-font-size)] text-center tracking-[var(--h1-manrope-bold-letter-spacing)] leading-[var(--h1-manrope-bold-line-height)] [font-style:var(--h1-manrope-bold-font-style)]">
          7000
        </h2>

        <h4 className="font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-purpura text-[length:var(--h3-inter-semibold-font-size)] text-center tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
          Bs / mes
        </h4>

        <div className="w-full font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-gris text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-1">√</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button className="w-40 h-10 bg-lila hover:bg-lila/90 text-blanco rounded-md font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
          Elegir este plan
        </Button>
      </CardContent>
    </Card>
  );
};
