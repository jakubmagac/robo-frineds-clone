import React from 'react'
import Card from './Card'

const Cardlist = (props) => {
    const { characters } = props; 
    return(
        <div className="wrapper">
            {characters.map(character => <Card character={character}/>)}
        </div>
    )
    
    
    
}

export default Cardlist;

