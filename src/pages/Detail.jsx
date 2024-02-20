import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const params=useParams()
    const [tamak,setTamak]=useState(null)
    async function getMealById(mealId) {
        const {data}=await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+mealId)        
       setTamak(data.meals[0])
       console.log(data.meals[0]);
    }
   
    useEffect(()=>{
        getMealById(params.id)
    },[params.id])
    if (tamak===null) {
        return <h1>Loading</h1>
    }
  return (
    <div className='detailcard'> 
    <div className="detailmincard">
    <h1 className='detailname'>{tamak.strMeal}</h1>

        <img height={400} width={400} src={tamak.strMealThumb} alt="" />
        
</div>
<div className="detailinstruction">
  <h2>Instructions</h2>
  <p>{tamak.strInstructions
}</p>
</div>
    </div>
  )
}

export default Detail