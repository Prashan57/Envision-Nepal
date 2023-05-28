import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/usercontext";
import Info from "../components/info";

const initialLoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const { loginUser } = useUserContext();

  const [error, setError] = useState({
    errorText: "",
    infoText: "",
    field: "",
  });

  const [loginData, setLoginData] = useState(initialLoginData);

  const updateLoginData = (value, key = "name") => {
    setLoginData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(loginData);
  };

  const onLogin = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col item-center p-8 border rounded-lg">
        <div className="mb-24 flex items-start justify-start">
          <Link
            to="/"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Envision Nepal
          </Link>
        </div>
        <div className="flex flex-col px-20 py-10">
          <div className="mb-2">
            <h2 className="text-3xl font-semibold">Welcome back, Buddy</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-20 px-5">
              Welcome back! Please enter your details
            </p>
            <form onSubmit={onLogin}>
              <div className="mb-4">
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
              <div className="mb-7">
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
              <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xs text-gray-500">
                  Remember for 30 days
                </label>
                <a href="#" className="ml-auto text-sm text-blue-500">
                  Forgot password?
                </a>
              </div>
              <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
                Login
              </button>
            </form>
            <div className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/SignUp" className="font-medium text-blue-500 ">
                Sign Up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-gray-200">
        <img src="" alt="Background" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
