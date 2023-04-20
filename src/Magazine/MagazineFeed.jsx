import React from "react";
import Magazine from "./Magazine";
import classes from "./MagazineFeed.module.css"


const MagazineFeed = () => {
    const [magazine, setMagazine] = React.useState([]);
    React.useEffect(() => {
        fetch('https://643964301b9a7dd5c9666ed2.mockapi.io/shop')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setMagazine(arr)
            })
    },[]);
    return (
        <div>
            <h1 className={classes.title}>Товары</h1>
            <div className={classes.allCart}>
                {magazine.map((item, index) => (
                    <Magazine key={index} magazine={item}/>
                ))}
            </div>
        </div>
    );
};
export default MagazineFeed;