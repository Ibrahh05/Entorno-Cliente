import PropTypes from "prop-types"

function ChildComponent(props) {
    return (
        <>
        <h2>Hello {props.name}</h2>
        <p>Edad: {props.age}</p>
        <p>Ocupación: {props.occupation}</p>
        <p>{props.greetings()}</p>

        <button onClick={() => props.setName("Juanky")}>
            Change to Juanky
        </button>

        <button onClick={() => props.setName("Ibrahim")}>
            Change to Ibrahim
        </button>
        </>
    )
}

ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    occupation: PropTypes.string.isRequired,
    greetings: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
}



export default ChildComponent
