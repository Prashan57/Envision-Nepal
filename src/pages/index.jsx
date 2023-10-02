import React from "react";
import Layout from "../layouts";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <div className=" from-gray-800 to-blue-900 via-teal-950  bg-gradient-to-r h-screen w-screen flex justify-center items-center relative">
        <img
          src="/Image.jpg"
          alt=""
          className="opacity-20 absolute h-full w-full"
        />
        <div className="flex flex-col justify-around w-full h-full items-center">
          <div>
            <h1 className="text-white text-5xl font-bold "> Envision Nepal</h1>
            <p className="text-white text-sm my-4 text-center">
              Procurement portal for every government trainings.
            </p>
          </div>

          <div className="mt-14">
            <p className="text-white">Nepal Government</p>
            <div className="flex justify-center mt-4">
              <img src="/nepal.jpg" alt="" className="h-10 w-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-screen bg-gray-100">
        <main className="container mx-auto py-8 flex flex-col items-center justify-center px-56">
          <h1 className="text-4xl font-bold mb-14">
            Welcome to Envision Nepal!
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            At Envision Nepal, we are committed to revolutionizing the
            procurement industry. As a leading procurement website, we strive to
            connect businesses and suppliers, fostering a seamless and efficient
            procurement process.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            Our platform offers a wide range of features and tools designed to
            simplify and streamline your procurement needs. Whether you are a
            buyer looking for reliable suppliers or a supplier eager to showcase
            your products and services, Envision Nepal is the ultimate
            destination for you.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            Why choose Envision Nepal? We provide an extensive supplier network,
            an efficient procurement process, quality assurance, competitive
            pricing, and personalized support. Join Envision Nepal today and
            unlock a world of possibilities in procurement.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            With our user-friendly interface and advanced search capabilities,
            finding the right suppliers for your procurement needs has never
            been easier. Our platform allows you to browse through a wide range
            of categories and filter results based on your specific
            requirements. Say goodbye to tedious supplier searches and discover
            the perfect partners for your business.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            We also offer a secure and transparent communication system that
            facilitates seamless collaboration between buyers and suppliers.
            Connect directly with potential suppliers, discuss project details,
            negotiate contracts, and track progress, all within our integrated
            messaging platform. Streamline your communication and ensure smooth
            procurement processes from start to finish.
          </p>
          {/* Additional content goes here */}
        </main>

        <div style={{ backgroundColor: "gray", marginBottom: "-100px" }}>
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Envision Nepal. All rights
            reserved.
          </p>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default Index;
