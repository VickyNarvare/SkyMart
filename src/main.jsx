import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UserContextProvider } from "./context/userContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserContextProvider>
            <App />
            <ToastContainer theme="dark" position="top-left" />
        </UserContextProvider>
    </BrowserRouter>,
);
