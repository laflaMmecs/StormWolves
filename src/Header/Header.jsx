import React from 'react';
import logo from '../img/logo.png';
import ogneypor from '../img/ogneypor.png';
import sobr from '../img/sobr.png'
import classes from '../Header/Header.module.css';
import News from "../News/News";
const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} className={classes.img}>
            </img>
            <ul className={classes.nav}>
                    <li><a href={<News />}>Новости</a></li>
                    <li><a href={<News />}>Результаты</a></li>
                    <li><a href={<News />}>Магазин</a></li>
                    <li><a href={<News />}>История</a></li>
            </ul>
            <img src={ogneypor} className={classes.img_sponsor_og}></img>
            <img src={sobr} className={classes.img_sponsor_sobr}></img>
        </div>
    );
};

export default Header;