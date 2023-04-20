import React from 'react';
import logo from '../img/logo.png';
import ogneypor from '../img/ogneypor.png';
import sobr from '../img/sobr.png'
import classes from '../Header/Header.module.css';
import { Route, Routes, Link} from "react-router-dom";
import News from "../News/News";
const Header = () => {
    return (
        <div className={classes.header}>
            <ul className={classes.nav}>
                <Link to="/StormWolves">
                    <img src={logo} className={classes.img}>
                    </img>
                </Link>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/results">Результаты</Link></li>
                    <li><Link to="/magazine">Магазин</Link></li>
                    <li><Link to="/history">История клуба</Link></li>
                    <li><Link to="/contactus">Связаться с нами</Link></li>
                <img src={ogneypor} className={classes.img_sponsorOg}></img>
                <img src={sobr} className={classes.img_sponsorSobr}></img>
            </ul>
        </div>
    );
};

export default Header;