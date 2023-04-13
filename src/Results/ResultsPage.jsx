import React from 'react';
import Results from "./Results";
import classes from "./ResultsPage.module.css"
const ResultsPage = ({matches}) => {
    return (
        <div>
            <h1 className={classes.title}>Последние матчи</h1>
            <div>
                {matches.map((item, index) => (
                    <Results key={index} matches={item}/>
                ))}
            </div>
        </div>
    );
};

export default ResultsPage;