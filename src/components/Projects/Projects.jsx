import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

import project1Wide from "../../assets/images/project_1_wide.jpg";
import project1Small1 from "../../assets/images/project_1_small_1.jpg";
import project1Small2 from "../../assets/images/project_1_small_2.jpg";

import project2Wide1 from "../../assets/images/project_2_wide_1.jpg";
import project2Wide2 from "../../assets/images/project_2_wide_2.jpg";

import project3Wide1 from "../../assets/images/project_3_wide_1.jpg";
import project3Wide2 from "../../assets/images/project_3_wide_2.jpg";

import porject4Wide1 from "../../assets/images/project_4_wide_1.jpg";

import project5Wide1 from "../../assets/images/project_5_wide_1.jpg";
import project5Wide2 from "../../assets/images/project_5_wide_2.jpg";

import project6Wide1 from "../../assets/images/project_6_wide_1.jpg";
import project6Wide2 from "../../assets/images/project_6_wide_2.png";

import project7Wide1 from "../../assets/images/project_7_wide_1.jpg";

// import required modules
import { Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <section className="projects container">
      <h2 className="project__title">Loyihalar</h2>
      <div className="swiper-wrap">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Nigeria Oilfield Power Generation
                Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> 46x600kW, 2x500kW gas generator
                units
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="wide">
                <img src={project1Wide} alt="project" />
              </div>
              <div className="smalls">
                <div className="small-one">
                  <img src={project1Small1} alt="project" />
                </div>
                <div className="small-two">
                  <img src={project1Small2} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Peru Ten District Gas Power Station
                Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span>5x960kW gas generator set
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="row">
                <div className="wide long-height">
                  <img src={project2Wide1} alt="project" />
                </div>
                <div className="wide long-height">
                  <img src={project2Wide2} alt="project" />
                </div>
              </div>
              {/* <div className="smalls">
                <div className="small-one">
                  <img src={project1Small1} alt="project" />
                </div>
                <div className="small-two">
                  <img src={project1Small2} alt="project" />
                </div>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Nigeria Power Station Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> More than 430 500kW and 2000kW gas
                generator units
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="row">
                <div className="wide long-height">
                  <img src={project3Wide1} alt="project" />
                </div>
                <div className="wide long-height">
                  <img src={project3Wide2} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span>Thailand Palm Oil Plant Biogas Power
                Station
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> 5X1000kW biogas generator unit
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="row">
                <div className="wide long-height">
                  <img src={project5Wide1} alt="project" />
                </div>
                <div className="wide long-height">
                  <img src={project5Wide2} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Bengal Coal Mine Diesel Power
                Generation Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> 1 × 3000kW diesel generator
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="row">
                <div className="wide long-height">
                  <img src={project6Wide1} alt="project" />
                </div>
                <div className="wide long-height">
                  <img src={project6Wide2} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Colombia Power Station Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> 10x1000kW gas generator set
              </p>
            </div>

            <div className="swiper-box__right ">
              <div className="row">
                <div className="wide long-height">
                  <img src={project7Wide1} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box__left ">
              <p className="project-name mb-5">
                <span>Loyiha nomi:</span> Indonesian Steel Plant Project
              </p>
              <p className="product-type mb-5">
                <span>Mahsulot turi:</span> 10 × 1500kW diesel generator set
              </p>
            </div>

            <div className="swiper-box__right">
              <div className="row">
                <div className="col">
                  <img src={porject4Wide1} alt="project" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
