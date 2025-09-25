import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-purple-600 mb-4">
        Welcome to my Portfolio! 👩🏽‍🎓
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        I'm Krysta Parker an aspiring developer, game designer/developer, artist, and writer passionate about blending creativity with technology. Crafting immersive experiences, captivating stories, and innovative solutions. Dedicated to pushing boundaries and turning ideas into reality through a unique blend of technical skills and artistic vision.
      </p>
      
      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Project One</h2>
          <p className="text-gray-600">
            A small description of your first project. Technologies used: React, Tailwind CSS.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Project Two</h2>
          <p className="text-gray-600">
            A small description of your second project. Technologies used: Java, Spring Boot.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500">
        © 2025 Krysta Parker
      </footer>
    </div>
  )
}

export default App
