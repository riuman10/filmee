import React from 'react';
import './card.css'


function Card(props) {
    return(
        <div className='card'>
            <img src={props.image} alt={props.title} />
            <p className='genre'>Genre : <span className='genre-type'>{props.genre}</span></p>
            <h1>{props.title}</h1>
            <p><span className='span'>Rating: </span>{props.rating}</p> 

        </div>
    )
}

export default Card; 