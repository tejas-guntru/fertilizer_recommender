import React from "react";
import { Navbar } from "./navabr";
import Contactpage from './contactpage'

import AboutImg from '../assets/imgs/PicAbout.jpg';

const Aboutuspage = () => {
  const teamMembers = [
    { name: "Ravi Kumar", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Anjali Sharma", role: "Agriculture Expert", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Tejas Guntru", role: "Technology Lead", img: "https://i.pravatar.cc/150?img=3" },
  ];

  const testimonials = [
    { name: "Sunil R.", feedback: "AgriSense helped me increase my wheat yield by 30% last year!", img: "https://i.pravatar.cc/150?img=4" },
    { name: "Priya M.", feedback: "The fertilizer suggestions are accurate and easy to implement.", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Ramesh K.", feedback: "I trust AgriSense for advice on sustainable farming techniques.", img: "https://i.pravatar.cc/150?img=6" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero / About Section */}
      <div className="homepage mt-20">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              
              {/* Image */}
              <div className="md:w-5/12 lg:w-5/12 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                <img
                  src={AboutImg}
                  alt="AgriSense About"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-7/12 lg:w-6/12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                  Empowering Farmers with Smart Crop and Fertilizer Solutions
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  At <span className="font-semibold text-green-700">Beeja</span>, we are committed to empowering farmers with expert advice on crop selection and fertilizer usage. Our platform helps farmers make informed decisions for healthier yields and sustainable farming practices.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Personalized recommendations are provided based on soil health, climate conditions, and local agricultural needs, ensuring that every farmer receives the best guidance to maximize productivity.
                </p>

                <p className="mt-6 font-medium text-green-800">
                  Our Mission: To provide tailored crop and fertilizer suggestions that optimize agricultural output while maintaining ecological balance and soil health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-green-50">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
              Why Choose Beeja?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-green-700 text-4xl mb-4">🌾</div>
                <h4 className="text-xl font-semibold mb-2">Smart Crop Advisory</h4>
                <p className="text-gray-600">
                  Get AI-driven suggestions for the best crops suited to your land and climate.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-green-700 text-4xl mb-4">💧</div>
                <h4 className="text-xl font-semibold mb-2">Fertilizer Optimization</h4>
                <p className="text-gray-600">
                  Learn the right fertilizers and quantities to improve yield and maintain soil health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-green-700 text-4xl mb-4">📈</div>
                <h4 className="text-xl font-semibold mb-2">Sustainable Growth</h4>
                <p className="text-gray-600">
                  Follow eco-friendly farming practices while maximizing productivity and profits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Timeline */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Our Journey</h3>
            <div className="relative border-l-2 border-green-200">
              {[
                { year: "2020", event: "Founded AgriSense with the goal of empowering local farmers." },
                { year: "2021", event: "Launched the first AI-driven crop advisory tool." },
                { year: "2022", event: "Expanded services to 10+ regions and added fertilizer optimization." },
                { year: "2024", event: "Serving thousands of farmers and continuously improving data insights." },
              ].map((item, idx) => (
                <div key={idx} className="mb-10 ml-6 relative">
                  <div className="absolute w-4 h-4 bg-green-700 rounded-full -left-2 top-1"></div>
                  <h4 className="text-xl font-semibold text-green-800">{item.year}</h4>
                  <p className="text-gray-600 mt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12 bg-green-50">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                  <h4 className="text-xl font-semibold text-green-700">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">What Farmers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
                  <div className="flex items-center justify-center gap-3">
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold text-green-800">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Contactpage />

        
      </div>
    </>
  );
};

export default Aboutuspage;
