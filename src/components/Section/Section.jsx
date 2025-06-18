import React, { useState } from 'react';
import '../Section/Section.css';
import userImg from '../../assets/snake.png';
import watermelonimg from '../../assets/watermelon.png';
import blueberryimg from '../../assets/blueberry.png';
import UserCard from '../Usercard/UserCard';

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
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <section className="Section">
            {users.map((user) => {
                return (
                    <UserCard key={user.id} user={user} />
                )
            })}
        </section>
    );
}