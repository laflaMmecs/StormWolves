import React from 'react';
import NewsItem from './NewsItem'; // импорт компонента, отвечающего за отображение отдельной новости
import classes from '../News/NewsFeed.module.css'
const NewsFeed = ({ news }) => {
    return (
        <div className={classes.allPosts}>
            {news.map((item, index) => (
                <NewsItem key={index} newsItem={item}/>
            ))}
        </div>
    );
};

export default NewsFeed;

