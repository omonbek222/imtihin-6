import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import { ShoppingBasket, Globe, FileQuestion, Grip, Search } from "lucide-react";
import katalog from "../assets/katalog.png";

const Brand = ({ cart, setCart }) => {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.quantity, 0);
  };

  const handleClearCart = () => {
    setCart([]);
    toggleModal();  
  };

  return (
    <div className="border-2" style={{ borderColor: "rgba(194, 205, 221, 1)" }}>
      <div className="max-w-[1200px] mx-auto flex items-center gap-4 my-[17.5px]">
        <div>
          <img
            className="w-[139px] h-[26px]"
            src="https://zon.uz/_next/static/media/zon.uz-logo.a51d6fb2.svg"
            alt="Logo"
          />
        </div>

        <div>
          <img src={katalog} alt="Katalog" />
        </div>

        <div className="flex-1 flex">
          <Input
            placeholder="Найти товары"
            style={{
              height: "40px",
              width: "100%",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <div className="flex items-center justify-center px-4 bg-blue-500 rounded-r-md cursor-pointer">
            <Search className="text-white w-5 h-5" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative cursor-pointer" onClick={toggleModal}>
            <ShoppingBasket size={35} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Globe />
            <Select
              value={selectedLang}
              onChange={(value) => setSelectedLang(value)}
              style={{ width: 80 }}
              bordered={false}
              options={[
                { value: "ru", label: "Rus" },
                { value: "en", label: "Eng" },
                { value: "uz", label: "Uzb" },
              ]}
            />
          </div>

          <FileQuestion />
          <Grip />

          <Button type="primary" style={{ height: "40px", width: "82px" }}>
            Войти
          </Button>
        </div>
      </div>

      <Modal
        title="Shopping Cart"
        visible={modalVisible}
        onCancel={toggleModal}
        footer={null}
      >
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}so'm</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                <Input
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  style={{ width: "40px" }}
                />
                <Button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>{getTotalPrice()}so'm</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button type="default" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button type="primary" onClick={toggleModal}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Brand;
