import "./App.css";
import styles from './App.module.css';
import classNames from 'classnames';
function App() {


    return (
        <>
        <br />
        <br />
            <h3>(∩｀-´)⊃━━☆ﾟ.*･｡ﾟ . . . . . . . . . .─╤╦︻3=(◣_◢)=Ƹ︻╦╤─</h3>
            <h1 >⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⋆༺𓆩⚔𓆪༻⋆⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘</h1>
            <p >Dejen la exclavitud (╯︵╰,)</p>
            <br/>
            <div className={styles.fuenteBase}>
                <div className={styles.tarjetaAzul}>
                    Esta es una tarjeta con estilo local.
                </div>
                <div className={classNames(styles.tarjetaAzul, styles.bordeResaltado)}>
                    Esta tarjeta tiene fondo azul Y borde resaltado.
                </div>
                </div>
            <div className='p-6'>
            <h1 className='text-3xl font-bold'>CSS en React</h1>
            <p className='mt-2 text-sm opacity-80'>
            Estilos con clases de utilidad
            </p>
            <button className='mt-4 px-4 py-2 text-white bg-blue-500 rounded'>
            Suscribirme
            </button>
            </div>
        </>
    )
}
export default App