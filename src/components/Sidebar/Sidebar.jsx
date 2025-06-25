import "./Sidebar.css"; // Importa los estilos CSS para el sidebar
import { useState, useEffect, useReducer } from "react"; // Importa hooks de React

// Reducer para manejar estadísticas del sidebar
const statsReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_CLICKS':
            return {
                ...state,
                totalClicks: state.totalClicks + 1, // Incrementa el contador de clics
                clickHistory: [...state.clickHistory, action.section] // Agrega la sección a la historia de clics
            };
        case 'RESET_STATS':
            return {
                totalClicks: 0, // Reinicia el contador de clics
                clickHistory: [] // Reinicia la historia de clics
            };
        default:
            return state; // Retorna el estado actual si no coincide con ninguna acción
    }
};

// Componente funcional Sidebar
export const Sidebar = () => {
    const [active, setActive] = useState("inicio"); // Estado para la sección activa
    const [lastVisited, setLastVisited] = useState(null); // Estado para la última visita
    const [timeSpent, setTimeSpent] = useState(0); // Estado para el tiempo transcurrido
    
    // useReducer para manejar estadísticas del sidebar
    const [stats, dispatch] = useReducer(statsReducer, {
        totalClicks: 0, // Contador de clics inicial
        clickHistory: [] // Historia de clics inicial
    });

    // useEffect para actualizar el tiempo transcurrido cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSpent(prev => prev + 1); // Incrementa el tiempo cada segundo
        }, 1000);

        return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
    }, []);

    // useEffect para guardar la última visita cada vez que cambia la sección activa
    useEffect(() => {
        setLastVisited(new Date().toLocaleTimeString()); // Establece la última visita con la hora actual
    }, [active]);

    // Función para manejar clics en la navegación
    const handleNavClick = (section) => {
        setActive(section); // Actualiza la sección activa
        dispatch({ type: 'INCREMENT_CLICKS', section }); // Incrementa el contador de clics
    };

    // Función para reiniciar las estadísticas
    const resetStats = () => {
        dispatch({ type: 'RESET_STATS' }); // Reinicia las estadísticas
        setTimeSpent(0); // Reinicia el tiempo transcurrido
    };

    // Función para formatear el tiempo en minutos y segundos
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60); // Calcula los minutos
        const secs = seconds % 60; // Calcula los segundos restantes
        return `${mins}:${secs.toString().padStart(2, '0')}`; // Retorna el tiempo formateado
    };

    // Renderizado del componente
    return (
        <aside className="sidebar"> {/* Contenedor principal del sidebar */}
            <nav>
                <ul>
                    <li
                        className={active === "inicio" ? "active" : ""} // Clase activa si es la sección actual
                        onClick={() => handleNavClick("inicio")} // Maneja clic en "Inicio"
                    >
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li
                        className={active === "servicios" ? "active" : ""} // Clase activa si es la sección actual
                        onClick={() => handleNavClick("servicios")} // Maneja clic en "Servicios"
                    >
                        <a href="#servicios">Servicios</a>
                    </li>
                    <li
                        className={active === "contacto" ? "active" : ""} // Clase activa si es la sección actual
                        onClick={() => handleNavClick("contacto")} // Maneja clic en "Contacto"
                    >
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
            
            <div className="sidebar-stats"> {/* Sección de estadísticas */}
                <h4>Estadísticas</h4>
                <p>Tiempo: {formatTime(timeSpent)}</p> {/* Muestra el tiempo transcurrido */}
                <p>Clicks: {stats.totalClicks}</p> {/* Muestra el total de clics */}
                <p>Última visita: {lastVisited}</p> {/* Muestra la última visita */}
                <button onClick={resetStats} className="reset-btn"> {/* Botón para reiniciar estadísticas */}
                    Reset
                </button>
            </div>
        </aside>
    );
};
