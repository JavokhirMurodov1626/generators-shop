import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navigation.css";
import logo from "../../assets/icons/haoyuan.svg";
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg";

const menu = [
  { id: "products", name: "Mahsulotlar" },
  { id: "projects", name: "Loyihalar" },
  { id: "faq", name: "FAQ" },
];

const Navigation = () => {
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
          <Link to="/about">
            <li className="navigation__item">
              <Link className="navigation__link">Biz haqimizda</Link>
            </li>
          </Link>
          {menu.map((item) => (
            <li className="navigation__item" onClick={()=>scroll(item.id)}>
              <Link className="navigation__link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation__right">
        <div className="navigation__phone">
          <a href="tell:+998943243636">+998910139888</a>
        </div>

        <select name="language" id="language" className="navigation__select">
          <option value="uz">O'zbek</option>
          <option value="ru">Русский</option>
        </select>

        <ScrollLink to="contact" className="navigation__contact-button">
          Buyurtma
        </ScrollLink>
        <div className="hamburger-icon" onClick={handleHamburgerClick}>
          <img src={hamburgerIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
