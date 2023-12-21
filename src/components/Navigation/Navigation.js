import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation container">
      <div className="navigation__left">
        <div className="navigation__logo">
          <p>Logo</p>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__item">
            <Link to="about" className="navigation__link">
              Biz haqimizda
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">Mahsulotlar</Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">FAQ</Link>
          </li>
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

        <button className="navigation__contact-button">Buyurtma</button>
      </div>
    </nav>
  );
};

export default Navigation;
