import { Link } from "react-router-dom";

const games = [
    {
        id: 1,
        name: 'TeamFight Tactics',
        description: 'This is the most popular chess auto battler in the world',
    },
    {
        id: 2,
        name: 'Valorant',
        description: 'This is the most popular FPS Game in the world',
    },
    {
        id: 3,
        name: 'CSGO 2',
        description: 'The sequel to the classic Counter-Strike',
    },
];

export default function Games() {
    return (
        <>
            <h1>This is my Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            {game.name.toUpperCase()} </Link> - {game.description}
                    </li>
                ))}
            </ul>
        </>
    );
}
