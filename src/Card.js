import React from 'react'

const Card = (props) => {
    const { image, name } = props.character;
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
        </div>
    )
    
    
    
}

export default Card;

