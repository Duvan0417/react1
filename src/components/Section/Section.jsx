import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import '../Section/Section.css'; // Importa los estilos CSS para la sección
import userImg from '../../assets/snake.png'; // Importa la imagen de la serpiente
import watermelonimg from '../../assets/watermelon.png'; // Importa la imagen de la sandía
import blueberryimg from '../../assets/blueberry.png'; // Importa la imagen de los arándanos
import pixelimg from '../../assets/apple.png'; // Importa la imagen de la manzana
import UserCard from '../Usercard/UserCard'; // Importa el componente UserCard

// Array de objetos que representan a los usuarios locales
const localUsers = [
    {
        id: 1,
        name: 'apple',
        descripcion: 'apple red',
        img: userImg
    },
    {
        id: 2,
        name: 'watermelon',
        descripcion: 'watermelon green',
        img: watermelonimg
    },
    {
        id: 3,
        name: 'blueberry',
        descripcion: 'blueberry',
        img: blueberryimg
    },
    {
        id: 4,
        name: 'pixel',
        descripcion: 'pixel black',
        img: pixelimg
    }
];

// Componente funcional Section
export default function Section() {
    const [count, setCount] = useState(0); // Estado para contar interacciones
    const [apiUsers, setApiUsers] = useState([]); // Estado para almacenar usuarios de la API
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    // useEffect para cargar datos de la API al montar el componente
    useEffect(() => {
        console.log("Ejecutando effect - cargando datos de la API");
        
        fetch('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
            .then(res => res.json())
            .then(data => {
                console.log('Datos de la API:', data.users);
                
                // Mapear los datos de la API al formato esperado por UserCard
                const mappedUsers = data.users.map(user => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    descripcion: `${user.age} años - ${user.email}`,
                    img: user.image // La API proporciona la URL de la imagen
                }));
                
                setApiUsers(mappedUsers);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar datos de la API:', error);
                setLoading(false);
            });
    }, []);

    console.log("Después del effect");

    const handleClick = () => {
        setCount(count + 1);
    }

    // Renderizado del componente
    return (
        <div>
            <section className='cont'>
                <h2>{count}</h2>
                <button onClick={handleClick}>contador</button>
            </section>

            {/* Sección para usuarios locales */}
            <section className="Section">
                <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                    Usuarios Locales
                </h2>
                {localUsers.map((user) => {
                    return (
                        <UserCard key={`local-${user.id}`} user={user} />
                    )
                })}
            </section>

            {/* Sección para usuarios de la API */}
            <section className="Section">
                <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                    Usuarios de la API
                </h2>
                {loading ? (
                    <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
                        <p>Cargando usuarios...</p>
                    </div>
                ) : (
                    apiUsers.map((user) => {
                        return (
                            <UserCard key={`api-${user.id}`} user={user} />
                        )
                    })
                )}
            </section>
        </div>
    );
}