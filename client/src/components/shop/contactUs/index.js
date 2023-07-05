import React, { Fragment } from "react";
import Layout from "../layout";

const ContactUsComponent = (props) => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <h1>Hola</h1>
        </div>
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