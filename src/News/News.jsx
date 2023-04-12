import React from 'react';
import NewsFeed from '../News/NewsFeed'; // импорт компонента, отвечающего за отображение отдельной новости

const News = ({news}) => {

    return (
        <div>
            <NewsFeed news={news}/>
        </div>
    );
};

export default News;