import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-lg shadow">
      <Helmet>
        <title>About Us | SmartDev</title>
        <meta
          name="description"
          content="Learn more about Smart Development – our mission, vision, and team working toward a smarter, sustainable future."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-blue-700 mb-6">About Smart Development</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Smart Development is committed to driving sustainable innovation across industries like
        clean energy, smart agriculture, and AI-powered solutions. Based in Australia, we work with
        businesses, governments, and communities to enable a smarter, greener future.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        To build a platform that connects suppliers, innovators, and customers with scalable smart
        solutions that improve quality of life and environmental outcomes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
      <p className="text-gray-700 mb-6">
        A future where technology and sustainability go hand in hand, empowering communities around
        the world.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Meet the Team</h2>
      <p className="text-gray-700 mb-6">
        Our team brings together experts in technology, business, sustainability, and digital
        transformation. We are passionate about solving real-world problems using smart
        technologies.
      </p>
    </div>
  );
};

export default AboutUs;
