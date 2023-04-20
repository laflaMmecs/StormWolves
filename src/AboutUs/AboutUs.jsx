
import AboutUsFeed from "./AboutUsFeed";
import PlayersFeed from "../Players/PlayersFeed";
import { Picker, Emoji } from 'emoji-mart';
import React from "react";
import classes from '../AboutUs/AboutUs.module.css'
const AboutUs = ({ aboutUs }) => {
    const text = "stormwolvesoff.yandex.ru"
    return (
        <div className={classes.mainBlock}>
            <div className={classes.post_container}>
                <p className={classes.rosterDesc}>
                    <h2 className={classes.title}>{aboutUs.titleRoster}</h2>
                    <div className={classes.roster}>{aboutUs.roster}</div>
                </p>
                <h3 className={classes.header}>{aboutUs.title}</h3>
                <div className={classes.mainDesc}>{aboutUs.description}</div>
                <img className={classes.imgUrl} src={aboutUs.imgUrl} />
                <div className={classes.imgDesc} >{aboutUs.imgDesc}</div>
            </div>
        </div>
    );
};

export default AboutUs;