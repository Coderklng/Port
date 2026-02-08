import React,{useState} from "react";
import {Route,Routes} from 'react-router-dom';
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Components/Card";
import "../App.css"

const Home = ()=>{
 return (
    <>
  <section className="bg-[url('https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg')] bg-cover bg-center text-white py-24">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build Amazing Websites <br /> with Tailwind CSS
      </h1>

      <p className="mt-2 text-lg">Create responsive and fast loading websites easily</p>

      <div className="space-x-3 mt-6">
        <button className="bg-sky-900 px-5 py-2 rounded hover:bg-sky-700">
          Get Started
        </button>
        <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* Features */}
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-10">Our Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Feature One","Feature Two","Feature Three"].map((title, i) => (
          <div key={i} className="bg-black text-white p-6 rounded-2xl shadow hover:shadow-lg transition flex gap-4">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
              <i className="fa-solid fa-code text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <img
        className="w-full md:w-[370px] h-[250px] object-cover rounded-2xl"
        src="https://images.pexels.com/photos/2661929/pexels-photo-2661929.jpeg"
        alt="about"
      />

      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-3">About Us</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-blue-700 px-4 py-2 text-white rounded mt-4 hover:bg-blue-900">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}

</>

 )
}

export default Home;