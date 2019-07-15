import React, { useEffect,useState } from 'react';
import Recipe from './Recipe';

const App = () => {
    
   
    const APP_ID = "7d9875c6";
    const APP_KEYS="5bf8cc4608fb83b703616a8596154c01";

    // const [counter,SetCounter] = useState(0); 
    
    const [recipes,SetRecipes] = useState([]);
    const [search,setSearch] = useState("");

    const [query,Setquery] = useState("chicken");
    
    
    const ExampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`;
    
    
    useEffect(()=>{
    
        getRecipes();

    },[query]);
    
    const getRecipes  = async () => {

        const response = await fetch(ExampleReq);
        const data = await response.json();
        console.log(data.hits);
        SetRecipes(data.hits);

    }

    const getSearch = e =>{

        setSearch(e.target.value);
        console.log(search);

    }

    const getsearchHandler = e =>{

        e.preventDefault();

        Setquery(search);
        setSearch("");

    }

return(

    <div>
        <h1 className='head1'>Basic Recipe App</h1>
        <div className='search-form'>
            <form onSubmit={getsearchHandler}>
                <input type='text' placeholder='Search' value={search} onChange={getSearch}/>
                <button type='submit'>Search</button>
            </form>
            </div>
            {/* <h1 onClick={ () => { SetCounter(counter+1)}}>{counter}</h1> */}
            {

                recipes.map((obj,i) => (

                    <Recipe i={obj.recipe.source} label={obj.recipe.label} calorie={obj.recipe.calories} image={obj.recipe.image}/>

                ))

            }
        
    </div>

)

}
export default App;