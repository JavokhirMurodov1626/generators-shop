import "./Contact.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValue = {
  name: "",
  phone: "",
  text: "",
};
const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);

    e.preventDefault();

    const { name, phone, text } = formData;
    const message = `
      Mijoz Ismi: ${name}\nTelefon raqami: ${phone}\nXabar: ${text}
    `;

    const botToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          pase_mode: "html",
          text: message,
        }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message);
        toast.success(t("contact.form.success"));
        setFormData(initialValue);
      } else {
        // Handle error
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="contact container" id="contact">
      <ToastContainer />
      <h2 className="contact__title text-center">{t("contact.title")}</h2>
      <div className="contact__info">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="input-groups">
            <div className="group">
              <label htmlFor="name" className="mb-1">
                {t("contact.form.input1.label")}
              </label>
              <input
                placeholder={t("contact.form.input1.placeholder")}
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="group">
              <label htmlFor="number" className="mb-1">
                {t("contact.form.input2.label")}
              </label>
              <input
                placeholder={t("contact.form.input2.placeholder")}
                className="form-control"
                type="number"
                id="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="floatingTextarea" className="mb-1">
            {t("contact.form.input3.label")}
          </label>
          <textarea
            className="form-control"
            placeholder={t("contact.form.input3.placeholder")}
            id="floatingTextarea"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          ></textarea>

          <button className="contact-btn">{t("contact.form.button")}</button>
        </form>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5997.314788369435!2d69.14791200000002!3d41.272795!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzIyLjEiTiA2OcKwMDgnNTIuNSJF!5e0!3m2!1sen!2s!4v1703084043787!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
