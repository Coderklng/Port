import React from "react";
import Web from '../assets/web.webp';
import App from '../assets/ui.webp';
import Ui from '../assets/app.webp';
import Digital from '../assets/digital.webp';
import Graphic from '../assets/graphic.webp';
import Content from '../assets/content.webp';

const Service = () => {
  const services = [
    { img: Web, title: "Web Development", desc: "Building responsive and modern websites", color: "bg-blue-800" },
    { img: App, title: "UI/UX Design", desc: "Designing user-friendly interfaces", color: "bg-violet-600" },
    { img: Ui, title: "App Development", desc: "Developing mobile applications", color: "bg-red-800" },
    { img: Digital, title: "Digital Marketing", desc: "SEO, social media & online marketing", color: "bg-green-700" },
    { img: Graphic, title: "Graphic Design", desc: "Creating stunning graphics & illustrations", color: "bg-orange-700" },
    { img: Content, title: "Content Writing", desc: "Crafting engaging & persuasive content", color: "bg-sky-800" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-purple-800 to-blue-700 mb-5 p-4 rounded-b-[40%]">
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="mt-5 text-3xl font-light text-white">My Services</h2>
          <hr className="mx-auto w-48 border-white mt-2" />
          <p className="text-white mt-2 text-sm">What I offer to my clients</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="shadow-lg w-full md:w-64 mb-5 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
              style={{ boxShadow: '0px 0px 50px rgba(0,0,0,0.6)' }}
            >
              <div className="flex flex-col items-center p-5">
                <img src={service.img} className="w-full h-40 object-cover rounded-lg" />
                <h2 className="mt-3 text-xl font-semibold text-center">{service.title}</h2>
                <hr className="w-16 border-gray-300 mt-2" />
                <p className="mt-2 mb-3 text-center text-sm">{service.desc}</p>
                <button className={`${service.color} text-white px-5 py-2 rounded-lg transition hover:brightness-110`}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 mb-10">
          <h2 className="text-xl font-semibold mb-3">
            <b>Ready to get started?</b> Let's work together
          </h2>
          <button className="mt-3 rounded-full bg-gradient-to-l from-purple-700 to-blue-800 px-12 py-3 text-white transition-transform duration-300 hover:scale-105">
            Contact Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Service;
