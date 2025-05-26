import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Service plan data for mapping
  const servicePlans = [
    {
      id: 1,
      title: "Plan Estándar de Automatización",
      description:
        "Automatizá tareas repetitivas y gestioná chats con IA de forma eficiente. Ideal para empresas en crecimiento que quieren digitalizar sus procesos sin complicaciones.",
      iconSrc: "https://c.animaapp.com/mb5jsks4IbPDQs/img/repeat-circle.svg",
      iconAlt: "Repeat circle",
      iconBgColor: "bg-purpura",
    },
    {
      id: 2,
      title: "Plan Corporativo de Automatización",
      description:
        "Automatización avanzada y escalable, diseñada para grandes equipos. Integraciones personalizadas, respaldo seguro y comunicación masiva vía WhatsApp API.",
      iconSrc: "https://c.animaapp.com/mb5jsks4IbPDQs/img/export.svg",
      iconAlt: "Export",
      iconBgColor: "bg-rosa",
    },
  ];

  return (
    <section className="w-full py-10 bg-blanco flex flex-col items-center">
      <h2 className="font-h2-manrope-semibold text-lila text-[length:var(--h2-manrope-semibold-font-size)] tracking-[var(--h2-manrope-semibold-letter-spacing)] leading-[var(--h2-manrope-semibold-line-height)] [font-style:var(--h2-manrope-semibold-font-style)] mb-10">
        Nuestros planes
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {servicePlans.map((plan) => (
          <Card
            key={plan.id}
            className="w-[332px] shadow-[4px_4px_4px_#00000080] rounded-md border-none"
          >
            <CardContent className="flex flex-wrap items-start justify-end gap-[2px_8px] p-3">
              <div
                className={`relative w-10 h-10 ${plan.iconBgColor} rounded-[20px]`}
              >
                <img
                  className="absolute w-8 h-8 top-1 left-1"
                  alt={plan.iconAlt}
                  src={plan.iconSrc}
                />
              </div>

              <div className="flex flex-col w-[260px] items-start gap-2">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-lila text-[length:var(--h3-inter-semibold-font-size)] tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
                  {plan.title}
                </h3>

                <p className="relative self-stretch font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-purpura text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                  {plan.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="bg-rosa hover:bg-rosa/90 text-white w-40 h-10 rounded-md font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
        Explorar
      </Button>
    </section>
  );
};
