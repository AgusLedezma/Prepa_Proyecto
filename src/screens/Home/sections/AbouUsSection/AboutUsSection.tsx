import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for mission and vision sections
  const aboutData = [
    {
      title: "Misión",
      description:
        "From automating processes to managing intelligent AI agents, Make's visual platform gives you the power to speed innovation.",
      position: "left",
    },
    {
      title: "Visión",
      description:
        "From automating processes to managing intelligent AI agents, Make's visual platform gives you the power to speed innovation.",
      position: "right",
    },
  ];

  return (
    <section className="w-full py-10 bg-[#fdfdfd] border-[0.2px] border-solid border-purpura">
      <div className="container mx-auto max-w-[1122px]">
        <h2 className="w-full mb-10 font-h2-manrope-semibold font-[number:var(--h2-manrope-semibold-font-weight)] text-rosa text-[length:var(--h2-manrope-semibold-font-size)] text-center tracking-[var(--h2-manrope-semibold-letter-spacing)] leading-[var(--h2-manrope-semibold-line-height)] [font-style:var(--h2-manrope-semibold-font-style)]">
          Quiénes somos
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 space-y-8">
            {aboutData.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent
                  className={`p-0 ${item.position === "right" ? "ml-auto text-right" : ""}`}
                >
                  <h3 className="mb-4 font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-lila text-[length:var(--h3-inter-semibold-font-size)] tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
                    {item.title}
                  </h3>
                  <p className="max-w-[251px] font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-gris text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex-1 flex justify-end">
            <img
              className="w-full max-w-[402px] h-auto"
              alt="Diseño sin título"
              src="https://c.animaapp.com/mb5jsks4IbPDQs/img/dise-o-sin-t-tulo--2--1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
