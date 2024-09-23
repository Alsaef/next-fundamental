import Counter from '@/Components/counter/Counter';
import React from 'react';

const page = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${apiUrl}/api/blog`);
    const data = await res.json();
    const blogs = data.data;

    if (!data || !blogs) {
      return {
        notFound: true,
      };
    }

    return (
      <div>
        <h1>Blogs</h1>
        {blogs.map((blog, index) => (
          <h2 key={index}>{blog.name}</h2>
        ))}
        {/* Client-side component */}
        <Counter />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return <p>Failed to load blogs.</p>;
  }
};

export default page;