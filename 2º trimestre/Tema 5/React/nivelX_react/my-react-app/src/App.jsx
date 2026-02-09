import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pass, setPass] = useState('');
    const [passError, setPassError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError || emailError || passError) {
            alert('No se puede enviar: el formulario contiene errores');
        } else {
            alert(`Enviado: ${username}`);
        }
    };

    const handleUsername = (e) => {
        const { value } = e.target;
        setUsername(value);
        if (value.length <= 6) {
            setUsernameError('El username debe tener más de 6 caracteres');
        } else {
            setUsernameError('');
        }
    };

    const handleEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
        if (!value.includes('@') || !value.includes('.')) {
            setEmailError('El email debe contener @ y un punto');
        } else {
            setEmailError('');
        }
    };

    const handlePass = (e) => {
        const { value } = e.target;
        setPass(value);
        if (value.length < 8) {
            setPassError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setPassError('');
        }
    };

    const botonDeshabilitado = usernameError || emailError || passError || !username || !email || !pass;

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
            <div>
                Username: 
                <input type="text" value={username} onChange={handleUsername} />
                <p style={{ color: 'red' }}>{usernameError}</p>
            </div>

            <div>
                Email: 
                <input type="text" value={email} onChange={handleEmail} />
                <p style={{ color: 'red' }}>{emailError}</p>
            </div>

            <div>
                Password: 
                <input type="password" value={pass} onChange={handlePass} />
                <p style={{ color: 'red' }}>{passError}</p>
            </div>

            <button 
                disabled={botonDeshabilitado} 
                style={{ backgroundColor: botonDeshabilitado ? 'gray' : 'blue', color: 'white' }}
            >
                Submit
            </button>
        </form>
    );
}

export default App;