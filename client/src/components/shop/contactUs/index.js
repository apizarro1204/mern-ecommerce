import React, { Fragment } from "react";
import Layout from "../layout";
import ContactForm from "./contactForm";

const ContactUsComponent = (props) => {
    return (
        <Fragment>
        <div className="flex flex-col items-center justify-center my-32">
            <ContactForm />
        </div>
        </Fragment>
    );
};

const ContactUs = (props) => {

    return (
        <Fragment>
            <Layout children={<ContactUsComponent />} />;
        </Fragment>
    )
}

export default ContactUs;