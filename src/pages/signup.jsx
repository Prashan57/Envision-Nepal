import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/usercontext";
import Info from "../components/info";
import { motion } from "framer-motion";

const inititalSignupData = {
  name: "",
  address: "",
  email: "",
  password: "",
  phone: "",
  pan: "",
};
const SignUp = () => {
  const navigate = useNavigate();
  const { registerUser } = useUserContext();
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState({
    errorText: "",
    infoText: "",
    field: "",
  });

  const [signupData, setSignupData] = useState(inititalSignupData);

  const updateSignupData = (value, key = "name") => {
    setSignupData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(signupData, "signupdata");
    // setSignupData()
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const response = await registerUser(signupData);
    console.log("Signup response", response);
    if (response.error) {
      setError({
        errorText: response.error,
        field: response.field || "",
      });
    }

    if (response.success) {
      setIsSignup(false);
      setError({
        errorText: "",
        infoText: "Signup success! Please login to access account",
        field: "",
      });

      navigate("/login");
    }
  };

  return (
    <motion.div
      className="flex h-screen w-screen absolute"
      initial={{ x: "-50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="w-3/5 bg-gray-200">
        <img src="" alt="Background" className="h-full object-cover" />
      </div>
      <div className="w-2/5 bg-white flex flex-col item-center p-8 border rounded-lg">
        <div className="mb-16 flex items-start justify-start">
          <Link
            to="/"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Envision Nepal
          </Link>
        </div>
        <div className="flex flex-col  py-1">
          <div className="mb-2">
            <h2 className="text-3xl font-semibold">Create an Account</h2>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-10 ">
              Let's get started with your Envision Journey
            </p>
            <form onSubmit={onSignUp}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-2 border-b"
                  error={error.field === "name" && error.errorText}
                  value={signupData.name}
                  onChange={(e) => updateSignupData(e.target.value, "name")}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="w-full p-2 border-b"
                  error={error.field === "address" && error.errorText}
                  value={signupData.address}
                  onChange={(e) => updateSignupData(e.target.value, "address")}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border-b"
                  error={error.field === "email" && error.errorText}
                  value={signupData.email}
                  onChange={(e) => updateSignupData(e.target.value, "email")}
                />
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border-b"
                  error={error.field === "password" && error.errorText}
                  value={signupData.password}
                  onChange={(e) => updateSignupData(e.target.value, "password")}
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full p-2 border-b"
                  error={error.field === "phone" && error.errorText}
                  value={signupData.phone}
                  onChange={(e) => updateSignupData(e.target.value, "phone")}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="pan"
                  placeholder="PAN No"
                  className="w-full p-2 border-b"
                  error={error.field === "pan" && error.errorText}
                  value={signupData.pan}
                  onChange={(e) => updateSignupData(e.target.value, "pan")}
                />
              </div>
              {error.errorText != "" && !error.field && (
                <Info type="error">{error.errorText}</Info>
              )}
              {!!error.infoText && <Info type="info">{error.infoText}</Info>}

              <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
                Create Account
              </button>
            </form>
            <div className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/Login" className="font-medium text-blue-500 ">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
