import { Link } from "react-router-dom";

const games = [
    {
        id: 1,
        name: "The Legend of Zelda",
        description: "Electronic action-adventure game franchise in which players take on the role of a young adventurer named Link, who often must assist a princess named Zelda in stopping the evil Ganon (in his monstrous pig form, Ganondorf in his human form) from cursing the magical land of Hyrule.",
        publisher: "Nintendo",
        author: "Shigeru Miyamoto",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9zuGyQeTIjyRRkbkkwcSF5SiziIdH3TlgA&s", 
        reviews: [
            { reviewer: "Alice", text: "A masterpiece of game design!" },
            { reviewer: "Bob", text: "The graphics and gameplay are outstanding." },
            { reviewer: "Charlie", text: "A true classic that stands the test of time." },
        ],
    },
    {
        id: 2,
        name: "God of War",
        description: "Players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. As the story progresses, Kratos is revealed to be Ares’ former servant, who had been tricked into killing his own family and is haunted by terrible nightmares",
        publisher: "Sony Interactive Entertainment",
        author: "David Jaffe",
        image: "https://images5.alphacoders.com/135/thumb-1920-1358420.png", 
        reviews: [
            { reviewer: "Daniel", text: "An epic tale with phenomenal combat mechanics." },
            { reviewer: "Eva", text: "The father-son relationship is incredibly touching." },
            { reviewer: "Frank", text: "One of the best games I've ever played." },
        ],
    },
    {
        id: 3,
        name: "Minecraft",
        description: "Players explore a procedurally generated, three-dimensional world with virtually infinite terrain made up of voxels. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.",
        publisher: "Mojang",
        author: "Markus Persson",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSaUB2toF4ErYCZPpNmlgiugdLWJE86e0ng&s", 
        reviews: [
            { reviewer: "Gina", text: "The perfect game for creativity and exploration." },
            { reviewer: "Hank", text: "Never gets old, no matter how much you play." },
            { reviewer: "Ivy", text: "Great for players of all ages." },
        ],
    },
    {
        id: 4,
        name: "Cyberpunk 2077",
        description: "An open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped-up in a do-or-die fight for survival. Explore the dark future, now upgraded with next-gen in mind and featuring free additional content!",
        publisher: "CD Projekt",
        author: "Adam Badowski",
        image: "https://www.videogameschronicle.com/files/2022/09/Cyberpunk-2077-edgerunners-update.jpg", 
        reviews: [
            { reviewer: "Jack", text: "A flawed gem with a compelling story." },
            { reviewer: "Kelly", text: "The world-building is top-notch." },
            { reviewer: "Liam", text: "Improved a lot since launch; now it's fantastic." },
        ],
    },
    {
        id: 5,
        name: "Hollow Knight",
        description: "A 2D Metroidvania action-adventure game, that takes place in Hallownest, a fictional ancient kingdom. The player controls an insect-like, silent, and nameless character while exploring the underground world.",
        publisher: "Team Cherry",
        author: "William Pellen",
        image: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w", // Add the image path
        reviews: [
            { reviewer: "Mia", text: "A stunning game with challenging gameplay." },
            { reviewer: "Nathan", text: "The atmosphere is unmatched." },
            { reviewer: "Olivia", text: "A work of art, both visually and mechanically." },
        ],
    },
];

export default function Games() {
    return (
        <div>
            <h1>Games List</h1>
            <ul style={{ listStyle: "none", padding: "0" }}>
                {games.map((game) => (
                    <li key={game.id} style={{ marginBottom: "1rem", display: "flex", gap: "1rem", borderBottom: "2px solid #eee", padding: "1rem" }}>
                        <img src={game.image} alt={game.name} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "10px" }} />
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                            <p><strong>Publisher:</strong> {game.publisher}</p>
                            <p><strong>Author:</strong> {game.author}</p>
                            <Link to={`/games/${game.id}`} state={{ game }}>View Reviews</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
