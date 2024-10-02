import React, {useState} from 'react'

export default function FavoriteGames(){
    const [games, setGames] = useState(["Hades", "Risk of Rain 2", "Doomsday Hunters"])

    //function to add game
    function handleAddGame(){
        //referencing text box
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])
        //reset
        document.getElementById("gameInput").value = " ";
    }
    //function to remove a game from the list
    function handleRemoveGames(index){
        const newGame = games.filter((game, i) => i !== index)
        setGames(newGame)
    }


    return(
        <>
        <div>
            <h2>This are my Favorite Games in 2024</h2>
            <ul>
                {
                    games.map((game, index) => <li key={index} onClick={() => handleRemoveGames(index)}>{game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput" />
            <button type="button" onClick={handleAddGame}>Add Games</button>
        </div>
        </>
    )
}