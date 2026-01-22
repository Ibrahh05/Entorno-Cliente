import { useState } from 'react'
function App() {
const [newContador, setContador] = useState(0)
const [isParagraphVisible, setIsParagraphVisible] = useState(true)
const [modo, setModo] = useState('')
const toggleStatus = () => {
setIsParagraphVisible(!isParagraphVisible)
}
if (newContador<0){
    setContador(0)
}
    return (
        <>
            <h1>Ocultar parrafo</h1>
            {isParagraphVisible && (
            <p>Dejen de esclavizarnos porfavor 😢</p>
            )}
            <button onClick={toggleStatus}>
            {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
            </button>
            <br></br>
            <br></br> 
            <h1>Contador con botones</h1>
            <button onClick={() => setContador((n) => n + 1)}>Sumar</button>
            <button onClick={() => setContador((n) => n - 1)}>Restar</button>
            {
            <h2>Contador: {newContador} </h2>
            }
            <h1>Elije tu modo</h1>
            <input
            type="text"
            placeholder="Escribe tu modo"
            value={modo}
            onChange={(e) => setModo(e.target.value)}
            />
            <p>Tu modo es: <strong>{modo|| '...'} </strong></p>
        </>
    )
}
export default App