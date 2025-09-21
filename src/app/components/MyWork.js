"use client";
import React, { useState, useEffect } from "react";
import Title from "./Titles";
import Image from "next/image";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://portfolio-backend-nx4a.onrender.com/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter logic
  const filteredItems =
    filter === "All"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <div
      id="work"
      className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full min-h-screen mt-20 sm:mt-28 lg:mt-20"
    >
      {/* Title */}
      <Title text1={"My"} text2={"Work"} />

      {/* Subheadings */}
      <div className="flex flex-col items-center text-center gap-2 mt-4">
        <h1 className="text-xs sm:text-sm md:text-base">My Portfolio</h1>
        <h1 className="font-bold text-lg sm:text-2xl md:text-3xl">
          Recent Works
        </h1>
      </div>

      {/* Filter Nav */}
      <div className="flex justify-center py-3">
        <nav className="w-full flex items-center justify-evenly sm:w-[30rem] md:w-[40rem] lg:w-[30rem] h-10 rounded-full shadow-lg bg-white">
          {["All", "Web", "App"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Portfolio Grid */}
      <div className="p-4 sm:p-6 lg:p-10 flex flex-wrap justify-center gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="w-full sm:w-[18rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
      <Image
  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
  src={`https://portfolio-backend-nx4a.onrender.com${item.image}`}
  alt={item.title}
  width={500}       // specify width
  height={300}      // specify height
/>


            <div className="p-4 sm:p-5">
              <h5 className="mb-2 text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p className="mb-3 text-sm sm:text-base text-gray-700">
                {item.description}
              </p>

              {/* Project Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Visit Project
                  <svg
                    className="rtl:rotate-180 w-3 h-3 sm:w-3.5 sm:h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
