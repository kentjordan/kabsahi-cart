import React, { FunctionComponent, useState } from "react";

import FoodBanner from "./_components/FoodBanner";
import AddToCart from "./_components/AddToCart";
import Options from "./_components/Options";
import { motion } from "framer-motion";

const FoodOptions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ ease: "anticipate", duration: 0.25 }}
      animate={{ opacity: 1 }}
      className="fixed z-40 flex h-screen w-full items-center justify-center overflow-hidden bg-black/60 md:p-2"
    >
      <motion.div
        initial={{ y: 1000 }}
        transition={{ ease: "anticipate", duration: 0.5 }}
        animate={{ y: 0 }}
        className="relative flex h-screen w-[600px] min-w-[320px] flex-col items-center bg-white shadow sm:h-[768px] sm:rounded-md"
      >
        <FoodBanner />
        <Options />
        <AddToCart />
      </motion.div>
    </motion.div>
  );};

export default FoodOptions;
