import React from 'react';


const SearchBox=({searchChange})=>{
    return(
        
        <div className='pa2'>
            <input 
            onChange={searchChange} 
            className='pa2 tc ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='Search Me'
            />
        </div>
    )
}
export default SearchBox;