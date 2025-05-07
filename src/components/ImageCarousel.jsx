import { Button } from "antd";
import { Briefcase } from "lucide-react";
import React from "react";
import doczon from "../assets/doczon.jpg";
import foodee from "../assets/foodee.jpg";

import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [
  "https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp",
  "https://zon.uz/_next/static/media/fubag-desk.8415d125.webp",
  "https://zon.uz/_next/static/media/crown-desk.6b1b7d10.webp",
  "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp",
  "https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp",
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
    onClick={onClick}
  >
    &#8592;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
    onClick={onClick}
  >
    &#8594;
  </button>
);

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto my-4 px-2">
      <div className="relative rounded overflow-hidden mb-6">
        <SliderSlick {...settings}>
          {bannerImages.map((src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt={`banner-${idx}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded"
              />
            </div>
          ))}
        </SliderSlick>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 w-full h-[200px] flex flex-col py-5 px-4 rounded text-center justify-center items-center hover:bg-red-500 transition">
          <h1 className="font-bold text-lg text-black hover:text-white transition">
            Добро пожаловать!
          </h1>
          <p className="py-2 text-sm text-black hover:text-white transition">
            Войдите, чтобы оставлять отзывы <br /> и пользоваться другими
            функциями авторизованных пользователей.
          </p>
          <Button
            type="primary"
            style={{ height: "40px", width: "182px" }}
            className="hover:bg-red-500 transition"
          >
            Войти в личный кабинет
          </Button>
        </div>

        <div className="bg-blue-100 w-full h-[200px] text-center flex gap-4 justify-center items-center rounded hover:bg-red-500 transition">
          <h3 className="font-bold text-[18px] leading-[100%] text-blue-500 hover:text-white transition">
            Покупать <br /> как юрлицо
          </h3>
          <Briefcase className="w-12 h-12 text-blue-400 hover:text-white transition" />
        </div>

        <div>
          <img
            src={doczon}
            alt="Doczon"
            className="w-full h-[200px] object-cover rounded hover:scale-105 transition"
          />
        </div>

        <div>
          <img
            src={foodee}
            alt="Foodee"
            className="w-full h-[200px] object-cover rounded hover:scale-105 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
