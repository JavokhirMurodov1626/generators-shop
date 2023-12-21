import productGas1 from "./assets/images/product_gaz_img_1.webp";
import productGas2 from "./assets/images/product_gaz_img_2.webp";
import productGas3 from "./assets/images/product_gaz_img_3.webp";
import productGas4 from "./assets/images/product_gaz_img_4.webp";
import productGas6 from "./assets/images/product_gas_6.webp";
import productGas7 from "./assets/images/product_gas_7.webp";
import productGas8 from "./assets/images/product_gas_8.webp";
import productGas9 from "./assets/images/product_gas_9.webp";

import productDiesel1 from "./assets/images/product_diesel_1.webp";
import productDiesel2 from "./assets/images/product_diesel_2.webp";
import productDiesel3 from "./assets/images/product_diesel_3.webp";
import productDiesel4 from "./assets/images/product_diesel_4.webp";
import productDiesel5 from "./assets/images/product_diesel_5.webp";
import productDiesel6 from "./assets/images/product_diesel_6.webp";
import productDiesel7 from "./assets/images/product_diesel_7.webp";
import productDiesel8 from "./assets/images/product_diesel_8.webp";
import productDiesel9 from "./assets/images/product_diesel_9.webp";

import productPetrol1 from "./assets/images/product_petrol_1.webp";
import productPetrol2 from "./assets/images/product_petrol_2.webp";
import productPetrol3 from "./assets/images/product_petrol_3.webp";
import productPetrol4 from "./assets/images/product_petrol_4.webp";
import productPetrol5 from "./assets/images/product_petrol_5.webp";
import productPetrol6 from "./assets/images/product_petrol_6.webp";
import productPetrol7 from "./assets/images/product_petrol_7.webp";
import productPetrol8 from "./assets/images/product_petrol_8.webp";

import gear from "./assets/icons/setting-edit-filter-gear.svg";
import setting from "./assets/icons/setting-filter.svg";
import cloudRain from "./assets/icons/cloud-rain.svg";
import saveEnergy from "./assets/icons/shield-energy-checkmark-circle.svg";

const data = {
  productsList: [
    { id: 1, img: productGas1, type: "gas" },
    { id: 6, img: productPetrol1, type: "petrol" },
    { id: 15, img: productDiesel5, type: "diesel" },
    { id: 12, img: productDiesel2, type: "diesel" },
    { id: 8, img: productPetrol3, type: "petrol" },
    { id: 2, img: productGas2, type: "gas" },
    { id: 3, img: productGas3, type: "gas" },

    { id: 13, img: productDiesel3, type: "diesel" },
    { id: 4, img: productGas4, type: "gas" },
    { id: 5, img: productGas6, type: "gas" },
    { id: 23, img: productGas7, type: "gas" },
    { id: 24, img: productGas8, type: "gas" },
    { id: 25, img: productGas9, type: "gas" },
    { id: 7, img: productPetrol2, type: "petrol" },
    { id: 9, img: productPetrol4, type: "petrol" },
    { id: 10, img: productPetrol5, type: "petrol" },
    { id: 11, img: productDiesel1, type: "diesel" },
    { id: 14, img: productDiesel4, type: "diesel" },
    { id: 16, img: productDiesel6, type: "diesel" },
    { id: 17, img: productDiesel7, type: "diesel" },
    { id: 18, img: productDiesel8, type: "diesel" },
    { id: 19, img: productDiesel9, type: "diesel" },
    { id: 20, img: productPetrol6, type: "petrol" },
    { id: 21, img: productPetrol7, type: "petrol" },
    { id: 22, img: productPetrol8, type: "petrol" },
  ],

  features: [
    {
      icon: gear,
      title: "Chidamlilik",
      text: ` Muayyan ehtiyojlar ishonchlilik va barqaror ishlashni talab qiladi. Nega
    benzin, gaz va dizel generatorlari tanlovimiz boshqalardan ustun
    turishini bilib oling, ular quvvat, chidamlilik va xotirjamlikni
    ta'minlaydi.`,
    },
    {
      icon: setting,
      title: "Avtomatik boshqaruv",
      text: ` Uskunamizmi avtomatik boshqarishni amalga oshirish uchun
      mikrokompyuterning aqlli boshqaruvchisi va xalqaro markali
      o'chirgich ishlatiladi`,
    },
    {
      icon: cloudRain,
      title: "Noqulay sharoit",
      text: ` Yuqori harorat, qattiq anamal sovuq, yuqori namlik, qum va chang
      kabi turli xil murakkab muhit va neft ish sharoitlariga
      moslashtirilgan.`,
    },
    {
      icon: saveEnergy,
      title: "Tejamkorlik",
      text: ` Yuqori bosim nisbati super zaryadlovchiga mos kelishi havo olish
      hajmini oshiradi, yonishni optimallashtiradi va yoqilg'ini sezilarli
      darajada tejaydi.`,
    },
  ],
};

export default data;
//25 last id of products
