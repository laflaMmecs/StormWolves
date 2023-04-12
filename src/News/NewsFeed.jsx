import React from 'react';
import NewsItem from './NewsItem'; // импорт компонента, отвечающего за отображение отдельной новости

const NewsFeed = ({ news }) => {
    return (
        <div>
            {news.map((item, index) => (
                <NewsItem key={index} newsItem={item}/>
            ))}
        </div>
    );
};

export default NewsFeed;

