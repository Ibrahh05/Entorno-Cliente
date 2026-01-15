import { useState } from "react"
import ChildComponent from "./ChildComponent"

function ParentComponent() {
    const [name, setName] = useState("Juanaco")

    function greetings() {
        return "Frase chorra que ahora mismo no se me ocurre"
    }

    return (
        <ChildComponent
        name={name}
        age={24}
        hobbies={["LOL", "Cerveza"]}
        occupation="Esclavo de DAW2"
        greetings={greetings}
        setName={setName}
        />
    )
}

export default ParentComponent
