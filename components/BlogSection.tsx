import React from 'react';
import Image from "next/image";
import Blog from './Blog'; 

export const BlogSection = () => {

  return (
    <main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-25 pb-10 mt-10">

        <Blog
            blog_name={'QR codes - A deep dive into the seemingly random black and white pixels'}
            read_time={"A 20 minute read"}
            href={"/Blogs/QR codes"}
        />

        <Blog
            blog_name={'An in-depth guide on how to spin a donut in your CMD shell'}
            read_time={"A 15 minute read"}
            href={"/Blogs/DonutSpin"}
        />

    </main>
  );
};