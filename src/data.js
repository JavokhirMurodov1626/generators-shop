import productGas1 from "./assets/images/product_gaz_img_1.webp";
import productGas2 from "./assets/images/product_gaz_img_2.webp";
import productGas3 from "./assets/images/product_gaz_img_3.webp";
import productGas4 from "./assets/images/product_gaz_img_4.webp";
import productGas6 from "./assets/images/product_gas_6.webp";
import productGas7 from "./assets/images/product_gas_7.webp";
import productGas8 from "./assets/images/product_gas_8.webp";
import productGas9 from "./assets/images/product_gas_9.webp";
import productGas10 from "./assets/images/generator_gas_10.webp";
import productGas12 from "./assets/images/generator_gas_11.webp";
import productGas13 from "./assets/images/generator_gas_12.webp";
import productGas14 from "./assets/images/generator_gas_13.webp";
import productGas15 from "./assets/images/generator_gas_14.webp";
import productGas16 from "./assets/images/generator_gas_15.webp";
import productGas17 from "./assets/images/generator_gas_16.webp";
import productGas18 from "./assets/images/generator_gas_17.webp";
import productGas19 from "./assets/images/generator_gas_18.webp";

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
import { useTranslation } from "react-i18next";

export const productsList = [
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
  { id: 26, img: productGas10, type: "gas" },
  { id: 27, img: productGas12, type: "gas" },
  { id: 28, img: productGas13, type: "gas" },
  { id: 29, img: productGas14, type: "gas" },
  { id: 30, img: productGas15, type: "gas" },
  { id: 31, img: productGas16, type: "gas" },
  { id: 32, img: productGas17, type: "gas" },
  { id: 33, img: productGas18, type: "gas" },
  { id: 34, img: productGas19, type: "gas" },
];

function useData() {
  const { t } = useTranslation();

  const data = {
    navigation: [
      { id: "products", name: t("navigation.products") },
      { id: "projects", name: t("navigation.projects") },
      { id: "faq", name: "FAQ" },
    ],
    tabs: [
      {
        id: 1,
        name: t("products.tab1"),
        type: "all",
      },
      {
        id: 2,
        name: t("products.tab2"),
        type: "gas",
      },
      {
        id: 3,
        name: t("products.tab4"),
        type: "petrol",
      },
      {
        id: 4,
        name: t("products.tab3"),
        type: "diesel",
      },
    ],

    features: [
      {
        icon: gear,
        title: t("features.feature1.title"),
        text: t("features.feature1.text"),
      },
      {
        icon: setting,
        title: t("features.feature2.title"),
        text: t("features.feature2.text"),
      },
      {
        icon: cloudRain,
        title: t("features.feature3.title"),
        text: t("features.feature3.text"),
      },
      {
        icon: saveEnergy,
        title: t("features.feature4.title"),
        text: t("features.feature4.text"),
      },
    ],

    testimonials: [
      {
        id: 1,
        text: t("testimonials.testimonial1"),
        name: "Nurmamatova Maftuna",
      },
      {
        id: 2,
        text: t("testimonials.testimonial1"),
        name: "Nurmamatova Maftuna",
      },
      {
        id: 3,
        text: t("testimonials.testimonial1"),
        name: "Nurmamatova Maftuna",
      },
    ],

    faq: [
      {
        id: 1,
        question: t("questions.question1.text"),
        answer: t("questions.question1.answer"),
      },
      {
        id: 2,
        question: t("questions.question2.text"),
        answer: t("questions.question2.answer"),
      },
      {
        id: 3,
        question:
          t("questions.question3.text"),
        answer: t("questions.question3.answer"),
      },
      {
        id: 4,
        question: t("questions.question4.text"),
        answer: t("questions.question4.answer"),
      },
    ],
  };
  return data;
}

export default useData;
//25 last id of products
