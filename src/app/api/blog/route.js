import { NextResponse } from "next/server";


const blogs = [
    {
      name: 'Web Development Trends 2023',
      description: 'A deep dive into the latest trends in web development, including frameworks, tools, and best practices for 2024.'
    },
    {
      name: 'Understanding React Hooks',
      description: 'An in-depth guide on how to effectively use React hooks such as useState, useEffect, and custom hooks to manage state and side effects.'
    },
    {
      name: 'Node.js Performance Optimization',
      description: 'Tips and techniques to optimize the performance of your Node.js applications, covering topics like event loop, asynchronous programming, and memory management.'
    },
    {
      name: 'Building Scalable APIs with Express.js',
      description: 'Learn how to design and build scalable APIs using Express.js, including middleware, routing, and database integration.'
    },
    {
      name: 'Mastering CSS Grid and Flexbox',
      description: 'A comprehensive guide to mastering layout techniques with CSS Grid and Flexbox to create responsive, flexible designs.'
    }
  ];
  


export  async function GET(request) {
    return NextResponse.json({message:'blog api',data:blogs})
}


