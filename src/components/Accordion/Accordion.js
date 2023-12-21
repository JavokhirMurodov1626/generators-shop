import "./Accordion.css";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <li className="question-item">
      <div className="question-item__top" onClick={openHandler}>
        <p className="question">
          Lorem Ipsum is simply dummy text of the printing?
        </p>
        {isOpen ? (
          <img className={`icon ${isOpen && "rotate"} `} src={minus} alt="" />
        ) : (
          <img className={`icon ${isOpen && "rotate"} `} src={plus} alt="" />
        )}
      </div>
      <div className={`answer ${isOpen && "open"}`}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </li>
  );
};

export default Accordion;
