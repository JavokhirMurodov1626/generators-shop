import "./Features.css";
import pattern from "../../assets/icons/features_pattern.svg";
import staticData from "../../data";
const Features = () => {
  return (
    <section className="features container ">
      <h2 className="features__title">Nima uchun bizni tanlashingiz kerak?</h2>
      <p className="features__text">
        Muayyan ehtiyojlar ishonchlilik va barqaror ishlashni talab qiladi. Nega
        benzin, gaz va dizel generatorlari tanlovimiz boshqalardan ustun
        turishini bilib oling, ular quvvat, chidamlilik va xotirjamlikni
        ta'minlaydi.
      </p>

      <div className="features__grid">
        {staticData.features.map((feature) => {
          return (
            <div className="features__grid-box">
              <img
                className="features__grid-box__pattern"
                src={pattern}
                alt=""
              />
              <div className="features__grid-box__icon">
                <img src={feature.icon} alt="" />
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
