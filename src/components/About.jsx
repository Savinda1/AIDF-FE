// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">        
        {/* Image Section */}
        <img
          src="/assets/hero/about_1.png" // replace with your image
          alt="Luxury Hotel Interior"
          className="rounded-2xl shadow-xl  w-full h-full"
        />

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Welcome to Smart Hotel Booking</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Discover hotels effortlessly with our AI-powered search system that personalizes your journey.
            Whether you're looking for a romantic getaway or a peaceful escape, we match you with the perfect stay.
          </p>

          <p className="text-lg text-gray-700 mb-6">
              Secure your reservation with instant payments and enjoy luxury, comfort, and seamless service—all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">

  {/* Call Us Button */}
 <a
  href="https://wa.me/94771234567" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-sky-900 text-white rounded-full hover:bg-yellow-400 transition text-center"
>
WhatsApp
</a>


  {/* Email Us Button */}
  <a
    href="mailto:amilasavindakumara@gmail.com"
    className="px-6 py-3 bg-sky-900 text-white rounded-full hover:bg-yellow-400 hover:text-sky-900 transition text-center"
  >
    Email Us
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default About;
