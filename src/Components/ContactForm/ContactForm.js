import { Fragment } from "react";
import React from 'react';

import classes from './ContactForm.module.css'

const ContactForm = () => {

    return (
        <Fragment>
            <form action="https://formsubmit.co/yves.faems@gmail.com"
                method="POST">
                <label for="fname">First name?</label>
                <input type="text"
                    name="fname"></input>
                <button type="submit">Send!</button>
            </form>
        </Fragment>
    )
}

export default ContactForm