import React from 'react'
import '../Section/Section.css'
import userImg from '../../assets/snake.png'
import watermelonimg from '../../assets/watermelon.png'
const fruits=['watermelon','apple','blueberry']
const users=[
    {
        id:1,
        name:'apple',
        descripcion:'apple red',
        img:'userImg'
    },
        {
        id:2,
        name:'watermelon',
        descripcion:'watermelon green',
        img:'watermelonimg'
    }
]

export default function Section() {
    return(
        <section className='Section'>
            {
                users.map(users=>{
                    return(
                    <div key={users.id}>
                        <img src= {userImg} alt={users.name} />
                        <h2>{users.name}</h2>
                        <p>{users.descripcion}</p>
                    </div>
                    )
                })
                
            }
        </section>
    )
}
