import React from 'react';
import classes from './Results.module.css'


const Results = ({matches}) => {

    return (
        <div>
            <div>
                <div className={classes.champTitle}>
                    <img className={classes.imgTitle} src={matches. titleImg}/>
                    <h3 className={classes.title}>{matches.title}</h3>
                </div>
                <div className={classes.matchScore}>
                    <div className={classes.team1}>
                        <img className={classes.img1} src={matches. teamOneImg}/>
                        <div className={classes.teamName}>{matches.teamOne}</div>
                    </div>
                    <div className={classes.score}>{matches.score}</div>
                    <div className={classes.team2}>
                        <img className={classes.img} src={matches. teamTwoImg}/>
                        <div className={classes.teamName}>{matches.teamTwo}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;