import React from "react";
import termo from "../assets/termo.webp";
import biometr from "../assets/biometr.webp";
import chastot from "../assets/chastot.webp";
import lyulosmter from "../assets/lyulosmtetr.webp";
import lazer from "../assets/lazer.webp";

const Statistic = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[20px]">
      <div className="flex gap-4 items-center">
        <h1 className="font-medium text-[24.8px] leading-[100%] tracking-[0.53px] align-middle">
          Статьи
        </h1>

        <button className="border rounded-2xl p-[4px] border-b-gray-500 hover:text-white hover:bg-red-500 transition">
          Смотреть все
        </button>
      </div>

      <div className="flex justify-between gap-2 mt-[21px]">
        <div className="w-[284px] h-[283px] border hover:bg-red-500 hover:text-white transition">
          <div>
            <img src={biometr} alt="" className="w-full h-[200px] object-cover rounded-t" />
          </div>
          <div className="p-[8px] border-t">
            <span className="font-normal text-[15.75px] leading-[100%] text-[#6682A9] hover:text-white transition">
              13.06.2023
            </span>
            <p className="hover:text-white transition">
              Виброметры для двигателей и механизмов
            </p>
          </div>
        </div>

        <div className="w-[284px] h-[283px] border hover:bg-red-500 hover:text-white transition">
          <div>
            <img src={chastot} alt="" className="w-full h-[200px] object-cover rounded-t" />
          </div>
          <div className="p-[8px] border-t">
            <span className="font-normal text-[15.75px] leading-[100%] text-[#6682A9] hover:text-white transition">
              12.06.2023
            </span>
            <p className="hover:text-white transition">
              Частотный преобразователь — что такое и для чего он нужен
            </p>
          </div>
        </div>

        <div className="w-[284px] h-[283px] border hover:bg-red-500 hover:text-white transition">
          <div>
            <img src={lazer} alt="" className="w-full h-[200px] object-cover rounded-t" />
          </div>
          <div className="p-[8px] border-t">
            <span className="font-normal text-[15.75px] leading-[100%] text-[#6682A9] hover:text-white transition">
              11.06.2023
            </span>
            <p className="hover:text-white transition">
              Зачем нужен такой прибор, как лазерный тахометр?
            </p>
          </div>
        </div>

        <div className="w-[284px] h-[283px] border hover:bg-red-500 hover:text-white transition">
          <div>
            <img src={lyulosmter} alt="" className="w-full h-[200px] object-cover rounded-t" />
          </div>
          <div className="p-[8px] border-t">
            <span className="font-normal text-[15.75px] leading-[100%] text-[#6682A9] hover:text-white transition">
              10.06.2023
            </span>
            <p className="hover:text-white transition">
              Люксометр - Измеритель яркости и освещённости
            </p>
          </div>
        </div>

        <div className="w-[284px] h-[283px] border hover:bg-red-500 hover:text-white transition">
          <div>
            <img src={termo} alt="" className="w-full h-[200px] object-cover rounded-t" />
          </div>
          <div className="p-[8px] border-t">
            <span className="font-normal text-[15.75px] leading-[100%] text-[#6682A9] hover:text-white transition">
              09.06.2023
            </span>
            <p className="hover:text-white transition">
              Термометр для измерения температуры объекта
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
