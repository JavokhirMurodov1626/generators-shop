import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <h2 className="contact__title text-center">Biz bilan bog'laning</h2>
      <div className="contact__info">
        <form className="contact__form">
          <div className="input-groups">
            <div className="group">
              <label htmlFor="name" className="mb-1">
                Ism
              </label>
              <input
                placeholder="Ismingizni kiriting"
                class="form-control"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="group">
              <label htmlFor="number" className="mb-1">
                Telefon raqam
              </label>
              <input
                placeholder="Raqamingizni kiriting"
                class="form-control"
                type="number"
                id="number"
                name="number"
              />
            </div>
          </div>
          <label htmlFor="floatingTextarea" className="mb-1">
            Qiziqtirgan savolingiz
          </label>
          <textarea
            class="form-control"
            placeholder="Xabar matnini kiriting"
            id="floatingTextarea"
          ></textarea>

          <button className="contact-btn">Yuborish</button>
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
