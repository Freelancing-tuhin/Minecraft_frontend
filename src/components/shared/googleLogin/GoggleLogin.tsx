import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../../utils";
import AuthContext from "../../../contexts/authContext/authContext";

const GoggleLogin = () => {
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation(); // 👈 get current location
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Current Route:", location.pathname); // ✅ log the route
  }, [location]);

  // const [formData, setFormData] = useState({
  //   full_name: "",
  //   email: "",
  //   password: "",
  //   profile_pic: "",
  // });

  const handleSignUp = async (formData: any) => {
    try {
      const response = await api.auth.signupUser(formData);
      setUser(response);

      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleLogin = async (formData: any) => {
    try {
      const response = await api.auth.LoginUser(formData);
      setUser(response);
      console.log("=====>login user data", response);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res.data.email);
        const signUpPayload = {
          full_name: `${res.data.given_name} ${res.data.family_name}`,
          email: res.data.email,
          role: "CUSTOMER", // Default role
          password: res.data.sub,
          profile_pic: res.data.picture || "",
        };
        // setFormData({
        //   full_name: `${res.data.given_name} ${res.data.family_name}`,
        //   email: res.data.email,
        //   password: res.data.sub,
        //   profile_pic: res.data.picture || "",
        // });

        if (location.pathname === "/signup") {
          handleSignUp(signUpPayload);
        } else {
          handleLogin(signUpPayload);
        }
        console.log("========>user data", signUpPayload);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div>
      <button
        onClick={() => login()}
        className="flex items-center bg-white w-full border justify-center border-gray-300 rounded-lg shadow-md px-6 py-2 rounded-2xl h-14 text-sm font-medium text-gray-800 
        hover:bg-gray-200 "
      >
        <svg
          className="h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="-0.5 0 48 48"
          version="1.1"
        >
          {" "}
          <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
          <defs> </defs>{" "}
          <g
            id="Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g id="Color-" transform="translate(-401.000000, -860.000000)">
              {" "}
              <g id="Google" transform="translate(401.000000, 860.000000)">
                {" "}
                <path
                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                  id="Fill-1"
                  fill="#FBBC05"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                  id="Fill-2"
                  fill="#EB4335"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                  id="Fill-3"
                  fill="#34A853"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                  id="Fill-4"
                  fill="#4285F4"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </svg>
        <span className="text-base translate-x-2">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoggleLogin;
