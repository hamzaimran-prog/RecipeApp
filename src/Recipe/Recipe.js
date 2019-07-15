import React from 'react';
// import App from './detkails';
import '../App.css';

const Recipe = ({label,calorie,image}) =>{


    return(

        
        <div>
            
            <div className='Main'>
            <div className='Recipe_Con'>
            <h1>Label : {label}</h1>
            <p>Calorie : {calorie}</p>
            <img src={image}/>
            </div>
            </div>
            
        </div>
    )

}
export default Recipe;