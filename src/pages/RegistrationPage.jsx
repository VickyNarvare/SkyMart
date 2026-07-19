import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
const RegistrationPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  return (
    <div className="min-h-screen bg-[#f6f5f7] flex items-center justify-center p-4">
      <div
        className="relative overflow-hidden w-full max-w-full md:max-w-3xl min-h-128 md:min-h-120 rounded-xl bg-white"
        style={{
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }}
      >
        <div className="block md:hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setIsRightPanelActive(false)}
              className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                !isRightPanelActive
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsRightPanelActive(true)}
              className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                isRightPanelActive
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="p-4">
            {isRightPanelActive ? <SignUpForm /> : <SignInForm />}
          </div>

          <div className="px-4 pb-6 text-center">
            <p className="text-sm text-gray-500">
              {isRightPanelActive ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsRightPanelActive(false)}
                    className="text-orange-500 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => setIsRightPanelActive(true)}
                    className="text-orange-500 font-semibold hover:underline"
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
                background: "linear-gradient(to right, #FF4B2B, #FF416C)",
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
                  className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-white hover:text-orange-500 focus:outline-none"
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
                  className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform duration-75 active:scale-95 hover:bg-white hover:text-orange-500 focus:outline-none"
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
