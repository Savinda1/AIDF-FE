
import React from 'react'
//import Greting from './Greting';
//import Button from './Button';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HotelListings from './components/HotelListings';
function App() {
  return (
    <div>
     <Navigation/>
      <Hero/>
      <img
          src="/assets/hero/hero_1.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
<HotelListings/>
     
    </div>
  )
}

export default App;

