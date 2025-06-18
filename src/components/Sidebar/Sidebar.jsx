import "./Sidebar.css";
import { useState, useEffect, useReducer } from "react";

// Reducer para manejar estadísticas del sidebar
const statsReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_CLICKS':
            return {
                ...state,
                totalClicks: state.totalClicks + 1,
                clickHistory: [...state.clickHistory, action.section]
            };
        case 'RESET_STATS':
            return {
                totalClicks: 0,
                clickHistory: []
            };
        default:
            return state;
    }
};

export const Sidebar = () => {
    const [active, setActive] = useState("inicio");
    const [lastVisited, setLastVisited] = useState(null);
    const [timeSpent, setTimeSpent] = useState(0);
    
    // useReducer para estadísticas
    const [stats, dispatch] = useReducer(statsReducer, {
        totalClicks: 0,
        clickHistory: []
    });

    // useEffect para tiempo transcurrido
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSpent(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // useEffect para guardar última visita
    useEffect(() => {
        setLastVisited(new Date().toLocaleTimeString());
    }, [active]);

    const handleNavClick = (section) => {
        setActive(section);
        dispatch({ type: 'INCREMENT_CLICKS', section });
    };

    const resetStats = () => {
        dispatch({ type: 'RESET_STATS' });
        setTimeSpent(0);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li
                        className={active === "inicio" ? "active" : ""}
                        onClick={() => handleNavClick("inicio")}
                    >
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li
                        className={active === "servicios" ? "active" : ""}
                        onClick={() => handleNavClick("servicios")}
                    >
                        <a href="#servicios">Servicios</a>
                    </li>
                    <li
                        className={active === "contacto" ? "active" : ""}
                        onClick={() => handleNavClick("contacto")}
                    >
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
            
            <div className="sidebar-stats">
                <h4>Estadísticas</h4>
                <p>Tiempo: {formatTime(timeSpent)}</p>
                <p>Clicks: {stats.totalClicks}</p>
                <p>Última visita: {lastVisited}</p>
                <button onClick={resetStats} className="reset-btn">
                    Reset
                </button>
            </div>
        </aside>
    );
};
