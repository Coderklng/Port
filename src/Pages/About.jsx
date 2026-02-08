import React from "react";
import "../App.css";
import User from '../assets/user.webp';
import Archery from '../assets/archery.webp'
import Rocket from '../assets/rocket.webp'
import Bulb from '../assets/bulb.webp'

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-purple-600 h-[200px]">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="mt-5 p-5">
              <h2 className="mt-5 text-4xl text-white text-center font-bold">About Me</h2>
              <hr className="mt-3 text-white  w-60 "></hr>
              <p className="mt-3 text-white text-center">Brief introduction about yourself</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg container mx-auto mt-5" style={{ borderBottom: '2px solid #fff' }}>
        <div className="flex-wrap flex justify-center space-x-6 items-center p-5 h-[400px] bg-black text-white">
          {/* img frame 
         */}
          <img src={User} className="" style={{ borderRadius: '50%' }} />

          {/* create card  
           */}
          <div className="card p-5 overflow-hidden">
            <h3 className="md:text-3xl font-bold text-xl">Hello, I'm John Doe</h3>
            <hr className="mt-3" />
            <p className="">I'm a web developer with a passion for creating amazing and user friendly digital's experience</p>

            <p className="mt-2">I love coding designing websites and applications</p>
          </div>
        </div>
      </div>
      <br />
      <section className="container mx-auto mt-2 mb-5 p-4">
        <div className="flex justify-center items-center mt-2relative ">
          <hr className="w-[500px] border-t-1  border-gray-600" />
          <h2 className="absolute bg-white px-3  text-center md:text-2xl  font-bold">
            My Mission & Vision
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 space-x-7 mt-12 gap-8 justify-center ">
          <div className="bg-white shadow-lg w-[300px] h-[400px] " style={{ boxShadow: '0px 0px 50px rgba(0,0,0,0.6)', borderRadius: '12px' }}>
            <div className="flex flex-col w-full justify-center items-center p-4">
              <img src={Rocket} className="w-full" />
              <h2 className="font-bold text-2xl">Our Mission</h2>
              <hr className="text-gray-500 w-full mt-4" />
              <p>To deliver quality,work <br /> and satisy clients.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg w-[300px] h-[400px] " style={{ boxShadow: '0px 0px 50px rgba(0,0,0,0.6)', borderRadius: '12px' }}>
            <div className="flex flex-col w-full justify-center items-center p-4">
              <img src={Bulb} className="w-full" />
              <h2 className="font-bold text-2xl">Our Vision</h2>
              <hr className="text-gray-500 w-full mt-4" />
              <p>To be the leading in <br /> the industry</p>
            </div>
          </div>

          <div className="bg-white shadow-lg w-[300px] h-[400px] " style={{ boxShadow: '0px 0px 50px rgba(0,0,0,0.6)', borderRadius: '12px' }}>
            <div className="flex flex-col w-full justify-center items-center p-4">
              <img src={Archery} className="w-full h-[270px]" />
              <h2 className="font-bold text-2xl">Goal & Success</h2>
              <hr className="text-gray-500 w-full mt-4" />
              <p>Achieve goals through<br /> dedication and the hardwork.</p>
            </div>
          </div>

        </div>

      </section>


      <section className="container mx-auto mt-12 mb-5 ">
        <div className="flex justify-center items-center mt-2 relative ">
          <hr className="w-[500px] border-t-1  border-gray-600" />
          <h2 className="absolute bg-white px-3  text-center md:text-2xl  font-bold">
            My Mission & Vision
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center mt-[50px] gap-5 ">
          <div className="flex space-x-3.5">
            <h3 className="font-bold" >Web Development</h3>
            <input type="range" min='0' max='100' className="md:w-[600px] w-[200px]  " style={{ accentColor: 'blue' }} />

          </div>

          {/* ui/ux desiogn start 
   */}

          <div className="flex space-x-3.5">
            <h3 className="font-bold">UI/UX Design</h3>
            <input type="range" min='0' max='100' className="md:w-[600px] w-[200px]  " style={{ accentColor: 'green' }} />
          </div>
          <hr />
          <div className="flex space-x-3.5">
            <h3 className="font-bold">Javascript</h3>
            <input type="range" min='0' max='100' className="md:w-[600px] w-[200px]  " style={{ accentColor: 'orange' }} />
          </div>
          <hr />
          <div className="flex space-x-3.5">
            <h3 className="font-bold">React & Rules</h3>
            <input type="range" min='0' max='100' className="md:w-[600px] w-[200px]" style={{ accentColor: 'blueviolet' }} />
          </div>
          <hr />
        </div>
      </section>


<section className="mx-auto bg-slate-950  h-[200px] " style={{background:''}}>
 <div className="mt-5 flex-col flex justify-center items-center">
 <button className="mt-7 bg-blue-900  px-15 py-3 text-white rounded-full hover:bg-blue-600">Contact Me</button>
 <p className="mt-2 text-white">Let's work together </p>
 </div>
</section>


    </>
  );
}

export default About;