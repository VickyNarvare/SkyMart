import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyRoutes from "./routes/myRoutes";
const App = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <MyRoutes />
      </main>
    </div>
  );
};

export default App;
