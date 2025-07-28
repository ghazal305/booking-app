import React from "react";
import "./LogIn.module.css";
import { useForm } from "react-hook-form";
import BGImage from "../../assets/images/BG.png";
import VImage from "../../assets/images/Vector.png";

function LogIn() {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" flex flex-col justify-center items-center bg-[#F5F5F5]">
      <div className="container w-[70%]  flex h-screen bg-white rounded-[20px]">
        <div className="login-container flex flex-col justify-center items-center w-1/2 ">
          <img src={VImage} alt="logo login" />
          <h1 className="text-2xl font-bold text-center my-3">Log In</h1>

          <form
            className="w-full max-w-[300px] rounded-lg gap-3"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div className="form-group flex flex-col gap-3">
              <input
                placeholder="Email"
                type="email"
                {...register("email", { required: "enter your email" })}
                className="bg-[#EAEBEC] p-3 rounded-lg"
              />
              <input
                placeholder="Password"
                type="password"
                {...register("password", { required: "enter your password" })}
                className="bg-[#EAEBEC] p-3 rounded-lg"
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-[20px] w-full"
              type="submit"
            >
              Log In
            </button>
          </form>
          <p>
            Don’t have an account? <a>Register</a>
          </p>
          <p className="text-sm text-gray-600 text-center my-4 font-medium">
            Log in with other
          </p>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>

            <button
              type="button"
              class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Facebook
            </button>
          </div>
        </div>
        <div className="image-container h-screen">
          <img
            src={BGImage}
            alt="image log in "
            class="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
