import React from "react";
import { Helmet } from "react-helmet";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    review:
      "SmartDev helped our business scale with their clean energy solutions. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    rating: 4,
    review:
      "Very professional service and great customer support. Would love to work with them again.",
  },
  {
    name: "David Lee",
    rating: 5,
    review:
      "Their innovative products in the health sector are top-notch. A true leader in smart development.",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
        <title>Customer Reviews | SmartDev</title>
        <meta name="description" content="Read reviews from satisfied customers and partners of SmartDev." />
      </Helmet>

      <h1 className="text-3xl font-bold text-blue-700 mb-8">What Our Clients Say</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{review.name}</h3>
            <div className="flex text-yellow-400 mb-2">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
