import "./Hero.css";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link as ScrollLink } from "react-scroll";
import generator1 from "../../assets/images/hero_slide_1.webp";
import generator2 from "../../assets/images/hero_slide_2.webp";
import generator3 from "../../assets/images/hero_slide_3.webp";
import generator4 from "../../assets/images/hero_slide_4.webp";
import generator5 from "../../assets/images/hero_slide_5.webp";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="container hero__wrap">
        <div className="hero__left">
          <h1 className="hero__title">{t("hero.title")}</h1>
          <p className="hero__text">{t("hero.text")}</p>
          <ScrollLink to="contact" className=" hero__btn">
            {t("hero.button")}
          </ScrollLink>
        </div>
        <div className="swiper-wrap">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img loading="lazy" src={generator1} alt="generator wide " />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={generator2} alt="generator wide " />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={generator3} alt="generator wide" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={generator4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={generator5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
