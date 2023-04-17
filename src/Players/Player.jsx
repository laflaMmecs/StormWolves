import React from 'react';
import classes from "../Players/Player.module.css";

const Player = ({players}) => {
    return (
        <div>
            <div className={classes.playerCart}>
                <h1 className={classes.playerTitle}>{players.title}</h1>
                <div className={classes.firstBlock}>
                    <img src={players.imgUrl} className={classes.img}/>
                    <div className={classes.leftBlock}>
                        <div className={classes.career}>{players.career}</div>
                        <div className={classes.achievements}>{players.achievements}</div>
                    </div>
                </div>
                <div className={classes.biography}>{players.biography}</div>
            </div>
        </div>
    );
};

export default Player;