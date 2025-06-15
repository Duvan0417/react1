import React from 'react';
import '../Section/Section.css';
import userImg from '../../assets/snake.png';
import watermelonimg from '../../assets/watermelon.png';
import blueberryimg from '../../assets/blueberry.png';

const fruits = ['watermelon', 'apple', 'blueberry'];

const users = [
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
    }
];

export default function Section() {
    const handleClick = (name) => {
        console.log(`Contactarle a ${name}`);
    };

    return (
        <section className='Section'>
            {users.map(({ id, name, descripcion, img }) => (
                <div className='card' key={id}>
                    <img className='image' src={img} alt={name} />
                    <h2 className='h2'>{descripcion}</h2>
                    <button id={id} onClick={() => handleClick(name)} className='button'>Contactarle</button>
                </div>
            ))}
        </section>
    );
}