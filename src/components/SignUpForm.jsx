import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/userContext";

const SignUpForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setUserData } = useContext(UserContext);
  const submitHandler = (data) => {
    setUserData((prev) => [...prev, data]);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-center justify-center h-full px-6 md:px-12 text-center bg-white"
    >
      <h1 className="font-bold text-xl md:text-2xl m-0 text-gray-800">
        Create Account
      </h1>
      <span className="text-xs text-gray-500 mb-2">
        or use your email for registration
      </span>
      <input
        {...register("userName")}
        name="userName"
        type="text"
        placeholder="Name"
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <input
        {...register("userEmail")}
        name="userEmail"
        type="email"
        placeholder="Email"
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <input
        {...register("userPassword")}
        name="userPassword"
        type="password"
        placeholder="Password"
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <input
        {...register("userConfirmPassword")}
        name="userConfirmPassword"
        type="password"
        placeholder="Confirm Password "
        className="bg-gray-100 border-none rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <button className="mt-4 rounded-full border border-orange-500 bg-orange-500 text-white text-xs font-bold py-3 px-8 md:px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-orange-600 focus:outline-none whitespace-nowrap">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
