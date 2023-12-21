import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import patternLeft from "../../assets/icons/testimonials-pattern_left.svg";
import patternRight from "../../assets/icons/testimonials-pattern_right.svg";
import person from "../../assets/images/person-ig.png";

const Testimonials = () => {
  return (
    <section className="testimonials container">
      <div className="testimonials-wrap container">
        <img
          className="pattern testimonials__pattern-left"
          src={patternLeft}
          alt=""
        />

        <img
          className="pattern testimonials__pattern-right"
          src={patternRight}
          alt=""
        />
        <h2 className="testimonials__title">
          Mijozlarimizdan biz haqimizda eshititing
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="line"></div>

            <div className="slide__bottom">
              <div className="img-wrap">
                <img src={person} alt="" />
              </div>
              <p className="name">Nurmamatova Maftuna</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="line"></div>

            <div className="slide__bottom">
              <div className="img-wrap">
                <img src={person} alt="" />
              </div>
              <p className="name">Nurmamatova Maftuna</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="line"></div>

            <div className="slide__bottom">
              <div className="img-wrap">
                <img src={person} alt="" />
              </div>
              <p className="name">Nurmamatova Maftuna</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
