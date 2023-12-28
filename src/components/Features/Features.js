import "./Features.css";
import pattern from "../../assets/icons/features_pattern.svg";
import useData from "../../data";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const data = useData();
  return (
    <section className="features container ">
      <h2 className="features__title">{t("features.title")}</h2>
      <p className="features__text">{t("features.text")}</p>

      <div className="features__grid">
        {data.features.map((feature) => {
          return (
            <div className="features__grid-box" key={feature.title}>
              <img
                loading="lazy"
                className="features__grid-box__pattern"
                src={pattern}
                alt=""
              />
              <div className="features__grid-box__icon">
                <img loading="lazy" src={feature.icon} alt="" />
              </div>
              <h3 className="title">{feature.title}</h3>
              <p className="text">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
