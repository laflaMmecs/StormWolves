import React from 'react';
import classes from './Magazine.module.css'
import { useState} from "react";

const Magazine = ({ magazine }) => {
    const [image, setImage] = useState(magazine.imgFront)
    const changeImage = () => {
        if(image === magazine.imgFront) {
            setImage(magazine.imgBack)
        } else {
            setImage(magazine.imgFront)
        }
    }
    return (
        <div>
            <div className={classes.productCard}>
                <h1 className={classes.productTitle}>{magazine.title}</h1>
                <img src={image} className={classes.productImage}/>
                    <div className={classes.productRating}>
                        <span className={classes.star}>&#9733;</span>
                        <span className={classes.star}>&#9733;</span>
                        <span className={classes.star}>&#9733;</span>
                        <span className={classes.star}>&#9733;</span>
                        <span className={classes.star}>&#9733;</span>
                    </div>
                    <div className={classes.productPrice}>{magazine.price}</div>
                <button className={classes.productBuyButton} onClick={changeImage}>Ввид сзади/спереди</button>
                    <button className={classes.productBuyButton}>Купить</button>
            </div>
        </div>
    );
};

export default Magazine;