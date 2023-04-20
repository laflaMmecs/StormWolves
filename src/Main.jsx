import React from 'react';
import Header from "./Header/Header";
import News from "./News/News";
import Results from "./Results/Results";
import ResultsPage from "./Results/ResultsPage";
import {Route} from "react-router-dom";
import MagazineFeed from "./Magazine/MagazineFeed";
import AboutUsFeed from "./AboutUs/AboutUsFeed";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

const Main = ({aboutUs}) => {

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
            <News />
            <ResultsPage />
            <MagazineFeed  />
            <AboutUsFeed aboutUs={aboutUs}/>
            <Footer />
        </div>
    );
};

export default Main;