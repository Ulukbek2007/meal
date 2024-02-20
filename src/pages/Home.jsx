import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`
const Home = ({ search ,searchData,leta}) => {
    const [data, setData] = useState(null)

    async function getMeal() {
        const data = await axios.get(url)
        console.log(data.data.meals);
        setData(data.data.meals)
    }
    useEffect(() => {
        getMeal()
    }, [])
    if (data === null) {
        return <h1>Loading</h1>
    }
    return (

        <div className='cards'>
            <div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center',flexDirection:'column' ,paddingTop:'20px'}}>
                    <input
                    style={{height:'40px',borderRadius:'6px'}}
                        value={search}
                        onChange={(e) => searchData(e.target.value)}
                        type="text" placeholder="Search..." />
                        <div style={{display:'flex',gap:'50px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <h2 style={{ color: 'white' }}>Total meals: </h2><p style={{ color: 'white' }}>302</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <h2 style={{ color: 'white' }}>Show meals: </h2>
                        <p style={{ color: 'white' }}>{302 + data.length - 302}</p>
                    </div>
                    </div>
                </div>
                <div className='cart' style={{ display: 'flex', flexWrap: 'wrap', gap: '35px', justifyContent: 'center' }}>

                    {data.filter(el => el.strMeal.includes(search) || el.strMeal.toLowerCase().includes(search) || el.strMeal.toUpperCase().includes(search)).map((el) => (

                        <Link to={`/detail/${el.idMeal}`} style={{ textDecoration: 'none' }}>
                            <div className='ichkicart' key={el.idMeal}>
                                <img width={250} height={250} src={el.strMealThumb} alt="" />
                                <p style={{ fontSize: '14px', }}>{el.strMeal.length > 20 ? el.strMeal.slice(0, 20) + "..." : el.strMeal}</p>
                            </div>
                        </Link>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home