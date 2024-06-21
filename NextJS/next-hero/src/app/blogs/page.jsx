import Link from "next/link";
import React from "react";

const Blogspage = () => {
  const blogsData = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description:
        "A comprehensive guide to understanding closures in JavaScript, including practical examples and common use cases.",
      slug: "understanding-javascript-closures",
    },
    {
      id: 2,
      title: "A Deep Dive into React Hooks",
      description:
        "Explore the world of React Hooks, including useState, useEffect, useMemo, and custom hooks for building efficient React components.",
      slug: "deep-dive-into-react-hooks",
    },
    {
      id: 3,
      title: "Building RESTful APIs with Node.js and Express",
      description:
        "Step-by-step tutorial on creating robust RESTful APIs using Node.js and Express, including routing, middleware, and error handling.",
      slug: "building-restful-apis-nodejs-express",
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      description:
        "Learn how to design responsive web layouts with CSS Grid, from basic concepts to advanced techniques and best practices.",
      slug: "mastering-css-grid-layout",
    },
    {
      id: 5,
      title: "Introduction to TypeScript for JavaScript Developers",
      description:
        "A beginner-friendly introduction to TypeScript, covering its features, benefits, and how to gradually migrate from JavaScript to TypeScript.",
      slug: "introduction-to-typescript",
    },
    {
      id: 6,
      title: "Optimizing Web Performance: Tips and Tricks",
      description:
        "Essential tips and tricks for optimizing the performance of your web applications, including lazy loading, code splitting, and caching strategies.",
      slug: "optimizing-web-performance",
    },
    {
      id: 7,
      title: "Building Scalable Applications with Microservices Architecture",
      description:
        "An overview of microservices architecture, its benefits, challenges, and best practices for building scalable applications.",
      slug: "building-scalable-applications-microservices",
    },
    {
      id: 8,
      title: "Getting Started with Docker: A Beginner's Guide",
      description:
        "Learn the basics of Docker, including containerization, Dockerfile, and how to manage containers for your development and production environments.",
      slug: "getting-started-with-docker",
    },
    {
      id: 9,
      title: "GraphQL vs REST: Choosing the Right API for Your Project",
      description:
        "A comparative analysis of GraphQL and REST APIs, discussing their pros, cons, and use cases to help you choose the right approach for your project.",
      slug: "graphql-vs-rest",
    },
    {
      id: 10,
      title: "Enhancing User Experience with Animations in Web Development",
      description:
        "Explore how to use CSS and JavaScript animations to create engaging and interactive web experiences for your users.",
      slug: "enhancing-user-experience-animations",
    },
  ];

  return (
    <div>
      <h2 className="py-4 text-center text-3xl">Blogs</h2>
      <div className="flex flex-col gap-4">
        {blogsData.map((blog) => (
          <div key={blog.id} className="p-4 border-2 border-red-400 w-max ">
            <h2 className="font-bold text-2xl">{blog.title}</h2>
            <p>{blog.description}</p>
            <button className="bg-slate-600 p-5">
              <Link href={`/blogs/${blog.slug}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogspage;
