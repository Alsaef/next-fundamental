'use client'
import Counter from "@/Components/counter/Counter";
import { useEffect, useState } from "react";

const  Home = ()=> {
  const [toods,setToods]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/blog').then(res=>res.json()).then(data=>setToods(data.data))
  },[])
  return (
    <div>
      next js react
      {
        toods.map((toodo,index)=>(
          <h2 key={index+1}>{toodo.name}</h2>
        ))
      }
    </div>
  );
}


export default Home