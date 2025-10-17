import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './navabr';
import InfiniteScrollLogos from './InfiniteScrollLogos';



const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className="homepage mt-16">
        {/* Hero Section */}
        <section className="hero bg-gradient-to-br from-green-100 via-green-200 to-green-300 py-20 text-center relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/leaf.png')] bg-repeat"></div>

          <div className="container mx-auto relative z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg">
              Welcome to <span className="text-green-700">Beeja</span>
            </h1>
            <p className="text-lg md:text-xl text-green-800 mt-6 max-w-2xl mx-auto leading-relaxed">
              Discover the best <span className="font-semibold text-green-900">AI-powered Crop Advisor</span> to boost your farming efficiency and yield!
            </p>

            <Link
              to="/services"
              className="mt-10 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              🌾 Explore Advisor
            </Link>
          </div>

          {/* Optional Animated Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 to-transparent"></div>
        </section>


        {/* Crops Overview Section */}
       <section className="crops-overview py-20 bg-gradient-to-b from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-green-800 mb-4">
            🌿 Popular Crops
          </h2>
          <p className="text-center text-green-700 text-lg max-w-2xl mx-auto">
            Explore the most cultivated and profitable crops across regions — learn about their benefits, uses, and best-growing conditions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
            {[
              {
                name: "Wheat",
                link: "/wheat",
                img: "https://plus.unsplash.com/premium_photo-1661963447711-27f892ffe292?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
                desc: "A staple grain that feeds billions, rich in nutrients and versatile in cooking.",
              },
              {
                name: "Rice",
                link: "/rice",
                img: "https://farmpays.com/wp-content/uploads/2024/02/Rice-Farm-1-1024x576.jpg",
                desc: "The world's most consumed food grain, essential in many cuisines and cultures.",
              },
              {
                name: "Corn",
                link: "/corn",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPB5tFZju84sCMoEls0brcoMQZSwOfcbqQ&s",
                desc: "A versatile crop used for food, animal feed, and biofuels, with countless varieties.",
              },
              {
                name: "Carrot",
                link: "/carrot",
                img: "https://t4.ftcdn.net/jpg/06/64/12/05/360_F_664120525_5QIjKKIrWwQkyauaDpxC9mSoitMOIQmR.jpg",
                desc: "A crunchy root vegetable packed with vitamins and known for its vibrant orange color.",
              },
              {
                name: "Cotton",
                link: "/cotton",
                img: "https://media.istockphoto.com/id/657185044/photo/cotton-crop-in-full-bloom.jpg?s=612x612&w=0&k=20&c=ctDy1dFRXMvR_ydSan8V1CFQ9OUMrRhkqGJ7IYhTGpE=",
                desc: "The primary source of natural fiber for textiles, crucial for the fashion industry.",
              },
              {
                name: "Millets",
                link: "/millets",
                img: "https://i2.wp.com/entomologytoday.org/wp-content/uploads/2019/09/millet-field.jpg?fit=1000%2C667",
                desc: "Nutritious and drought-resistant grains that are gaining popularity for sustainable farming.",
              },
              {
                name: "Soya",
                link: "/soya",
                img: "https://www.agriculture.com/thmb/Kg7y8GzrNZk0pHpLRQmcdjrIIXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2841920SCN20resistant20soybeans-2-2000-12ec019a09f14439b507b75ea34b05dc.jpg",
                desc: "High in protein, soybeans are a key ingredient in many food products and oils.",
              },
              {
                name: "Sugarcane",
                link: "/sugarcane",
                img: "https://cdn11.bigcommerce.com/s-b9pwig4brj/product_images/uploaded_images/0-featured-closeup-of-sugarcane-growing-in-plantation.jpg",
                desc: "A tall grass harvested for its juice, which is processed into sugar and biofuels.",
              },
              {
                name: "Groundnut",
                link: "/groundnut",
                img: "https://www.icrisat.org/assets/crops/groundnut-banner.jpg",
                desc: "Also known as peanuts, these legumes are rich in protein and healthy fats.",
              },
              {
                name: "Apple",
                link: "/apple",
                img: "https://www.himachalheadlines.com/wp-content/uploads/2024/01/IMG-20240123-WA0006.jpg",
                desc: "A widely loved fruit known for its crisp texture and sweet flavor, perfect for snacking.",
              },
              {
                name: "Orange",
                link: "/orange",
                img: "https://m.media-amazon.com/images/I/41UatgFuWmL._AC_UF1000,1000_QL80_.jpg",
                desc: "A vibrant citrus fruit packed with vitamin C, offering a sweet-tart flavor and a burst of energy.",
              },
              {
                name: "Potato",
                link: "/potato",
                img: "https://agronoblog.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-16-16.20.23-A-realistic-close-up-image-of-three-freshly-harvested-potatoes-lying-on-the-soil-viewed-from-a-different-angle-showcasing-more-of-the-potato-field.--1024x585.webp",
                desc: "A versatile tuber that can be prepared in countless ways, from fries to mash.",
              },
            ].map((crop, index) => (
              <Link key={index} to={crop.link}>
                <div className="group bg-white rounded-xl shadow-lg border border-green-400 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      src={crop.img}
                      alt={crop.name}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-semibold text-green-700 group-hover:text-green-800">
                      {crop.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {crop.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



        <div className='mt-0'>
      <InfiniteScrollLogos></InfiniteScrollLogos>
      </div>

        {/* Call-to-Action Section */}
        <div className="mt-16">
          <section className="cta relative bg-gradient-to-r from-green-400 via-green-300 to-green-200 py-12 text-center overflow-hidden">
            {/* Decorative overlay pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/leaf.png')] bg-repeat"></div>

            <div className="container mx-auto relative z-10 px-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 drop-shadow-sm">
                Join Our Farming Community 🌾
              </h2>

              <p className="text-lg md:text-xl text-green-800 mt-4 max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest crop trends, sustainable farming techniques, and expert insights from Beeja.
              </p>

              <a
                href="#subscribe"
                className="mt-8 inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300"
              >
                Join Now
              </a>

              <hr className="border-green-900 mt-10 opacity-30" />

              <p className="text-center text-green-900 text-sm mt-4">
                © {new Date().getFullYear()} <span className="font-semibold">Beeja</span>. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
