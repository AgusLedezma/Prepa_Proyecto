import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Quiénes somos" },
    { title: "Servicios" },
    { title: "Precios" },
    { title: "Blog" },
    { title: "Contacto" },
  ];

  // Social media links data
  const socialLinks = [
    {
      title: "Instagram",
      icon: <InstagramIcon className="w-[30px] h-[30px]" />,
    },
    { title: "Facebook", icon: <FacebookIcon className="w-[30px] h-[30px]" /> },
    {
      title: "WhatsApp",
      icon: <MessageCircleIcon className="w-[30px] h-[30px]" />,
    },
    { title: "Email", icon: <MailIcon className="w-[30px] h-[30px]" /> },
  ];

  return (
    <footer className="w-full py-12 bg-lila">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo section */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            className="w-[276px] h-auto object-cover"
            alt="Logo"
            src="https://c.animaapp.com/mb5jsks4IbPDQs/img/image-2.png"
          />
        </div>

        {/* Brand name with icon */}
        <div className="flex items-center mb-6 md:mb-0">
          <ZapIcon className="w-[29px] h-[29px] text-white" />
          <h2 className="ml-2 font-['Manrope',Helvetica] font-bold text-white text-2xl">
            Conecta PRO
          </h2>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col items-start gap-3 mb-6 md:mb-0">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-caption-inter-light text-white hover:text-gray-200 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Social media links */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href="#"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {social.icon}
                </a>
                <span className="mt-1 font-caption-inter-light text-white">
                  {social.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
