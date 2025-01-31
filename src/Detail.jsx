import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const[data,setData]=useState([])
    const{id}=useParams()
    console.log("-------",id);
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            console.log(response);
            setData(response.data)
        }
           fetchdata()
        },[] )




  return (
    <div className='text-black flex flex-col gap-4 w-[800px] mx-auto'>
        <h1>{data.Title}</h1>
        <img src={data.Poster} alt={data.Title} className='w-1/2 mx-auto' />
        <p>{data.Plot}</p>
    </div>
  )
}

export default Detail