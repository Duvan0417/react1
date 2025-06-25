import { useState } from "react"; // Importa el hook useState de React para manejar el estado
import '../Usercard/UserCard.css'; // Importa los estilos CSS específicos para este componente

// Componente funcional UserCard que recibe un objeto user como prop
export default function UserCard({ user }) {
    // Estado que indica si el usuario ha sido contactado (inicialmente false)
    const [isContacted, setIsContacted] = useState(false);
    // Estado que controla la visibilidad de la información adicional del usuario (inicialmente false)
    const [showInfo, setShowInfo] = useState(false);
    
    // Desestructuración del objeto user para obtener sus propiedades
    const { id, name, descripcion, img } = user;
    
    // Función que alterna el estado de isContacted y showInfo al hacer clic en el botón
    const handleClick = () => {
        setIsContacted(!isContacted); // Cambia el estado de contacto
        setShowInfo(!showInfo); // Cambia la visibilidad de la información
    }
    
    // Registro en consola para verificar cuándo se renderiza la tarjeta
    console.log(`tarjeta de ${name} fue renderizado`);
    
    // Renderizado del componente
    return (
        <div className='card'> {/* Contenedor principal del componente */}
            <img className='image' src={img} alt={name} /> {/* Imagen del usuario */}
            <h2 className='h2'>{descripcion}</h2> {/* Descripción del usuario */}
            <button 
                onClick={handleClick} // Maneja el evento de clic
                className='button'
                style={{
                    backgroundColor: isContacted ? '#45a049' : '#4CAF50' // Cambia el color según el estado
                }}
            >
                {isContacted ? 'Contactado' : 'Contactar'} {/* Texto del botón basado en el estado */}
            </button>
            
            {/* Renderiza información adicional del usuario si showInfo es true */}
            {showInfo && (
                <div className="user-info">
                    <h3>Información del usuario:</h3>
                    <p><strong>ID:</strong> {id}</p> {/* Muestra el ID del usuario */}
                    <p><strong>Nombre:</strong> {name}</p> {/* Muestra el nombre del usuario */}
                    <p><strong>Descripción:</strong> {descripcion}</p> {/* Muestra la descripción del usuario */}
                    <p><strong>Estado:</strong> {isContacted ? 'Contactado' : 'No contactado'}</p> {/* Estado de contacto */}
                </div>
            )}
        </div>
    );
}
