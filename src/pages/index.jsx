import React from "react";
import Layout from "../layouts";
import { motion } from "framer-motion";

const Index = () => {
  return (
    
      <Layout>
        <motion.div
          className="w-screen h-screen absolute "
          initial={{ y: "90%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, delay:0.25, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          Index
        </motion.div>
      </Layout>
    
  );
};

export default Index;
