'use client'

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../(styles)/Home.modules.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className="bg-blue-500 text-white p-4 titleContainer">
        <h1>Place to Place</h1>
        <svg
          className={styles.sidebarToggle} // Apply your CSS module class
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          width="30" // Set the width to make it smaller
          height="30" // Set the height to make it smaller
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> {/* Use strokeWidth instead of stroke-width */}
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"> {/* Use strokeLinecap and strokeLinejoin */}
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> {/* Use strokeWidth */}
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> {/* Use strokeWidth */}
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> {/* Use strokeWidth */}
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`text-lg font-bold mt-4 title ${styles.fade}`}>
          <h1>Plan a trip to</h1>
          <Typewriter
            options={{
              strings: ['your dream destination','Japan', 'London', 'Amsterdam', 'New York', 'Casablanca', 'Shanghai'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Pick for me
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Plan my trip
          </button>
        </div>
      </div>  
    </div>
  );
}


export default Home;