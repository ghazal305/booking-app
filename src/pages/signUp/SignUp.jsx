import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerSuccess } from "../../store/authSlice";
import Bggimage from "../../assets/images/BG (1).png";
import Vimage from "../../assets/images/Vector.png";

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    setError 
  } = useForm();

  const password = watch("password");

  const validatePassword = (value) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    
    if (!hasSpecialChar || !hasCapitalLetter || !hasNumber) {
      return "Password must contain at least 1 special character, 1 capital letter, and 1 number";
    }
    return true;
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      return "Passwords do not match";
    }
    return true;
  };

  const onSubmit = async (data) => {
    try {
      // Simulate API call - in real app, this would be an actual API call
      const user = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country
      };
      
      dispatch(registerSuccess(user));
      navigate("/");
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message
      });
    }
  };

  return (
    <div className="w-[1400px] flex justify-center items-center bg-[#F5F5F5]">
      <div className="container w-[70%] p-[20px] flex h-screen">
        {/* Left - Form Section */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-white">
          <img
            src={Vimage}
            alt="logo signup"
            className="text-4xl font-bold text-center text-[#2D3E50] mb-6"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-[300px] rounded-lg"
          >
            <h2 className="text-xl font-semibold text-center mb-4">SIGNUP</h2>

            <div className="flex flex-col gap-3">
              <div>
                <input
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

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
                    required: "Password is required",
                    validate: validatePassword
                  })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: validateConfirmPassword
                  })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("country", { required: "Country is required" })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="MA">Morocco</option>
                  <option value="EG">Egypt</option>
                  <option value="GR">Greece</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Phone"
                  {...register("phone", { 
                    required: "Phone is required",
                    pattern: {
                      value: /^\d{1,12}$/,
                      message: "Phone must be numbers only, max 12 digits"
                    }
                  })}
                  className="bg-[#EAEBEC] p-3 rounded-lg w-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {errors.root && (
                <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>
              )}

              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-2 w-full disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Signing up..." : "SIGN UP"}
              </button>
            </div>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 cursor-pointer hover:underline">
                Login
              </Link>
            </p>

            <div className="mt-6">
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border bg-white text-gray-700 py-2 rounded shadow-sm"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded shadow-sm"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right - Image Section */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={Bggimage}
            alt="Plane"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
