import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import patternLeft from "../../assets/icons/testimonials-pattern_left.svg";
import patternRight from "../../assets/icons/testimonials-pattern_right.svg";
// import accoundDefault from "../../assets/images/account-default.png";
import useData from "../../data";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const localData = useData();
  return (
    <section className="testimonials container">
      <div className="testimonials-wrap container">
        <img loading="lazy"
          className="pattern testimonials__pattern-left"
          src={patternLeft}
          alt=""
        />

        <img loading="lazy"
          className="pattern testimonials__pattern-right"
          src={patternRight}
          alt=""
        />
        <h2 className="testimonials__title">
         { t("testimonials.title")}
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {localData.testimonials.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <p className="text">{item.text}</p>
                <div className="line"></div>

                {/* <div className="slide__bottom">
                  <div className="img-wrap">
                    <img src={accoundDefault} alt="" />
                  </div>
                  <p className="name">{item.name}</p>
                </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
