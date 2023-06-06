import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  motion } from "framer-motion";
import { useUserContext } from "../contexts/usercontext";
import Info from "../components/info";

const initialData={
    email:"",
}

const ForgotPassword = () => {
    const {onForgotPassword} = useUserContext();
    const navigate= useNavigate();

    const[submitData,setSubmitData]= useState(initialData);

  const [error,setError]= useState({
    errorText:"",
    field:"",
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response= await onForgotPassword(submitData);
    console.log("Submit Response: ",response)

    if(response.error){
        setError({
            errorText:response.error,
            field:response.field||"",
        });
    }

    if(response.success){
        setError({
            errorText:"",
            field:"",
        });
        navigate("/")
    }

  };
  const handleChange = ( value, key= "email") => {
      setSubmitData((prev)=>({
          ...prev,
          [key]:value,
        }));
        console.log(submitData)
  };
  return (
    <motion.div
      className="flex h-screen w-screen absolute bg-gray-800 items-center justify-center overflow-hidden"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-lg pb-8 pt-8 overflow-hidden w-96 flex flex-col items-center"
        initial={{ x: "-400%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.35 }}
        exit={{ opacity: 1 }}
      >
        <h2 className="text-2xl mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-80">
            <input
              type="email"
              id="email"
              value={submitData.email}
              onChange={(e)=>{handleChange(e.target.value,"email")}}
              placeholder="Enter your email"
              className="border-b  rounded px-3 py-2 w-full mb-1"
            />
          </div>
          {/* {!!error.infoText&&<Info type= "info">{error.infoText}</Info>} */}
          {!!error.errorText&&!error.field&&<Info type= "error">{error.errorText}</Info>}
          <button
            type="submit"
            className=" bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary  rounded py-2 px-4 "
          >
            Send Email 
          </button>
        </form>
        
      </motion.div>
    </motion.div>
  );
};

export default ForgotPassword;
