import Counter from '@/Components/counter/Counter';
import React from 'react';

const page =async () => {
    const res= await fetch(`${process.env.baseUrl}/api/blog`)
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