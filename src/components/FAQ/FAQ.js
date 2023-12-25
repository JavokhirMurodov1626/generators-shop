import "./FAQ.css";
import Accordion from "../Accordion/Accordion";

const FAQ = () => {
  return (
    <section className="faq container" id="faq">
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
