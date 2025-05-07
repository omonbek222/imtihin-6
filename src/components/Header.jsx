import React, { useState } from "react";
import { MapPin, Handshake, Briefcase, ChevronDown, Phone, ShoppingCart, Globe, ThumbsUp } from "lucide-react";

const NavTop = () => {
  const [language, setLanguage] = useState("ru"); 
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); 

  const texts = {
    ru: {
      city: "Город:",
      sellOnZon: "Продавайте на Zon.uz",
      buyAsLegalEntity: "Покупать как юрлицо",
      help: "Помощь",
      phone: "+998-95 020-93-50",
    },
    uz: {
      city: "Shahar:",
      sellOnZon: "Zon.uzda soting",
      buyAsLegalEntity: "Yuridik shaxs sifatida sotib olish",
      help: "Yordam",
      phone: "+998-95 020-93-50",
    },
    en: {
      city: "City:",
      sellOnZon: "Sell on Zon.uz",
      buyAsLegalEntity: "Buy as a legal entity",
      help: "Help",
      phone: "+998-95 020-93-50",
    },
  };

  return (
    <div className="w-full text-[#333] text-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 py-2">
        {/* Left section */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 hidden sm:inline">{texts[language].city}</span>
            <span className="font-medium hover:text-red-500 transition underline">
              Ташкент
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
            <Handshake className="w-4 h-4 text-gray-600" />
            <span className="font-medium hidden sm:inline">
              {texts[language].sellOnZon}
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
            <Briefcase className="w-4 h-4 text-gray-600" />
            <span className="hidden sm:inline">{texts[language].buyAsLegalEntity}</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
            <span className="hidden sm:inline">{texts[language].help}</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        <div className="flex items-center gap-6 text-[#333] mt-2 sm:mt-0">
          <div className="relative flex items-center gap-4">
            <div className="cursor-pointer" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
              <Globe className="w-4 h-4 text-gray-600" />
            </div>

            {isLangMenuOpen && (
              <div className="absolute top-8 left-0 bg-white border border-gray-300 rounded-md shadow-lg p-2 flex flex-col gap-1 z-10">
                <button onClick={() => { setLanguage("ru"); setIsLangMenuOpen(false); }} className="text-sm text-blue-500 hover:text-blue-700">
                  RU
                </button>
                <button onClick={() => { setLanguage("uz"); setIsLangMenuOpen(false); }} className="text-sm text-blue-500 hover:text-blue-700">
                  UZ
                </button>
                <button onClick={() => { setLanguage("en"); setIsLangMenuOpen(false); }} className="text-sm text-blue-500 hover:text-blue-700">
                  EN
                </button>
              </div>
            )}
            <div className="cursor-pointer">
              <ThumbsUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-sm sm:text-base whitespace-nowrap hover:text-red-500 transition">
              {texts[language].phone}
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-sm sm:text-base">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
