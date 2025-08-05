import React, { useState } from "react";
import Navbar from "./components/NabBar";
import MainContent from "./components/MainContent";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <>
      {/* <Navbar onMenuClick={setSelectedMenu} />
      <main className="max-w-7xl mx-auto p-6 mt-8 border rounded-md min-h-[300px]">
        <MainContent selected={selectedMenu} />
      </main> */}
          <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://img1.wsimg.com/isteam/videos/uA41GmyyG8IMaxXdb')" }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content wrapper with relative and higher z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onMenuClick={setSelectedMenu} />
        <main className="flex-grow max-w-7xl mx-auto p-6 mt-8 bg-opacity-80 rounded-md shadow-md">
          <MainContent selected={selectedMenu} />
        </main>
      </div>
    </div>
    </>
  );
}
