import React from 'react';
import Header from "./Header/Header";
import News from "./News/News";
import Results from "./Results/Results";
import ResultsPage from "./Results/ResultsPage";

const Main = ({news}) => {

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
            <News news={news} />
            <ResultsPage />
        </div>
    );
};

export default Main;