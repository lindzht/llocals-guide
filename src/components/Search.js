import React from 'react';

function Search ({searchValue, setSearchValue, elevatorFunction}) {


    function handleFilter (e){
        elevatorFunction(e.target.value)
    }


    return (
        <div>
            <div>
                <label>
                    <input 
                        type="text" 
                        name="name"
                        value={searchValue}
                        onChange={ (e) => {setSearchValue(e.target.value)}} />
                </label>
                    <input 
                        type="submit" 
                        value="Search" />
            </div>
            <div>
                <option onClick={ handleFilter } value="🎶">🎶</option>
                <option onClick={ handleFilter } value="🎨">🎨</option>
                <option onClick={ handleFilter } value="☕️">☕️</option>
                <option onClick={ handleFilter } value="🌭">🌭</option>
                <option onClick={ handleFilter } value="🍸">🍸</option>  
            </div>
        </div>
    )
}

export default Search;