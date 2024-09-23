'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
    return (
        <div className='flex flex-col items-center'>
             
  <p className='text-xl'>{count}</p>
     <button onClick={()=>setCount(count+1)}>plus +</button>
     <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    );
};

export default Counter;