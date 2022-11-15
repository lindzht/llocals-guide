import React from 'react';

function Search () {
    return (
        <div>
             <label>
                <input 
                    type="text" 
                    name="name" />
            </label>
                <input 
                    type="submit" 
                    value="Search" />
        </div>
    )
}

export default Search;