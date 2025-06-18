import { useState } from "react"
import '../Usercard/UserCard.css'

export default function UserCard({ user }) {
    const [isContacted, setIsContacted] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const { id, name, descripcion, img } = user;
    
    const handleClick = () => {
        setIsContacted(!isContacted);
        setShowInfo(!showInfo);
    }
    
    console.log(`tarjeta de ${name} fue renderizado`);
    
    return (
        <div className='card'>
            <img className='image' src={img} alt={name} />
            <h2 className='h2'>{descripcion}</h2>
            <button 
                onClick={handleClick} 
                className='button'
                style={{
                    backgroundColor: isContacted ? '#45a049' : '#4CAF50'
                }}
            >
                {isContacted ? 'Contactado' : 'Contactar'}
            </button>
            
            {showInfo && (
                <div className="user-info">
                    <h3>Información del usuario:</h3>
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Nombre:</strong> {name}</p>
                    <p><strong>Descripción:</strong> {descripcion}</p>
                    <p><strong>Estado:</strong> {isContacted ? 'Contactado' : 'No contactado'}</p>
                </div>
            )}
        </div>
    )
}