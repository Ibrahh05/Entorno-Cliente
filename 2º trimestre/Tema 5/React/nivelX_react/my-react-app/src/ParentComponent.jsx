import { useState } from "react"
import ChildComponent from "./ChildComponent"

function ParentComponent() {
    const [name, setName] = useState("Juanaco")

    function greetings() {
        return "Un pollito fango o que chavales?!! 😜"
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
