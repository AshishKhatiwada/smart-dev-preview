import React, { useState } from "react";
import Navbar from "./components/NabBar";
import MainContent from "./components/MainContent";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <>
      <Navbar onMenuClick={setSelectedMenu} />
      <main className="max-w-7xl mx-auto p-6 mt-8 border rounded-md min-h-[300px]">
        <MainContent selected={selectedMenu} />
      </main>
    </>
  );
}
