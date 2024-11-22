import { useLocation } from "react-router-dom";

export default function GameDetails() {
    const location = useLocation();
    const game = location.state?.game;

    if (!game) {
        return <p>Game details not found. Please navigate from the games list.</p>;
    }

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "10px", marginBottom: "1rem" }} />
            <p>{game.description}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Author:</strong> {game.author}</p>
            <h2>Reviews</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
                {game.reviews.map((review, index) => (
                    <li key={index} style={{ marginBottom: "1rem" }}>
                        <strong>{review.reviewer}:</strong> {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
