import React from 'react'

const Searchbar = (props) => {
    const { searchChange } = props;
    return(
        <div className="wrapper">
            <input type="text" onChange={searchChange}/>
        </div>
    )
    
    
    
}

export default Searchbar;

