import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative w-full max-w-[316px] h-[387px]">
          <img
            className="w-full h-full object-contain"
            alt="Diseño sin título"
            src="https://c.animaapp.com/mb5jsks4IbPDQs/img/dise-o-sin-t-tulo--5--1.png"
          />
        </div>

        <div className="flex flex-col items-start gap-12 max-w-[513px]">
          <h2 className="font-h1-manrope-bold text-lila-suave text-[48px] leading-[normal] tracking-[0px]">
            ¿Listo para dejar el trabajo repetitivo atrás?
          </h2>

          <Button className="bg-purpura hover:bg-purpura/90 text-blanco font-body-inter-semibold text-[16px] h-10 px-6 rounded-md">
            Automatizá ahora
          </Button>
        </div>
      </div>
    </section>
  );
};
