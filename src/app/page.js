'use client';
import Counter from "@/Components/counter/Counter";
import { useEffect, useState } from "react";

const Home = () => {
  const [toods, setToods] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/blog`);
        const data = await res.json();
        setToods(data.data || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [apiUrl]);

  return (
    <div>
      <h1>Next.js React</h1>
      {toods.map((toodo, index) => (
        <h2 key={index}>{toodo.name}</h2>
      ))}
      {/* Client-side Counter Component */}
      <Counter />
    </div>
  );
};

export default Home;