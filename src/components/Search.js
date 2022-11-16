import React from 'react';

function Search ({searchValue, setSearchValue}) {


    return (
        <div id='search-page'>
            <div id='search-container'>
                <label>
                    <input 
                        id='search-input'
                        type="text" 
                        name="name"
                        placeholder='Whatchya looking for?'
                        value={searchValue}
                        onChange={ (e) => {setSearchValue(e.target.value)}} />
                </label>
                    <input
                        id='submit-input'
                        type="submit" 
                        value="Search" />
            </div>
            {/* <div id='category-filter'>
                <option onClick={ (e) => {console.log(e.target.value)}} value="🎶">🎶</option>
                <option onClick={ handleFilter } value="🎨">🎨</option>
                <option onClick={ handleFilter } value="☕️">☕️</option>
                <option onClick={ handleFilter } value="🌭">🌭</option>
                <option onClick={ handleFilter } value="🍸">🍸</option>  
            </div> */}
        </div>
    )
}

export default Search;