import React from 'react';
import CopyText from "./CopyText";
import classes from "../ContactUs/CopyText.module.css"
const ContactUs = () => {
    const text = 'stormwolvesoff@yandex.ru'
    return (
        <div>
            <h1 className={classes.header}>Связь с нами</h1>
            <div className={classes.inf}>Вы можете связаться с нами через почту:</div>
            <CopyText text={text} />
        </div>
    );
};

export default ContactUs;