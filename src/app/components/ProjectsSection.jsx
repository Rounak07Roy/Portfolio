"use client";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-8">
      <h2 className="text-white text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="border border-[#33353F] rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-white text-xl font-semibold">KIIT MUN Website</h3>
          <p className="text-[#ADB7BE] mt-2">
            Designed and developed the official KIIT MUN website to provide delegates and EB members with event details, registration access, and real-time updates, enhancing participation and communication.
          </p>
          <a
            href="https://github.com/Rounak07Roy/kiit-mun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-[#33353F] text-[#ADB7BE] rounded-md hover:bg-white hover:text-black transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="border border-[#33353F] rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-white text-xl font-semibold">E-Commerce Website</h3>
          <p className="text-[#ADB7BE] mt-2">
            Built a responsive e-commerce website with product browsing, cart, and checkout functionality, improving user experience through optimized performance and clean design.
          </p>
          <a
            href="https://github.com/Rounak07Roy/Ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-[#33353F] text-[#ADB7BE] rounded-md hover:bg-white hover:text-black transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="border border-[#33353F] rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-white text-xl font-semibold">Kritarth KIIT 2024</h3>
          <p className="text-[#ADB7BE] mt-2">
            Developed the official website for Kritarth KIIT 2024, providing event schedules, registration details, and updates for participants, ensuring a smooth and engaging user experience.
          </p>
          <a
            href="https://github.com/Rounak07Roy/kritarth24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-[#33353F] text-[#ADB7BE] rounded-md hover:bg-white hover:text-black transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="border border-[#33353F] rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-white text-xl font-semibold">Admin Portal</h3>
          <p className="text-[#ADB7BE] mt-2">
            Created a secure admin portal for managing users, content, and analytics across multiple web applications. Focused on role-based access, efficiency, and scalability for organizational needs.
          </p>
          <a
            href="https://github.com/Rounak07Roy/Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-[#33353F] text-[#ADB7BE] rounded-md hover:bg-white hover:text-black transition-colors"
          >
            View on GitHub
          </a>
        </div>

      

      </div>
    </section>
  );
};

export default ProjectsSection;
