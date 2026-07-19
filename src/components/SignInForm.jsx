import React from "react";

const SignInForm = () => {

  return (
    <form className="flex flex-col items-center justify-center h-full px-6 md:px-12 text-center bg-white">
      <h1 className="font-bold text-xl md:text-2xl m-0 text-gray-800">
        Sign In
      </h1>

      <span className="text-xs text-gray-500 mb-2">or use your account</span>
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <a
        href="#"
        className="text-gray-600 text-sm my-4 hover:text-orange-500 transition-colors"
      >
        Forgot your password?
      </a>
      <button className="rounded-full border border-orange-500 bg-orange-500 text-white text-xs font-bold py-3 px-8 md:px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-orange-600 focus:outline-none whitespace-nowrap">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
