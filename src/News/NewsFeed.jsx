import React from 'react';
import NewsItem from './NewsItem'; // импорт компонента, отвечающего за отображение отдельной новости
import classes from '../News/NewsFeed.module.css'
const NewsFeed = ({ news }) => {
    return (
        <div>
            <h1 className={classes.title}>Новости</h1>
            <div className={classes.allPosts}>
                {news.map((item, index) => (
                    <NewsItem key={index} newsItem={item}/>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;

