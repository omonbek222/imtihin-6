import React from "react";
import termo from "../assets/termo.webp";
import biometr from "../assets/biometr.webp";
import chastot from "../assets/chastot.webp";
import lyulosmter from "../assets/lyulosmtetr.webp";
import lazer from "../assets/lazer.webp";

const ArticleGrid = () => {
  const articles = [
    {
      img: biometr,
      date: "13.06.2023",
      text: "Виброметры для двигателей и механизмов",
    },
    {
      img: chastot,
      date: "12.06.2023",
      text: "Частотный преобразователь — что такое и для чего он нужен",
    },
    {
      img: lazer,
      date: "11.06.2023",
      text: "Зачем нужен такой прибор, как лазерный тахометр?",
    },
    {
      img: lyulosmter,
      date: "10.06.2023",
      text: "Люксометр - Измеритель яркости и освещённости",
    },
    {
      img: termo,
      date: "09.06.2023",
      text: "Термометр для измерения температуры объекта",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto mt-5 px-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h1 className="font-medium text-[24.8px] leading-[100%] tracking-[0.53px]">
          Статьи
        </h1>
        <button className="border rounded-2xl px-3 py-1 border-gray-500 text-sm hover:text-white hover:bg-red-500 transition">
          Смотреть все
        </button>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-between gap-4 mt-6">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[284px] max-w-[300px] border hover:bg-red-500 hover:text-white transition"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-[200px] object-cover rounded-t"
            />
            <div className="p-2 border-t">
              <span className="text-sm text-[#6682A9] block mb-1 hover:text-white transition">
                {item.date}
              </span>
              <p className="text-sm hover:text-white transition">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
