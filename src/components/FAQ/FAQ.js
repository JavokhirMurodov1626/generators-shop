import "./FAQ.css";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import Accordion from "../Accordion/Accordion";

const FAQ = () => {
  return (
    <section className="faq container">
      <h2 className="text-center faq__title">FAQ</h2>
      <p className="text-center faq__text">
        Qiziqqan savollaringizga javobni shu yerdan oling!
      </p>
      <ul className="question-list">
       <Accordion/>
       <Accordion/>
       <Accordion/>
       <Accordion/>
       <Accordion/>
      </ul>
    </section>
  );
};

export default FAQ;
