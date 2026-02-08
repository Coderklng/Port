import React from  'react';
import '../App.css';
import Rocket from '../assets/rocket.webp';
const Card = (props)=>{
  
     return (  
        <>
         <div className='shadow-lg bg-black w-[250px] mb-5 ' style={{borderRadius:'17px'}}>
            <div className='flex flex-col p-5 items-center'>
              <img src={Rocket} className='w-100 h-50 ' />
              <h2 className='text-white mt-3'>Web Development</h2>
              <hr />
               <p className='text-white mt-2 mb-3'>Building responsive and<br/>modern websites</p>
               <button className='bg-blue-800 text-white px-5 py-1' style={{borderRadius:'16px'}}>Read More</button>
            </div>
         </div>   
        </>
     );
}

export default Card;