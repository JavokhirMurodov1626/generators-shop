import aboutVideo from "../assets/video/haoYuan_hero_video.mp4";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-video container">
        <video src={aboutVideo} autoPlay muted loop />
        <div className="content">
          <p className="text">{t("about.intro")}</p>
        </div>
      </section>

      <section className="about-text-boxes container">
        <h2>Biz haqimizda qisqacha</h2>
        <ul>
          <li>{t("about.text1")}</li>
          <li>{t("about.text2")}</li>
          <li>{t("about.text3")}</li>

          <li>{t("about.text4")}</li>
        </ul>
      </section>
    </>
  );
};

export default About;
