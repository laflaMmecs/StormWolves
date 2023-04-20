import React from 'react';
import NewsItem from './NewsItem'; // импорт компонента, отвечающего за отображение отдельной новости
import classes from '../News/NewsFeed.module.css'
const NewsFeed = () => {
    const [news, setNews] = React.useState([]);
    React.useEffect(() => {
        fetch('https://643d63e06afd66da6af5b964.mockapi.io/news')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setNews(arr)
            })
    },[]);
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

