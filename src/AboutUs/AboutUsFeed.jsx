import AboutUs from "./AboutUs";
import PlayersFeed from "../Players/PlayersFeed";
import classes from "./AboutUsFeed.module.css"
const AboutUsFeed = ({ aboutUs  }) => {
    return (
        <div>
            <h1 className={classes.title}>История Storm Wolves</h1>
            <div>
                {aboutUs.map((item, index) => (
                    <AboutUs
                        key={index}
                        aboutUs={item}/>
                ))}
            </div>
            <PlayersFeed />
        </div>
    );
};

export default AboutUsFeed;