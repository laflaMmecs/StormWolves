import React from 'react';
import Results from "./Results";
import classes from "./ResultsPage.module.css"
const ResultsPage = () => {

    const [matches, setMatches] = React.useState([]);
    React.useEffect(() => {
        fetch('https://643964301b9a7dd5c9666ed2.mockapi.io/matches')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setMatches(arr)
            })
    },[]);
    return (
        <div>
            <h1 className={classes.title}>Последние матчи</h1>
            <div className={classes.matchPage}>
                {matches.map((item, index) => (
                    <Results key={index} matches={item}/>
                ))}
            </div>
        </div>
    );
};

export default ResultsPage;