import PropTypes from 'prop-types';
export default function Body(props) {
    return(
        <div className="person">
            <img src="https://placeholder.pics/svg/150x150" alt="profile-icon" />

            <p>This is <strong>{props.name}'s</strong> favorite food: </p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it Health? {props.isHealth ? "Yes" : "No"}</p>
            <p><strong>{props.name} is {props.age} years old </strong></p>
        </div>
    )
}

Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealth: PropTypes.bool,
    age: PropTypes.number
}

Body.defaultProps = {
    name: "Guest",
    food: "Unknown",
    isHealth: false,
    age: 0
}