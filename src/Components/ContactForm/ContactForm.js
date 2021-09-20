import { Fragment } from "react";
import React from 'react';

import classes from './ContactForm.module.css'

const ContactForm = () => {

    return (
        <Fragment>
            <div className={classes.div}>
                <form className={classes.form}
                action="https://formsubmit.co/yves.faems@gmail.com"
                    method="POST">
                        <input type="hidden"
                        name="_next"
                        value="https://portfolio-yfaems.netlify.app/"></input>
                    <label className={classes.form__label} for="fname"></label>
                    <input className={classes.form__input} type="text"
                        name="fname"
                        placeholder="Your Name" required></input>
                    <label className={classes.form__label} for="email"></label>
                    <input className={classes.form__input} type="email"
                        name="email"
                        placeholder="email.address@something.com" required></input>
                    <label className={classes.form__label} for="message"></label>
                    <textarea className={classes.form__input}  rows="4" cols="50"
                        name="message"
                        placeholder="Your Question / Message" required></textarea>
                    <p></p>
                    <button className={classes.form__send} type="submit">Send!</button>
                </form>
            </div>
        </Fragment>
    )
}

export default ContactForm