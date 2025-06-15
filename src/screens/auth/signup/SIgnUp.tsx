import { IconUserPlus } from "@tabler/icons-react";
import GoggleLogin from "../../../components/shared/googleLogin/GoggleLogin";
import { useContext, useState } from "react";
import { api } from "../../../utils";
import AuthContext from "../../../contexts/authContext/authContext";
import { useNavigate } from "react-router-dom";

const SIgnUp = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.auth.signupUser(formData);
      setUser(response);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <div className="bg-white relative">
        <div
          className="flex flex-col items-center justify-between pt-0 sm:pr-10 pb-0 sm:pl-10 mt-0
         mr-auto mb-0 ml-auto sm:max-w-7xl xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center w-full pt-5 sm:pr-10 pb-20 sm:pl-10 lg:pt-20 lg:flex-row">
            {/* Left side image */}
            <div className="hidden sm:inline w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                  className="btn-"
                  alt="Sign up illustration"
                />
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <form
                onSubmit={handleSignUp}
                className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white sm:shadow-2xl rounded-xl relative z-10"
              >
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                  Sign up for new account
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  {/* Username Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-3 rounded-full bg-white px-2 text-sm font-medium text-gray-600">
                      Username
                    </label>
                    <input
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="John"
                      type="text"
                      className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative mt-6">
                    <label className="absolute -top-2 left-3 bg-white rounded-full px-2 text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      type="email"
                      className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-3 rounded-full bg-white px-2 text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      type="password"
                      className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Sign Up Button */}
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-gray-200 text-center w-full rounded-2xl h-14 relative text-black text-xl font-semibold group hover:bg-gray-300 transition-colors"
                    >
                      <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[98%] z-10 duration-500">
                        <IconUserPlus />
                      </div>
                      <p className="pt-2 text-lg translate-x-2">Sign Up</p>
                    </button>
                  </div>

                  {/* OR Divider */}
                  <div className="relative flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Google Login Button */}
                  <div className="relative">
                    <GoggleLogin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
