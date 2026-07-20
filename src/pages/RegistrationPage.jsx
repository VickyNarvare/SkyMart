import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
const RegistrationPage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
            <div
                className="relative overflow-hidden w-full max-w-full md:max-w-5xl min-h-144 md:min-h-136 rounded-xl bg-[#0d0d0d] border border-white/6"
                style={{
                    boxShadow:
                        "0 14px 28px rgba(0,0,0,0.5), 0 10px 10px rgba(0,0,0,0.4)",
                }}
            >
                {/* SkyMart Logo */}
                <div className="flex items-center justify-center gap-2.5 pt-5 pb-1 md:pt-6 md:pb-2">
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-lg shadow-lime-500/25">
                        <span className="text-black font-black text-base tracking-tight">S</span>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        Sky<span className="text-lime-400">Mart</span>
                    </span>
                </div>

                <div className="block md:hidden">
                    <div className="flex border-b border-white/6">
                        <button
                            onClick={() => setIsRightPanelActive(false)}
                            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${!isRightPanelActive
                                ? "text-lime-400 border-b-2 border-lime-400"
                                : "text-gray-500"
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsRightPanelActive(true)}
                            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${isRightPanelActive
                                ? "text-lime-400 border-b-2 border-lime-400"
                                : "text-gray-500"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="p-4">
                        {isRightPanelActive ? <SignUpForm /> : <SignInForm />}
                    </div>

                    <div className="px-4 pb-6 text-center">
                        <p className="text-sm text-gray-400">
                            {isRightPanelActive ? (
                                <>
                                    Already have an account?{" "}
                                    <button
                                        onClick={() => setIsRightPanelActive(false)}
                                        className="text-lime-400 font-semibold hover:underline"
                                    >
                                        Sign In
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don&apos;t have an account?{" "}
                                    <button
                                        onClick={() => setIsRightPanelActive(true)}
                                        className="text-lime-400 font-semibold hover:underline"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </p>
                    </div>
                </div>

                <div className="hidden md:block relative h-full min-h-128">
                    <div
                        className="absolute top-0 left-0 w-1/2 h-full transition-all duration-600 ease-in-out"
                        style={{
                            transform: isRightPanelActive
                                ? "translateX(100%)"
                                : "translateX(0)",
                            opacity: isRightPanelActive ? 1 : 0,
                            zIndex: isRightPanelActive ? 5 : 1,
                        }}
                    >
                        <SignUpForm />
                    </div>

                    <div
                        className="absolute top-0 left-0 w-1/2 h-full transition-all duration-600 ease-in-out"
                        style={{
                            transform: isRightPanelActive
                                ? "translateX(100%)"
                                : "translateX(0)",
                            zIndex: isRightPanelActive ? 1 : 2,
                        }}
                    >
                        <SignInForm />
                    </div>

                    <div
                        className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100"
                        style={{
                            transform: isRightPanelActive
                                ? "translateX(-100%)"
                                : "translateX(0)",
                        }}
                    >
                        <div
                            className="relative h-full w-[200%] -left-full transition-transform duration-600 ease-in-out"
                            style={{
                                background: "linear-gradient(to right, #65a30d, #4d7c0f)",
                                transform: isRightPanelActive
                                    ? "translateX(50%)"
                                    : "translateX(0)",
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center text-white transition-transform duration-600 ease-in-out"
                                style={{
                                    transform: isRightPanelActive
                                        ? "translateX(0)"
                                        : "translateX(-20%)",
                                }}
                            >
                                <h1 className="font-bold text-2xl mb-0">Welcome Back!</h1>
                                <p className="text-sm font-light leading-5 tracking-wide my-5 mx-0">
                                    To keep connected with us please login with your personal info
                                </p>
                                <button
                                    onClick={() => setIsRightPanelActive(false)}
                                    className="rounded-full border border-white/80 bg-transparent text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-white hover:text-lime-600 focus:outline-none"
                                >
                                    Sign In
                                </button>
                            </div>

                            <div
                                className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center text-white transition-transform duration-600 ease-in-out"
                                style={{
                                    transform: isRightPanelActive
                                        ? "translateX(20%)"
                                        : "translateX(0)",
                                }}
                            >
                                <h1 className="font-bold text-2xl mb-0">Hello, Friend!</h1>
                                <p className="text-sm font-light leading-5 tracking-wide my-5 mx-0">
                                    Enter your personal details and start your journey with us
                                </p>
                                <button
                                    onClick={() => setIsRightPanelActive(true)}
                                    className="rounded-full border border-white/80 bg-transparent text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-white hover:text-lime-600 focus:outline-none"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
