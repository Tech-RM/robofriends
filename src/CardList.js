import React from 'react';
import Card from './Card';


const CardList=({cats})=>{
    const userList=cats.map((cat,i)=>{
        return <Card key={i}
                    id={cats[i].id} 
                    name={cats[i].name} 
                    hobby={cats[i].hobby}
                    />
    })
    return(
            <div>
                {userList}     
            </div>
        )
}

export default CardList;