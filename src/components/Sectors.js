import React from "react";

const sectors = [
  {
    name: "Smart Energy",
    description: "Sustainable energy solutions and smart grids.",
    icon: "⚡",
  },
  {
    name: "Smart Health",
    description: "AI-powered diagnostics and health tech.",
    icon: "🧬",
  },
  {
    name: "Smart Cities",
    description: "IoT-based urban planning and automation.",
    icon: "🏙️",
  },
  {
    name: "Smart Transport",
    description: "Autonomous and efficient mobility systems.",
    icon: "🚗",
  },
];

const Sectors = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Smart Development Sectors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-2">{sector.icon}</div>
            <h2 className="text-xl font-semibold text-blue-600">{sector.name}</h2>
            <p className="text-gray-600">{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
