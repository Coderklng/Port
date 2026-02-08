import React from "react";
import Web from '../assets/web.webp';
import App from '../assets/ui.webp';
import Ui from '../assets/app.webp';
import Digital from '../assets/digital.webp';
import Graphic from '../assets/graphic.webp';
import Content from '../assets/content.webp';

const Portfolio = () => {
  const projects = [
    {
      img: Web,
      title: "Landing Page Design",
      desc: "Building responsive and modern websites.",
      btnColor: "bg-blue-500",
    },
    {
      img: App,
      title: "UI/UX Design",
      desc: "Designing user-friendly interfaces.",
      btnColor: "bg-purple-500",
    },
    {
      img:Ui,
      title: "App Development",
      desc: "Developing new mobile applications.",
      btnColor: "bg-red-500",
    },
    {
      img:Digital,
      title: "E-commerce Graphics",
      desc: "SEO, social media & online marketing.",
      btnColor: "bg-green-500",
    },
    {
      img:Graphic,
      title: "Restaurant Website",
      desc: "Creating stunning graphics & illustrations.",
      btnColor: "bg-orange-500",
    },
    {
      img:Content,
      title: "Travel Booking App",
      desc: "Crafting persuasive and engaging content.",
      btnColor: "bg-blue-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-2 text-lg">Check out some of my recent work</p>
      </div>

      {/* Filter / Navigation */}
      <div className="flex justify-center mt-8 gap-4">
        {["All", "Web Design", "Mobile Apps", "Graphics", "Branding"].map(
          (item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 p-8 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow-lg rounded-xl overflow-hidden w-80 hover:scale-105 transition-transform duration-300"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 text-center">
              <h2 className="font-bold text-xl">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.desc}</p>
              <button
                className={`mt-4 px-5 py-2 text-white rounded-full ${project.btnColor} hover:opacity-90 transition`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg hover:bg-purple-500 transition">
          View More Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
