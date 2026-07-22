import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/userContext";

const SignUpForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { setUsersData, usersData } = useContext(UserContext);
    const submitHandler = (data) => {
        const allUsers = [...usersData, data]
        localStorage.setItem("allUser", JSON.stringify(allUsers))
        setUsersData(allUsers);
        reset();
        return allUsers;
    };
    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col items-center justify-center h-full px-6 md:px-12 text-center bg-[#0d0d0d]"
        >
            <h1 className="font-bold text-xl md:text-2xl m-0 text-white">
                Create Account
            </h1>
            <span className="text-xs text-gray-400 mb-2">
                or use your email for registration
            </span>
            <input
                {...register("userName", { required: true })}
                name="userName"
                type="text"
                placeholder="Name"
                className="bg-[#1c1c1c] border border-white/6 rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30"
            />
            <input
                {...register("userEmail", { required: true })}
                name="userEmail"
                type="email"
                placeholder="Email"
                className="bg-[#1c1c1c] border border-white/6 rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30"
            />
            <input
                {...register("userPassword", { required: true })}
                name="userPassword"
                type="password"
                placeholder="Password"
                className="bg-[#1c1c1c] border border-white/6 rounded px-4 py-3 my-2 w-full max-w-xs md:max-w-none text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30"
            />

            <button className="mt-4 rounded-full border border-lime-400 bg-lime-400 text-black text-xs font-bold py-3 px-8 md:px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-lime-300 hover:shadow-[0_0_30px_-6px_rgba(166,255,60,0.4)] focus:outline-none whitespace-nowrap">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
