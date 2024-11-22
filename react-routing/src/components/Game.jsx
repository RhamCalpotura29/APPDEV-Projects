import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation(); // Use consistent variable naming
    const game = location.state?.game; // Use optional chaining to avoid errors if state is undefined

    if (!game) {
        return <p>Game details not available. Please navigate properly.</p>;
    }

    return (
        <div>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
        </div>
    );
}
