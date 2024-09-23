import Counter from '@/Components/counter/Counter';
import React from 'react';

const page =async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res= await fetch(`${apiUrl}/api/blog`)
    const data=await res.json()
    const blogs= data.data
    return (
        <div>
            blogs

            {
                blogs.map((blog,index)=>(
                    <h2 key={index+1}>{blog.name}</h2>
                ))
            }
            {/* client */}
            <Counter></Counter>
            {/* client */}
        </div>
    );
};

export default page;