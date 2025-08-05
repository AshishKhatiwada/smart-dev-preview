import React from "react";
import { Helmet } from "react-helmet";

const dummyArticles = [
  {
    id: 1,
    title: "The Rise of Smart Agriculture",
    summary:
      "Explore how IoT, AI, and sustainable farming practices are revolutionizing agriculture across the globe.",
    date: "2025-07-15",
  },
  {
    id: 2,
    title: "AI in Urban Development",
    summary:
      "Discover how artificial intelligence is helping cities become smarter, greener, and more efficient.",
    date: "2025-06-30",
  },
  {
    id: 3,
    title: "Top 10 Smart Products for 2025",
    summary:
      "A curated list of innovative products transforming homes, offices, and industrial operations.",
    date: "2025-06-20",
  },
];

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
        <title>Articles | SmartDev</title>
        <meta
          name="description"
          content="Read insights and news about smart technology, sustainability, and innovation from the Smart Development blog."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-blue-700 mb-8">SmartDev Articles & Insights</h1>

      <div className="space-y-8">
        {dummyArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{new Date(article.date).toDateString()}</p>
            <p className="text-gray-700 mb-4">{article.summary}</p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
