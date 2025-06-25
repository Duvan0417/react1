import React, { useState } from 'react'; // Importa React y el hook useState
import '../Section/Section.css'; // Importa los estilos CSS para la sección
import userImg from '../../assets/snake.png'; // Importa la imagen de la manzana
import watermelonimg from '../../assets/watermelon.png'; // Importa la imagen de la sandía
import blueberryimg from '../../assets/blueberry.png'; // Importa la imagen de los arándanos
import UserCard from '../Usercard/UserCard'; // Importa el componente UserCard

// Array de objetos que representan a los usuarios
const users = [
    {
        id: 1,
        name: 'apple', // Nombre del usuario
        descripcion: 'apple red', // Descripción del usuario
        img: userImg // Imagen del usuario
    },
    {
        id: 2,
        name: 'watermelon', // Nombre del usuario
        descripcion: 'watermelon green', // Descripción del usuario
        img: watermelonimg // Imagen del usuario
    },
    {
        id: 3,
        name: 'blueberry', // Nombre del usuario
        descripcion: 'blueberry', // Descripción del usuario
        img: blueberryimg // Imagen del usuario
    }
];

// Componente funcional Section
export default function Section() {
    const [count, setCount] = useState(0); // Estado para contar interacciones (inicialmente 0)
    console.log(count); // Muestra el valor actual del contador en la consola

    // Renderizado del componente
    return (
        <section className="Section"> {/* Contenedor principal de la sección */}
            {users.map((user) => { // Itera sobre el array de usuarios
                return (
                    <UserCard key={user.id} user={user} /> // Renderiza un UserCard para cada usuario
                )
            })}
        </section>
    );
}
