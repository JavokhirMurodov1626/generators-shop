import "./Hero.css";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import generator1 from "../../assets/images/hero_slide_1.webp";
import generator2 from "../../assets/images/hero_slide_2.webp";
import generator3 from "../../assets/images/hero_slide_3.webp";
import generator4 from "../../assets/images/hero_slide_4.webp";
import generator5 from "../../assets/images/hero_slide_5.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__wrap">
        <div className="hero__left">
          <h1 className="hero__title">
            "Har qanday ehtiyoj uchun sifatli generatorlar"
          </h1>
          <p className="hero__text">
            Turli quvvat ehtiyojlariga moslashtirilgan bardoshli va samarali
            generatorlarni topish uchun kollektsiyamizni o'rganing. Har qanday
            ob-havo sharoiti uchun ishonchli energiya yechimlari bilan
            makoningizni ko'taring.
          </p>
          <button className=" hero__btn">Bog'lanish</button>
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
