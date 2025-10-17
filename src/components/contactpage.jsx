import React, { useState } from 'react';
import { Navbar } from './navabr';
import emailjs from 'emailjs-com';
import { EnvelopeIcon, ChatBubbleBottomCenterTextIcon, PencilIcon } from '@heroicons/react/24/solid';

export const Contactpage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const templateParams = { from_email: email, subject, message };
    let emailSent = false;

    emailjs.send('service_x0lz6kv', 'template_3gncnjh', templateParams, 'D4XeibReFY-9dz4TY')
      .then(() => {
        emailSent = true;
        setSuccessMessage('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setSuccessMessage(''), 3000);
      })
      .catch(() => setErrorMessage('Failed to send message. Please try again.'));

    setTimeout(() => {
      if (!emailSent) {
        setErrorMessage('Email sending is taking longer than expected. Please check your connection.');
      }
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 bg-gradient-to-b from-green-50 via-green-100 to-yellow-50">
        <section className="py-12 relative">
          {/* Decorative leaves/wheat icons */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200 rounded-full opacity-25 animate-pulse-slow"></div>

          <div className="max-w-2xl mx-auto px-6 shadow-xl bg-white rounded-3xl p-8 relative z-10">
            <h2 className="text-4xl font-extrabold text-center text-green-800 mb-4">
              Contact Our Farming Experts
            </h2>
            <p className="text-center text-gray-700 mb-6 sm:text-lg">
              Have a technical issue, feedback, or business inquiry? Our team of Agri experts is here to help.
            </p>

            {successMessage && (
              <p className="text-center text-green-700 font-semibold mb-4 animate-pulse">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-center text-red-600 font-semibold mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Your Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-400">
                  <EnvelopeIcon className="w-5 h-5 text-green-500 ml-3" />
                  <input
                    type="email"
                    className="w-full p-3 pl-2 text-gray-900 rounded-r-lg focus:outline-none"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Subject</label>
                <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-400">
                  <PencilIcon className="w-5 h-5 text-green-500 ml-3" />
                  <input
                    type="text"
                    className="w-full p-3 pl-2 text-gray-900 rounded-r-lg focus:outline-none"
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <div className="flex items-start border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-400">
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-green-500 ml-3 mt-3" />
                  <textarea
                    className="w-full p-3 pl-2 text-gray-900 rounded-r-lg focus:outline-none h-36 resize-none"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Newsletter / Subscription CTA */}
        <div className="py-12 bg-green-100 text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h3 className="text-3xl font-bold text-green-900 mb-4">Subscribe for Updates</h3>
            <p className="text-green-800 mb-6">Get weekly tips, crop trends, and expert advice delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button type="submit" className="px-6 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      {/* Agri-Themed Footer / CTA */}
      <div className="mt-4">
        <section className="bg-green-300 py-6 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-24 bg-green-400 rounded-t-full opacity-20"></div>
          <div className="max-w-xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-green-900 mb-1">Join Our Farming Community</h2>
            <p className="text-green-700 mb-2">
              Get updates on crop trends, techniques, and expert advice.
            </p>
            <hr className="border-green-800 mb-2" />
            <p className="text-green-800 text-sm">© 2025 Beeja. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contactpage;
