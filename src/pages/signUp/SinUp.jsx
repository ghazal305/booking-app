import { useForm } from "react-hook-form";
import Bggimage from "../../assets/images/BG (1).png";
import Vimage from "../../assets/images/Vector.png";


export default function SignupPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              <input
                placeholder="Name"
                {...register("name", { required: "enter your name" })}
                className="bg-[#EAEBEC] p-1 rounded-lg"
              />
              <input
                placeholder="Email"
                type="email"
                {...register("email", { required:"enter your email" })}
                className="bg-[#EAEBEC] p-1 rounded-lg"
              />
              <input
                placeholder="Password"
                type="password"
                {...register("password", { required: "enter your password" })}
                className="bg-[#EAEBEC] p-1 rounded-lg"
              />
              <input
                placeholder="Confirm Password"
                type="password"
                {...register("confirmPassword", { required:"enter your password" })}
                className="bg-[#EAEBEC] p-1 rounded-lg"
              />
              <input
                placeholder="Country"
                {...register("country", { required: true })}
                className="bg-[#EAEBEC] p-1 rounded-lg"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 rounded-lg mt-2">
                SIGN UP
              </button>
            </div>

            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <span className="text-blue-500 cursor-pointer">Login</span>
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
                  Login with Google
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
                  Login with Facebook
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
            className="w-full h-full object-cover rounded-[20px] "
          />
        </div>
      </div>
    </div>
  
  );
}
