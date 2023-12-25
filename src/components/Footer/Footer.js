import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-wrap container">
        <ul className="footer__contact">
          <li>{t("footer.header1")}</li>
          <li>+998910139888</li>
          <li>+998909186999</li>
          <li>+998909187999</li>
        </ul>
        <ul className="footer__address">
          <li>{t("footer.header2")}</li>
          <li>{t("footer.address1")}</li>
          <li>{t("footer.address2")}</li>
          <li>{t("footer.address3")}</li>
        </ul>
      </div>
    </footer>
  );
}
