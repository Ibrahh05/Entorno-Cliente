import { useState } from 'react'
import PropTypes from "prop-types"

function App() {
    const [user, setUser] = useState(null)
    const [newEmails, setNewEmails] = useState(0)
    
    // Variable JSX para renderizado parcial del botón
    const button = user
        ? <button onClick={() => setUser(null)}>Logout</button>
        : <button onClick={() => setUser({ name: 'Ibra' })}>Login</button>
    
    return (
        <>
            <h1>Hola exclavillo de DAW2</h1>
            
            {/* Renderizado del botón desde variable */}
            {button}
            
            {/* Ternario para mensaje de bienvenida */}
            {user ? (
                <p>Bienvenido, {user.name}.</p>
            ) : (
                <p>Inicia sesión para continuar.</p>
            )}
            
            <hr />
            
            {/* Botones para sumar y resetear emails */}
            <button onClick={() => setNewEmails((n) => n + 1)}>
                +1 email
            </button>
            <button onClick={() => setNewEmails(0)}>
                Reset
            </button>
            
            {/* Operador && para mostrar notificación solo si hay emails */}
            {newEmails > 0 && (
                <h2>Tienes {newEmails} nuevas palomas mensajeras esperando.</h2>
            )}
        </>
    )
}

App.propTypes = {
    user: PropTypes.bool
}

export default App