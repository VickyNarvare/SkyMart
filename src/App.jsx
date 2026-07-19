import React, { useState } from "react";
import RegistrationPage from "./pages/RegistrationPage";
import { UserContextProvider } from "./context/userContext";
import HomePage from "./pages/HomePage";
// https://dummyjson.com/products ==> data products
const App = () => {
  return (
    <div>
      <UserContextProvider>
        {/* <RegistrationPage /> */}
        <HomePage />
      </UserContextProvider>
    </div>
  );
};

export default App;
