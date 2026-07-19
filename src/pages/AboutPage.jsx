import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-lime-400">SkyMart</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            SkyMart is your trusted online shopping destination where you can
            discover quality products at affordable prices with a smooth and
            secure shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
              alt="About SkyMart"
              className="rounded-3xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>

            <p className="text-gray-400 leading-8 mb-4">
              At SkyMart, we believe online shopping should be simple,
              affordable, and enjoyable. We offer a wide range of products,
              including electronics, fashion, beauty, home essentials, and much
              more.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Our goal is to provide excellent customer service, secure
              payments, and fast delivery while ensuring every customer enjoys a
              hassle-free shopping experience.
            </p>

            <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-300 transition">
              Explore Products
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">500+</h3>
            <p className="text-gray-400 mt-2">Quality Products</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">10K+</h3>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">24/7</h3>
            <p className="text-gray-400 mt-2">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
