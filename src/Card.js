import React from 'react';

const Card=({id,name,hobby})=>{
    return(
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow shadow-1 ba bw2'>
            <img src={`https://robohash.org/${id}?set=set4`} alt='image'/>
            <div>
                <h1>{name}</h1>
                <p>Hobby : {hobby}</p>
            </div>
        </div>

    )
}
export default Card;