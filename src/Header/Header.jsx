import React from 'react';
import logo from '../img/logo.png';
import ogneypor from '../img/ogneypor.png';
import sobr from '../img/sobr.png'
import classes from '../Header/Header.module.css';
import { Route, Routes, Link} from "react-router-dom";
import News from "../News/News";
import MediaQuery from 'react-responsive'
import {useState} from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <MediaQuery maxWidth={768}>
                    <button className={classes.btnMob} onClick={() => setIsOpen(!isOpen)}><img src={logo} className={classes.imgMob}/></button>
                    {isOpen && (
                        <div className={classes.headerMob}>
                            <ul className={classes.navMob}>
                                <Link to="/StormWolves" className={classes.liA}>
                                    Главная
                                </Link>
                                <li className={classes.liA}><Link to="/news">Новости</Link></li>
                                <li className={classes.liA}><Link to="/results">Результаты</Link></li>
                                <li className={classes.liA}><Link to="/magazine">Магазин</Link></li>
                                <li className={classes.liA}><Link to="/history">История клуба</Link></li>
                                <li className={classes.liA}><Link to="/contactus">Связаться с нами</Link></li>
                                <div className={classes.sponsorsMob}>
                                    <img src={ogneypor} className={classes.img_sponsorOgMob}></img>
                                    <img src={sobr} className={classes.img_sponsorSobrMob}></img>
                                </div>
                            </ul>
                        </div>
                    )}
            </MediaQuery>
            <MediaQuery minWidth={768}>
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
                        <div className={classes.sponsors}>
                            <img src={ogneypor} className={classes.img_sponsorOg}></img>
                            <img src={sobr} className={classes.img_sponsorSobr}></img>
                        </div>
                    </ul>
                </div>
            </MediaQuery>
        </>
    );
};

export default Header;