import { FaTelegram, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaTelegram size={22} className="text-blue-500" />, key: "telegram" },
    { icon: <FaYoutube size={22} className="text-red-500" />, key: "youtube" },
    { icon: <FaInstagram size={22} className="text-pink-500" />, key: "instagram" },
    { icon: <FaFacebook size={22} className="text-blue-700" />, key: "facebook" },
  ];

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-[1200px] justify-between mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        
       
        <div className="border p-[26px]">
          <h4 className="font-semibold mb-2">Контакты</h4>
          <p>Call-центр</p>
          <p className="text-blue-600">+998-95 020-93-50</p>
          <p>Эл. почта</p>
          <p className="text-blue-600">info@zon.uz</p>
          <p className="mt-2">График работы</p>
          <p>в будние - с 09:00 до 18:00</p>
          <p>Суббота - с 09:00 до 18:00</p>
        </div>

  
        <div>
          <div className="border p-[26px]">
            <h4 className="font-semibold mb-2">Мы в социальных сетях</h4>
            <div className="flex items-center space-x-3 mb-4">
              {socialIcons.map(({ icon, key }) => (
                <span key={key}>{icon}</span>
              ))}
            </div>
          </div>

       
          <div className="mt-[10px] border pl-[26px] pb-3">
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdZ4mOyiQY26DIa1nDz9OQKUYqW-v2Qt7Jw&s"
                alt="Payme"
                className="w-[100px] h-[100px]"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-nuPJV2w4JsFY3eACGP_ODUKLO2eZ0n1NA&s"
                alt="Click"
                className="w-[150px] h-[100px]"
              />
            </div>
            <p className="mt-2 text-gray-500">
              Интернет магазин Zon.uz 2017-2024. <br />
              Все права защищены.
            </p>
          </div>
        </div>

      
        <div className="border p-[26px]">
          <h4 className="font-semibold mb-2">Компания</h4>
          <div className="flex">
            <ul className="space-y-1">
              {["О нас", "Реклама", "Контакты", "Вакансии", "Карта сайта", "Публичная оферта"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <ul>
              {["Продавайте на Zon.uz", "Покупать как юрлицо"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="border p-[26px]">
          <h4 className="font-semibold mb-2">Помощь</h4>
          <ul className="space-y-1">
            {["Вопросы и ответы", "Условия рассрочки", "Способы оплаты", "Доставка", "Возврат товаров", "Сервисные центры"].map((item) => (
              <li key={item}>
                <a href="#" className="text-blue-500 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
