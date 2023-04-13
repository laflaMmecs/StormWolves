import React from 'react';
import classes from './NewsItem.module.css'
import news from "./News";
const NewsItem = ({ newsItem }) => {
    return (
        <div className={classes.post_container}>
            <h2 className={classes.title}>{newsItem.title}</h2>
            <p className={classes.desc}>{newsItem.description}</p>
            <img className={classes.img} src={newsItem.image}/>
            <div className={classes.date}>{newsItem.date}</div>
        </div>
    );
};

export default NewsItem;

