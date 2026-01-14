function UserComponent() { return <h2>Usuario: Ibrahim</h2>; }
function ProfileComponent() { return <p>Bio: Peluquero aficionado.</p>; }
function FeedComponent() { return <ul><li>feed 1</li><li>feed 2</li></ul>; }

function ParentComponent() {
return (
    <div>
    {/*Componente de usuario*/}
    <UserComponent />
    {/*Componente de perfil*/}
    <ProfileComponent />
    <hr/>
    {/*Finalmente el de feed*/}
    <FeedComponent />
    </div>
);
}
//Devuelvo el componente padre
export default function App() {
    return <ParentComponent />;
}