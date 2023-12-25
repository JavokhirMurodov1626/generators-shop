import "./FAQ.css";
import Accordion from "../Accordion/Accordion";
import { useTranslation } from "react-i18next";
import useData from "../../data";

const FAQ = () => {
  const { t } = useTranslation();
  const data = useData();
  return (
    <section className="faq container" id="faq">
      <h2 className="text-center faq__title">FAQ</h2>
      <p className="text-center faq__text">
        {t("questions.title")}
      </p>
      <ul className="question-list">
        {data.faq.map((item) => {
          return <Accordion key={item.id} question={item.question} answer={item.answer} />;
        })}
      </ul>
    </section>
  );
};

export default FAQ;
