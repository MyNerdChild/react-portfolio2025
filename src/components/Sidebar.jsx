import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-54 bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        <li><a href="/resume" className="hover:text-gray-300">Resume</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;