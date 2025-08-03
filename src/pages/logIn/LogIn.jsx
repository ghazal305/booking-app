import React from "react";
import "./LogIn.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../../store/authSlice";
import BGImage from "../../assets/images/BG.png";
import VImage from "../../assets/images/Vector.png";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError 
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(loginStart());
    
    try {
      // Simulate API call - in real app, this would be an actual API call
      // For demo purposes, we'll use a simple validation
      if (data.email === "demo@example.com" && data.password === "password123") {
        const user = {
          id: 1,
          name: "Demo User",
          email: data.email,
          phone: "1234567890",
          country: "US"
        };
        
        dispatch(loginSuccess(user));
        navigate("/");
      } else {
        // For demo, accept any valid email format with password "password123"
        if (data.password === "password123") {
          const user = {
            id: Date.now(),
            name: data.email.split('@')[0],
            email: data.email,
            phone: "1234567890",
            country: "US"
          };
          
          dispatch(loginSuccess(user));
          navigate("/");
        } else {
          throw new Error("Invalid credentials. Use 'password123' as password for demo.");
        }
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      setError("root", {
        type: "manual",
        message: error.message
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F5]">
      <div className="container w-[70%] flex h-screen bg-white rounded-[20px]">
        <div className="login-container flex flex-col justify-center items-center w-1/2">
          <img src={VImage} alt="logo login" />
          <h1 className="text-2xl font-bold text-center my-3">Log In</h1>

          <form
            className="w-full max-w-[300px] rounded-lg gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group flex flex-col gap-3">
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password", { 
                    required: "Password is required"
                  })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
            </div>

            {errors.root && (
              <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>
            )}

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-[20px] w-full disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
          
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
          
          <p className="text-sm text-gray-600 text-center my-4 font-medium">
            Log in with other
          </p>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>

            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Facebook
            </button>
          </div>
        </div>
        <div className="image-container h-screen">
          <img
            src={BGImage}
            alt="image log in"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
