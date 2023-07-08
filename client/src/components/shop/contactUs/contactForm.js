import React, { Fragment } from "react";
import "./style.css";

const ContactForm = (props) => {
  return (
    <Fragment>
      <form action="/contact-us" method="post" className="contact-form">
        <ul>
          <li>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="mail" name="user_email" />
          </li>
          <li>
            <label for="msg">Mensaje:</label>
            <textarea id="msg" name="user_message" rows="4" placeholder="Escríbenos tu opinión, sugerencia o consulta. Un ejecutivo se contactará contigo a la brevedad."></textarea>
          </li>
        </ul>
        <button type="submit">Enviar</button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
