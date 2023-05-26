import React from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-gray-200">
        <img src="" alt="Background" className="h-full object-cover" />
      </div>
      <div className="w-1/2 bg-white flex flex-col item-center p-8 border rounded-lg">
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
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full p-2 border-b"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full p-2 border-b"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full p-2 border-b"
              />
            </div>
            <div className="mb-7">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border-b"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="number"
                placeholder="Phone Number"
                className="w-full p-2 border-b"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="PAN"
                placeholder="PAN No"
                className="w-full p-2 border-b"
              />
            </div>
            
           
            <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
              <Link to="/" >
                Create Account
              </Link>
            </button>
            <div className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to ="/Login" className="font-medium text-blue-500 ">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp