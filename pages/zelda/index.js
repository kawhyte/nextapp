import React from 'react';

import style from '../../styles/Zelda.module.css'


export const getStaticProps = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/users')

const data = await response.json();

return {
    props:{zelda: data}
}


}

const Zelda = ({zelda}) => {
    return (
        <div>
           <h1> All Zelda Characters</h1> 

            {zelda.map(zelda => (
                <div key ={zelda.id}>
                <a className={style.single}>
                <p>{zelda.name}</p>
                </a>
                </div>

            ))}
        </div>
    )
}

export default Zelda
