import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserContext } from "../contexts/usercontext";
import Info from "../components/info";
import { item, container } from "../assets/animation";

const initialLoginData = {
  email: "",
  password: "",
};

const Login = (props) => {
  const navigate = useNavigate();
  const { loginUser, adminUser } = useUserContext();

  const [error, setError] = useState({
    errorText: "",
    infoText: "",
    field: "",
  });

  const [loginData, setLoginData] = useState(initialLoginData);

  // useEffect(()=>{
  //   setLoginData(initialLoginData)
  // },[])

  const updateLoginData = (value, key = "name") => {
    setLoginData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(loginData);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (
      loginData.email === adminUser.email &&
      loginData.password === adminUser.password
    ) {
      return navigate("/admin/home");
    }
    const response = await loginUser(loginData);
    console.log("Login response", response);
    if (response.error) {
      setError({
        errorText: response.error,
        field: response.field || "",
      });
    }

    if (response.success) {
      setError({
        errorText: "",
        field: "",
      });
      navigate("/");
    }
  };

  return (
    <motion.div
      className="flex h-screen  w-screen absolute"
      initial={{ x: "50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="w-2/5 bg-white flex flex-col item-center p-8 border rounded-lg overflow-hidden">
        <motion.div
          className="mb-24 flex items-start justify-start"
          initial={{ x: "15%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <Link
            to="/"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Envision Nepal
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col px-20 py-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mb-5 overflow-hidden">
            <motion.h2 variants={item} className="text-3xl font-semibold">
              Welcome, Buddy
            </motion.h2>
          </div>

          <div className="overflow-hidden text-sm text-gray-500 mt-3 mb-5 ">
            <motion.p variants={item}>
              Welcome Please enter your details
            </motion.p>
          </div>
          <form onSubmit={onLogin} className="overflow-hidden">
            <div className="mb-5 ">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 border-b"
                value={loginData.email}
                error={error.field === "email" && error.errorText}
                onChange={(e) => updateLoginData(e.target.value, "email")}
              />
            </div>
            <div className="mb-9 ">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border-b"
                value={loginData.password}
                error={error.field === "password" && error.errorText}
                onChange={(e) => updateLoginData(e.target.value, "password")}
              />
            </div>
            {!!error.infoText && <Info type="info">{error.infoText}</Info>}

            {!!error.errorText && !error.field && (
              <Info type="error">{error.errorText}</Info>
            )}
            <motion.div variants={item} className="flex items-center mb-8 ">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-xs text-gray-500">
                Remember for 30 days
              </label>
              <Link
                to="/forgotPassword"
                className="ml-auto text-sm text-blue-500"
              >
                Forgot password?
              </Link>
            </motion.div>
            <div className="mt-14 mb-4">
              <motion.div variants={item}>
                <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
                  Login
                </button>
              </motion.div>
            </div>
          </form>
          <div className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/SignUp" className="font-medium text-blue-500 ">
              Sign Up for free
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-3/5 bg-white flex justify-center ">
        <img
          src="/Login.jpg"
          alt="Background"
          className="h-full w-20/21 object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Login;
