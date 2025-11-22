import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/health")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Cannot reach backend"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-green-700">
          Smart Potato Farming System
        </h1>
        <p className="mb-2 text-gray-700">
          Frontend: React + Vite + TailwindCSS
        </p>
        <p className="text-gray-700">
          Backend status: <span className="font-semibold">{backendMessage}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
