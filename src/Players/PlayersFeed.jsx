import React, {useState} from "react";
import Player from "./Player";
import classes from "./PlayersFeed.module.css"
const PlayersFeed = () => {
    const [players, setPlayers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://643d63e06afd66da6af5b964.mockapi.io/players')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setPlayers(arr)
            })
    },[]);

    const [value, setValue] = useState('')

    const filteredPlayers = players.filter(player => {
        return player.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <h1 className={classes.title}>Игроки Storm Wolves</h1>
            <div className={classes.form}>
                <form className={classes.searchForm}>
                    <input type="text"
                           placeholder="Введите имя/никнейм игрока..."
                           className={classes.searchInput}
                           onChange={(event) => setValue(event.target.value) }
                    />
                </form>
            </div>
            <div className={classes.allPlayers}>
                {filteredPlayers .map((item, index) => (
                    <Player key={index} players={item}/>
                ))}
            </div>
        </div>
    );
};

export default PlayersFeed;