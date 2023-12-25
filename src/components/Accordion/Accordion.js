import "./Accordion.css";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <li className="question-item">
      <div className="question-item__top" onClick={openHandler}>
        <p className="question">{question}</p>
        {isOpen ? (
          <img className={`icon ${isOpen && "rotate"} `} src={minus} alt="" />
        ) : (
          <img className={`icon ${isOpen && "rotate"} `} src={plus} alt="" />
        )}
      </div>
      <div className={`answer ${isOpen && "open"}`}>
        <p>{answer}</p>
      </div>
    </li>
  );
};

export default Accordion;
