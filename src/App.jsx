import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import MyRoutes from "./routes/myRoutes";
const App = () => {
    const [mainScreen, setMainScreen] = useState(false)
    return (
        <div>
            {
                mainScreen ? <div className="min-h-screen bg-[#050505]">
                    <Navbar />
                    <main className="pt-20 lg:pt-24">
                        <MyRoutes />
                    </main>
                </div> : <RegistrationPage />
            }
        </div>
    );
};

export default App;
