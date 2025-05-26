import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "Quiénes somos", href: "#" },
    { label: "Planes", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <header className="w-full h-[72px] bg-lila flex items-center justify-between px-6">
      {/* Logo and brand name */}
      <div className="flex items-center gap-2">
        <img
          className="w-[29px] h-[29px]"
          alt="Flash circle"
          src="https://c.animaapp.com/mb5jsks4IbPDQs/img/flash-circle.svg"
        />
        <div className="[font-family:'Manrope',Helvetica] font-bold text-blanco text-2xl">
          Conecta PRO
        </div>
      </div>

      {/* Navigation menu */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-10">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="font-body-inter-semibold text-blanco font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <Button className="bg-rosa text-blanco w-40 h-10 rounded-md font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
        Empezar ahora
      </Button>
    </header>
  );
};
