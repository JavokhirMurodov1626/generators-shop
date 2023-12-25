import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navigation.css";
import logo from "../../assets/icons/haoyuan.svg";
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg";
import { useTranslation } from "react-i18next";
import useData from "../../data";

const Navigation = () => {
  const { i18n, t } = useTranslation();
  const data = useData();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleHamburgerClick = () => {
    let navigation = document.querySelector(".navigation__menu");
    navigation.classList.toggle("active");
  };

  const scroll = (id) => {
    const productsSection = document.querySelector(`#${id}`);
    productsSection.scrollIntoView({ behavior: "smooth" });
    handleHamburgerClick();
  };

  return (
    <nav className="navigation container">
      <div className="navigation__left">
        <div className="navigation__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navigation__menu ">
          <li className="navigation__item">
            <Link to="about" className="navigation__link">
              {t("navigation.about")}
            </Link>
          </li>

          {data.navigation.map((item) => (
            <li
              key={item.id}
              className="navigation__item"
              onClick={() => scroll(item.id)}
            >
              <Link className="navigation__link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation__right">
        <div className="navigation__phone">
          <a href="tell:+998943243636">+998910139888</a>
        </div>

        <select
          name="language"
          id="language"
          className="navigation__select"
          onChange={changeLanguage}
        >
          <option value="uz">O'zbek</option>
          <option value="ru">Русский</option>
        </select>

        <ScrollLink to="contact" className="navigation__contact-button">
          {t("navigation.button")}
        </ScrollLink>
        <div className="hamburger-icon" onClick={handleHamburgerClick}>
          <img src={hamburgerIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
